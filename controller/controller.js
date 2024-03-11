jQuery(document).ready(() => {
    //views(currentModule);
    experience();
    projects();
});

const views = (view) => {
    let module = (view === 'home') ? view : 'project';
    jQuery.ajax({
        url: `./views/${module}.html`,
        dataType: "html",
        success: response => {
            jQuery("#main").html(response);
            localStorage.setItem('module', 'home');

            if (view !== 'home') {
                project(view);
                localStorage.setItem('module', view);
            }

            titles();
            
        }
    });
};

const titles = () => {
    jQuery.ajax({
        url: "./lang/" + lang + '.json',
        dataType: 'json',
        success: (response) => {
            response.data.forEach(item => {
                jQuery("#" +  item.id).html(item.value);
            });
        }
    });
};

const experience = () => {
    jQuery.ajax({
        url: "./model/experience.json",
        dataType: "json",
        success: response => {
            html = "";
            response.data.forEach(item => {
                html +=`<a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">${item.company}</h5>
                            </div>
                            <p class="mb-1">${item.position}</p>
                            <small class="text-body-secondary">${item.start_date} - ${item.end_date}</small>
                        </a>`;
            });

            jQuery("#experience-list").html(html);
        }
    });
};

const education = () => {
    jQuery.ajax({
        url: "./model/education.json",
        dataType: "json",
        success: response => {
            let html = "";
            response.data.forEach(item => {
                html += `<a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">${item.institute}</h5>
                            </div>
                            <p class="mb-1">${item.title}</p>
                            <small class="text-body-secondary">${item.year}</small>
                        </a>`;
            });   

            jQuery("#education-list").html(html);
        }
    });
};

const skills = () => {
    jQuery.ajax({
        url: "./model/skills.json",
        dataType: "json",
        success: (response) => {
            let html = "";
            const cont = new Array();
            response.data.forEach((item) => {
                html += `<div class="row align-items-center">` + 
                            `<div class='row skill-row'>` + 
                                `<div class="col-sm-1">` +
                                    `<i id="show-less-${item.name}" class="show-less-skills bi bi-caret-down" onclick="showMoreLessSkills('${item.name}-children', 'hide', this.id);"></i>` +
                                    `<i id="show-more-${item.name}" class="show-more-skills bi bi-caret-right" onclick="showMoreLessSkills('${item.name}-children', 'show', this.id); skillChildren('${item.name}');"></i>` +
                                `</div>` +   
                                `<div class="col-sm-1">` + 
                                    `<img class="icons" src="./img/icons/${item.name}.png" title="${item.name}" alt="${item.name}" />` +
                                `</div>` +
                                `<div class="col-sm-10">` +
                                    `<div id="progress-${item.name}" class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">` +
                                        `<div id="progress-bar-${item.name}" class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>` +
                                    `</div>` +
                                `</div>` +
                            `</div>`; 

                cont[item.name] = 0;       

                if (item.children !== undefined) {
                    html += `<div id="${item.name}-children" class="row subskills">`;

                    item.children.forEach((child) => {
                        html += `<div class="row children-row">
                                    <div class="col-sm-1">
                                    </div>
                                    <div class="col-sm-1">
                                        <img class="icons" src="./img/icons/${child.name}.png" title="${child.name}" alt="${child.name}" />
                                    </div>
                                    <div class="col-sm-10">
                                        <div id="progress-${child.name}" class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            <div id="progress-bar-${child.name}" class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>
                                        </div>
                                    </div>
                                </div>`;
                            
                    }); 
                    html += `</div>`;
                }

                html += `</div>`;

                
            });

            jQuery("#pills-skills").html(html);

            response.data.forEach((item) => {
                setInterval((t, p)=> {
                    if (cont[t] <= p) {
                        jQuery("#progress-" + t).attr("aria-valuenow", cont[t]);
                        jQuery("#progress-bar-" + t).attr("style", `width: ${cont[t]}%`);
                        cont[t]++;
                    } else {
                        clearInterval();
                    }
                }, 50, item.name, item.percentage);
            });
        }
    });
};

const skillChildren = (father) => {
    jQuery.ajax({
        url: "./model/skills.json",
        dataType: "json",
        success: (response) => {
            const skill = response.data.filter(item => {
                return item.name === father
            });

            if (skill[0].children !== undefined) {
                const cont = new Array();

                skill[0].children.forEach(child => {
                    cont[child.name] = child.percentage;

                    setInterval((t, p)=> {

                        if (cont[t] <= p) {
                            jQuery("#progress-" + t).attr("aria-valuenow", cont[t]);
                            jQuery("#progress-bar-" + t).attr("style", `width: ${cont[t]}%`);
                            cont[t]++;
                        } else {
                            clearInterval();
                        }
                    }, 50, child.name, child.percentage);
                });
            }

        }
    });
}

const project = (name) => {
    jQuery.ajax({
        url: "./model/projects.json",
        dataType: "json",
        success: response => {

            const project = response.data.filter(item => {
                return item.name === name;
            });

            let html = "";
            let tech = "";
            project.forEach(item => {

                const titles = [ 
                    'Visitar Sitio Web',
                    'Visitar Repositorio',
                    'Visitar Repositorio Backend'
                ]; 

                if (lang === 'en') {
                    titles[0] = 'Visit Web Site';
                    titles[1] = 'Visit Repository';
                    titles[2] = 'Visit Backend Repository';
                }

                html +=  `<h1 id="project-title">${item.name}</h1>
                        <p id="project-description">${item[`${lang}_description`]}</p>
                        <img class="img-fluid" src="${item.home}" alt="${item.name}" />
                        <div class="col-sm-12 text-center">
                            <a href="${item.url}" target="_blank">
                                <img class="icons" src="./img/icons/world-wide-web.png" alt="${titles[0]}" title="${titles[0]}" />
                            </a>
                            <a href="${item.repository}" target="_blank">
                                <img class="icons" src="./img/icons/github.png" alt="${titles[1]}" title="${titles[1]}" />
                            </a>`;
                        
                if (item.backend_repository !== undefined) {
                    html += `<a href="${item.backend_repository}" target="_blank">
                        <img class="icons" src="./img/icons/github.png" alt="${titles[2]}" title="${titles[2]}" />
                    </a>`;
                }

                html += "</div>";

                item.technologies.split(" ").forEach(item => {
                    tech += `<img class="technology-icon" src="./img/icons/${item}.png" alt="${item}" title="${item}" />`;
                });
                
                console.log(tech);
            });

            jQuery("#project").append(html);
            jQuery("#technologies").append(tech);
        }
    });
};

const projects = () => {
    jQuery.ajax({
        url: "./model/projects.json",
        dataType: "json",
        success: response => {
            let html = "";
            response.data.forEach(item => {

                html += `<div class="overlay-container">
                            <img class="img-projects" src="${item.logo}" alt="${item.name}" title="${item.name}"/>
                            <div class="overlay" onclick="views('${item.name}')">
                                <p><b>${item.name}</b></p>
                                <!--<a href="#">View</a>-->
                            </div>
                        </div>`;
            });

            jQuery("#projects").html(html);
        }
    });
};