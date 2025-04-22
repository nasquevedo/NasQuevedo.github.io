var projects = {};

const getProjects = async () => {
    try {
        const response = await fetch("./src/model/projects.json");
        const result = await response.json();

        let html = "";
        projects = result.data;
        projects.forEach(item => {
            const technologies = getTechnologies(item.technologies)
            html += `<div class="project-card" onClick="showLessMore(${item.id})">
                        <input id="${item.id}" type="hidden" value="closed" />
                        <img class="img-projects" src="${item.logo}" alt="${item.name}" title="${item.name}"/>
                        <div class="overlay">
                            <p><b>${item.name}</b></p>
                            <p id="description_${item.id}">${item[lang + '_short_description']}</p>
                            <a href="${item.repository}" target="_blank">
                                <i class="bi bi-github"></i>
                            </a><br>
                            <div id="project-skills">${technologies}</div>
                        </div>
                    </div>`;
        });

        jQuery("#projects").html(html);
    } catch(e) {
        console.log("Error trying to get the projects", e);
    }
};

const getTechnologies = (technologies) => {
    techs = '';
    techArray = technologies.split(' ');
    techArray.forEach(tech => {
        techs += `<span class="skill-pills">${tech}</span>`
    });

    return techs;
}

const showLessMore = (id) => {
    const project = projects.filter(item => item.id === id)

    if (jQuery("#" + id).val() === 'closed') {
        jQuery("#" + id).val('open')
        jQuery("#description_" + id).html(`${project[0][lang + "_description"]}`)
        return
    }

    jQuery("#" + id).val('closed')
    jQuery("#description_" +id).html(`${project[0][lang + "_short_description"]}`)
    return
}

getProjects();