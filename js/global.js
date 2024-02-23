var lang;
if (localStorage.getItem('lang') === undefined || localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en')
    lang = 'en';
} else {
    lang = localStorage.getItem('lang');
}