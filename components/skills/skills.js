const skills = async () => {
    const result = await getFetch(`${MODEL_ENDPOINT}${SKILLS_ENDPOINT}`)

    result.data.forEach(skill => {
        jQuery("#skills").append(`<span class='skill-pills'>${skill.name}</span>`)
    });
};

skills();