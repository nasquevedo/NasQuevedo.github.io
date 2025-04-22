const getLanguageRows = (langs) => {
    let rows = '';
    langs.forEach(language =>{
        rows += `<tr>
                    <td>${language.name}</td>
                    <td>${language.listening}</td>g
                    <td>${language.reading}</td>
                    <td>${language.speaking}</td>
                    <td>${language.writing}</td>
                </tr>`;
    });

    return rows;
}

const languages = async () => {
    const response = await fetch("./src/model/language.json");
    const result = await response.json();

    const currentLanguageItems = result.data.filter(item => {
        return item.lang === lang
    }); 

    currentLanguageItems.forEach(item => {
        jQuery("#native").html(item.native);
        jQuery("#language-table-body").html(getLanguageRows(item.others));
    });
    
}