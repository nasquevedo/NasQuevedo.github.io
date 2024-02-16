var lang;
if (localStorage.getItem('lang') === undefined || localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en')
    lang = 'en';
} else {
    lang = localStorage.getItem('lang');
}

const titles = () => {
    jQuery.ajax({
        url: "./lang/" + lang + '.json',
        dataType: 'json',
        success: (response) => {
            response.navbar.forEach(item => {
                jQuery("#" +  item.id).html(item.value);
            });

            response.home.forEach(item => {
                jQuery("#" + item.id).html(item.value);
            });

            response.profile.forEach(item => {
                jQuery("#" + item.id).html(item.value);
            });

            response.portfolio.forEach(item => {
                jQuery("#" + item.id).html(item.value);
            });

            response.contact.forEach(item => {
                jQuery("#" + item.id).html(item.value);
            });
        }
    });
};

titles();

const changeLang = (value) => {
    localStorage.setItem('lang', value);
    lang = value;

    html = "<img class='icons' src='./img/icons/estados-unidos.png' alt='USA flag'/>";
    html += " EN" 
    jQuery("#current-lang").html(html);
    if (value === 'es') {
        html = "<img class='icons' src='./img/icons/colombia.png' alt='usa flag'/>";
        html += " ES"
        jQuery("#current-lang").html(html);
    }

    titles();
};