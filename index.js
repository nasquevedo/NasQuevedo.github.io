var lang = 'en';
if (localStorage.getItem('lang') === undefined || localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', lang);
} else {
    lang = localStorage.getItem('lang');
}

const activeLink = (id) => {
    jQuery(".nav-main-link").removeClass('active');

    jQuery("#" + id).addClass('active');
}

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
    languages();
};

changeLang(localStorage.getItem('lang'));

const toggle = document.getElementById('darkToggle');
    toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});