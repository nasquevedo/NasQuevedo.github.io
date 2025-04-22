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
    try {
        const response = await fetch("./src/model/experience.json");
        const result = await response.json();

        html = '';
        result.data.forEach(item => {
            html += returnPill(item, true);
        });

        jQuery("#experience-list").html(html);
    } catch(e) {
        console.log("Error trying to get experience info", e);
    }
};

const education = async () => {
    try {
        const response = await fetch("./src/model/education.json");
        const result = await response.json();

        html = ''
        result.data.forEach(item => {
            html += returnPill(item);
        });

        jQuery("#education-list").html(html);
    } catch(e) {
        console.log("Error trying to get education info", e);
    }
};

experience();
education();