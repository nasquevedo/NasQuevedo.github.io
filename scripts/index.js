var lang = 'en';
if (localStorage.getItem('lang') === undefined || localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', lang);
} else {
    lang = localStorage.getItem('lang');
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

const activeLink = (id) => {
    jQuery(".nav-main-link").removeClass('active');

    jQuery("#" + id).addClass('active');
}

const titles = async () => {
    const result = await getFetch(`./lang/${lang}.json`);
    result.data.forEach(item => {
        jQuery("#" +  item.id).html(item.value);
    });
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
};

changeLang(localStorage.getItem('lang'));

const toggle = document.getElementById('darkToggle');
    toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const openCv = () =>
{
    const link = document.createElement("a");
    link.href = `./cv/${lang}/santiago-quevedo.pdf`; // Ruta al archivo
    link.download = "CV-Santiago-Quevedo.pdf"; // Nombre al guardar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}