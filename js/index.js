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

const activeLink = (id) => {
    jQuery(".nav-main-link").removeClass('active');

    jQuery("#" + id).addClass('active');
}

const showMoreLessSkills = (id, action, buttonId) => {
    action === 'show' ? jQuery("#" + id).css('display', 'flex') : jQuery("#" + id).hide();
    
    action === 'hide' ? jQuery("#" + buttonId.replace('less', 'more')).show() : jQuery("#" + buttonId.replace('more', 'less')).show();

    jQuery("#" + buttonId).hide();
}

const sendForm = () => {
    const form = new Array();

    form['from'] = jQuery("#from-input");
    form['subject'] = jQuery("#subject-input");
    form['message'] = jQuery("#message-input");

    let validation = validate(form);

    if (validation === false) {
        return false;
    }

    send(
        form['from'].val(), 
        form['subject'].val(), 
        form['message'].val()
    );
}

const validate = (form) => {
    const error = jQuery("#error");
    let isValid = true;

    for (let key in form) {
        if (form[key].val() === '') {
            error.text(errors[lang][key]);
            form[key].addClass('input-errors');
            isValid = false;
            break;
        }
    }
   
    return isValid;
}

const cleanErrors = (id) => {
    jQuery("#error").text('');
    jQuery("#" + id).removeClass('input-errors');
}