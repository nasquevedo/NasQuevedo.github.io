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

const errors = {
    'en': {
        'from': 'Your E-Mail is required',
        'subject': 'Subject is Required',
        'message': "Message is required"
    },
    'es': {
        'from': 'El correo es requiredo',
        'subject': "El Asunto es requerido",
        'message': "El mensaje es requerido"
    }
}
