const projects = async () => {
    try {
        const response = await fetch("./src/model/projects.json");
        const result = await response.json();

        let html = "";
        result.data.forEach(item => {

            html += `<div class="project-card">
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

projects();