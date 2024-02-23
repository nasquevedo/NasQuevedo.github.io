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

        }
    });
}

views(currentModule);

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

titles();

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
}

experience();

const education = () => {
    jQuery.ajax({
        url: "./model/education.json",
        dataType: "json",
        success: reponse => {
            
        }
    });
};

const skills = () => {
    jQuery.ajax({
        url: "./model/skills.json",
        dataType: "json",
        success: (response) => {
            html = "";
            response.data.forEach((item) => {
                html += `<div class="row align-items-center">` + 
                            `<div class='row'>` + 
                                `<div class="col-sm-1">` +
                                    `<i id="show-less-${item.name}" class="show-less-skills bi bi-caret-down" onclick="showMoreLessSkills('${item.name}-children', 'hide', this.id);"></i>` +
                                    `<i id="show-more-${item.name}" class="show-more-skills bi bi-caret-right" onclick="showMoreLessSkills('${item.name}-children', 'show', this.id);"></i>` +
                                `</div>` +   
                                `<div class="col-sm-1">` + 
                                    `<img class="icons" src="./img/icons/${item.name}.png" title="${item.name}" alt="${item.name}" />` +
                                `</div>` +
                                `<div class="col-sm-10">` +
                                    `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100">` +
                                        `<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${item.percentage}%"></div>` +
                                    `</div>` +
                                `</div>` +
                            `</div>`; 
                        

                if (item.children !== undefined) {
                    html += `<div id="${item.name}-children" class="row subskills">`;

                    item.children.forEach((children) => {
                        html += `<div class="row">
                                    <div class="col-sm-1">
                                    </div>
                                    <div class="col-sm-1">
                                        <img class="icons" src="./img/icons/${children.name}.png" title="${children.name}" alt="${children.name}" />
                                    </div>
                                    <div class="col-sm-10">
                                        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="${children.percentage}" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${children.percentage}%"></div>
                                        </div>
                                    </div>
                                </div>`;
                            
                    }); 
                    html += `</div>`;  
                }

                html += `</div>`;
            });

            jQuery("#pills-skills").html(html);
        }
    });
};

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
                html +=  `<h1 id="project-title">${item.name}</h1>
                        <p id="project-description">${item[`${lang}_description`]}</p>
                        <img class="img-fluid" src="${item.home}" alt="${item.name}" />
                        <a href="${item.url}">Visitar sitio</a>`;

                
                item.technologies.split(" ").forEach(item => {
                    tech += `<img class="tecnology-icon" src="./img/icons/${item}.png" alt="${item}" title="${item}" />`;
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
                            <img class="img-projects" src="${item.logo}" />
                            <div class="overlay" onclick="views('${item.name}')">
                                <p><b>${item.name}</b></p>
                                <!--<a href="#">View</a>-->
                            </div>
                        </div>`;
            });

            jQuery("#projects").html(html);
        }
    });
}

projects();