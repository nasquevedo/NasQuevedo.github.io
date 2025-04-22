const skills = async () => {
    try {
        const response = await fetch("./src/model/skills.json");
        const result = await response.json();

        result.data.forEach(skill => {
            jQuery("#skills").append(`<span class='skill-pills'>${skill.name}</span>`)
        });
    } catch(e) {
        console.log("Error trying to get the skills", e);
    }
};

skills();