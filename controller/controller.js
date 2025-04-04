jQuery(document).ready(() => {
    experience();
    skills();
    languages();
    projects();
});

const titles = async () => {
    try {
        const response = await fetch(`./lang/${lang}.json`);
        const result = await response.json();

        result.data.forEach(item => {
            jQuery("#" +  item.id).html(item.value);
        });
    } catch(e) {
        console.log("Error trying to get the titles", e);
    }
};

const experience = async () => {

    try {
        const response = await fetch("./model/experience.json");
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
        const response = await fetch("./model/education.json");
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

const skills = async () => {
    try {
        const response = await fetch("./model/skills.json");
        const result = await response.json();

        result.data.forEach(item => {
            jQuery("#skills").append(`<h5>${item.name}</h5>`);
            jQuery("#skills").append(skillChildren(item.items));
        });
    } catch(e) {
        console.log("Error trying to get the skills", e);
    }
};

const skillChildren = (item) => {
    html  = '';
    item.forEach(skill => {
        html += `<span class='skill-pills'>${skill.name}</span>`;
    });

    return html;
}

const languages = async () => {
    const response = await fetch("./model/language.json");
    const result = await response.json();

    const currentLanguageItems = result.data.filter(item => {
        return item.lang === lang
    }); 

    currentLanguageItems.forEach(item => {
        jQuery("#native").html(item.native);
        jQuery("#language-table-body").html(getLanguageRows(item.others));
    });
    
}

const getLanguageRows = (langs) => {
    let rows = '';
    langs.forEach(language =>{
        rows += `<tr>
                    <td>${language.name}</td>
                    <td>${language.listening}</td>
                    <td>${language.reading}</td>
                    <td>${language.speaking}</td>
                </tr>`;
    });

    return rows;
}

const projects = async () => {
    try {
        const response = await fetch("./model/projects.json");
        const result = await response.json();

        let html = "";
        result.data.forEach(item => {

            html += `<div class="overlay-container">
                        <img class="img-projects" src="${item.logo}" alt="${item.name}" title="${item.name}"/>
                        <div class="overlay" onclick="views('${item.name}')">
                            <p><b>${item.name}</b></p>
                            <!--<a href="#">View</a>-->
                        </div>
                    </div>`;
        });

        jQuery("#projects").html(html);
    } catch(e) {
        console.log("Error trying to get the projects", e);
    }
};