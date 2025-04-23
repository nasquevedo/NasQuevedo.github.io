const returnPill = (item, experience) => {
    let institute = item.institute;
    let title = item.title;
    let year = item.year;
    if (experience) {
        institute = item.company;
        title = item.position;
        year = `${item.start_date} - ${item.end_date}`; 
    }

    return `<a href="#" class="list-group-item list-group-item-action" aria-current="true">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${institute}</h5>
                </div>
                <p class="mb-1">${title}</p>
                <small class="text-body-secondary">${year}</small>
            </a>`;
}

const experience = async () => {
    const result = await getFetch(`${MODEL_ENDPOINT}${EXPERIENCE_ENDPONT}`)

    html = '';
    result.data.forEach(item => {
        html += returnPill(item, true);
    });

    jQuery("#experience-list").html(html);
};

const education = async () => {
        const result = await getFetch(`${MODEL_ENDPOINT}${EDUCATION_ENDPOINT}`)

        html = ''
        result.data.forEach(item => {
            html += returnPill(item);
        });

        jQuery("#education-list").html(html);
};

experience();
education();