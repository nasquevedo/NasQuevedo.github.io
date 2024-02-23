var lang = 'en';
if (localStorage.getItem('lang') === undefined || localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', lang);
} else {
    lang = localStorage.getItem('lang');
}

var currentModule = "home";
if (localStorage.getItem('module') === undefined || localStorage.getItem('module') === null) {
    localStorage.setItem('module', currentModule);
} else {
    currentModule = localStorage.getItem('module');
}