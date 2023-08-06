window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
}

// LANGUAGE HANDLING
 
function getLanguage() {
    // console.log("Entered getLanguage function");
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    let language;
    $.ajax({ 
    url:  'lang/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json', async: false, dataType: 'json', 
    success: function (lang) { language = lang } });
    return language;
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
}   

// ENLARGE IMAGE SLIDER
function enlarge(slider, image){
    document.getElementById(slider).showModal();
    document.getElementById('fs-image').setAttribute('src', image);
}

// CLOSE IMAGE SLIDER
function closeIS(slider){
    document.getElementById(slider).close();
}

// THEME HANDLING
function toggleTheme() {
    (localStorage.getItem('theme') == null) ? localStorage.setItem('theme', 'dark') : 
    (localStorage.getItem('theme') === 'dark') ? localStorage.setItem('theme', 'light')
    : localStorage.setItem('theme', 'dark');
    location.reload();
}

$(document).ready(function(){
    // LOAD TEXTS FORM LANG FILES
    const language = getLanguage();
    // console.log(language);
    //HEADER
    $('#title').text(language.title);
    //MENU
    $('#home').text(language.menu.home);
    $('#about').text(language.menu.about);
    $('#projects').text(language.menu.projects);
    $('#contact').text(language.menu.contact);

    //LANGUAGE
    $('#english').text(language.language.english);
    $('#spanish').text(language.language.spanish);

    // IMAGE MODAL
    $('#close-sup').text(language.close_image);
    $('#close-inf').text(language.close_image);

    //HOME
    const bookIcon = "<svg xmlns='http://www.w3.org/2000/svg' class='section-icon' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' /></svg>";
    const briefCaseIcon = "<svg xmlns='http://www.w3.org/2000/svg' class='section-icon' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>";
    const envelopeIcon = "<svg xmlns='http://www.w3.org/2000/svg' class='section-icon' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' /></svg>";
    const academyIcon = "<svg xmlns='http://www.w3.org/2000/svg' class='section-icon' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' /></svg>";

    $('#introduction').text(language.home.introduction);
    $('#introduction-long').text(language.home.introduction_long);
    $('#title-label').text(language.home.full_title_label);
    $('#title-text').text(language.home.full_title);
    $('#country-label').text(language.home.country_label);
    $('#country-text').html(language.home.country + ` <img src="assets/Argentina.png" />`);
    $('#birth-label').text(language.home.age_label);
    $('#birth-text').text(language.home.age + ` (${getAge("12/15/1983")})`);
    $('#spl-label').text(language.home.spl_label);
    $('#spl-text').text(language.home.spl);
    $('#knowledge').html(bookIcon + language.home.knowledge.knowledge_title);
    $('#languages-label').text(language.home.knowledge.languages_label);
    $('#libraries-label').text(language.home.knowledge.libraries_label);
    $('#IDEs-label').text(language.home.knowledge.IDEs_label);
    $('#DBs-label').text(language.home.knowledge.DBs_label);
    $('#OSs-label').text(language.home.knowledge.OSs_label);
    $('#methodologies-label').text(language.home.knowledge.methodologies.methodologies_label);
    $('#oo').text(language.home.knowledge.methodologies.oo);
    $('#rest').text(language.home.knowledge.methodologies.rest);
    $('#layers').text(language.home.knowledge.methodologies.layers);
    $('#mvc').text(language.home.knowledge.methodologies.mvc);    
    $('#uml').text(language.home.knowledge.methodologies.uml);
    $('#modeling-tools-label').text(language.projects.modeling_tools);

    //STUDIES
    $('#studies-title').html(academyIcon + language.home.studies.studies_title);
    $('#st-degree-label').text(language.home.studies.st_degree_label);
    $('#st-degree-text').text(language.home.studies.st_degree_text);
    $('#graduate-label').text(language.home.studies.graduate_label);
    $('#graduate-text').text(language.home.studies.graduate_text);
    $('#gt-year').text(language.home.studies.st_year);
    $('#st-year-label').text(language.home.studies.st_year);
    $('#mba-degree-label').text(language.home.studies.mba_degree_label);
    $('#mba-degree-text').text(language.home.studies.mba_degree_text);
    $('#mba-year-label').text(language.home.studies.st_year);

    //EXPERIENCE
    $('#experience').html(briefCaseIcon + language.home.experience.experience_title);
    $('#tp-description').text(language.home.experience.tp_description);
    $('#tp-from').text(language.home.experience.from);
    $('#tp-to').text(language.home.experience.to);
    $('#tp-from-date').text(language.home.experience.tp_from_date);
    $('#tp-to-date').text(language.home.experience.tp_to_date);
    $('#tp-roles-label').text(language.home.experience.roles_label);
    $('#tp-roles').text(language.home.experience.tp_roles);
    $('#tp-responsabilities-label').text(language.home.experience.responsabilities_label);
    $('#tp-responsabilities').html('<ul>');
    for(const prop in language.home.experience.tp_responsabilities){        
        $('#tp-responsabilities').append(`<li>${language.home.experience.tp_responsabilities[prop]}</li>`);
    }
    $('#tp-responsabilities').append('</ul>');

    $('#grido-description').text(language.home.experience.grido_description);    
    $('#grido-from').text(language.home.experience.from);
    $('#grido-to').text(language.home.experience.to);
    $('#grido-from-date').text(language.home.experience.grido_from_date);
    $('#grido-to-date').text(language.home.experience.grido_to_date);
    $('#grido-roles-label').text(language.home.experience.roles_label);
    $('#grido-roles').text(language.home.experience.grido_roles);
    $('#grido-responsabilities-label').text(language.home.experience.responsabilities_label);    
    $('#grido-responsabilities').html('<ul>');
    for(const prop in language.home.experience.grido_responsabilities){
        $('#grido-responsabilities').append(`<li>${language.home.experience.grido_responsabilities[prop]}</li>`);
    }
    $('#grido-responsabilities').append('</ul>');
    //PROJECTS
    $('#projects-title').html(briefCaseIcon + language.projects.projects_title);
    $('#best-movies-description').text(language.projects.best_movies.best_movies_description);
    $('#bm-database').text(language.projects.database);
    $('#bm-IDEs').text(language.projects.IDEs_tools);
    $('#wc-database').text(language.projects.database);
    $('#wc-IDEs').text(language.projects.IDEs_tools);
    $('#wc-description').text(language.projects.wordle_game.wc_description);
    $('#vouchers-title').text(language.projects.vouchers.vouchers_title);
    $('#siv-language').text(language.home.knowledge.languages_label);
    $('#siv-database').text(language.home.knowledge.DBs_label);
    $('#siv-IDEs').text(language.projects.IDEs_tools);
    $('#siv-modeling').text(language.projects.modeling_tools);
    $('#siv-description').text(language.projects.vouchers.vouchers_description);
    $('#siv-architecture').text(language.projects.architecture);
    $('#siv-year').text(language.projects.year);
    $('#siv-functionality-label').text(language.projects.functionality);
    $('#siv-functionality').html('<ul>');
    for(const prop in language.projects.vouchers.functionality){
        $('#siv-functionality').append(`<li>${language.projects.vouchers.functionality[prop]}</li>`);
    }
    $('#siv-functionality').append('</ul>');

    $('#bic-title').text(language.projects.bic.bic_title);
    $('#bic-description').text(language.projects.bic.bic_description);
    $('#bic-language').text(language.home.knowledge.languages_label);
    $('#bic-database').text(language.home.knowledge.DBs_label);
    $('#bic-IDEs').text(language.projects.IDEs_tools);
    $('#bic-modeling').text(language.projects.modeling_tools);
    $('#bic-architecture').text(language.projects.architecture);
    $('#bic-year').text(language.projects.year);
    $('#bic-functionality-label').text(language.projects.functionality);
    $('#bic-functionality').html('<ul>');
    for(const prop in language.projects.bic.functionality){
        $('#bic-functionality').append(`<li>${language.projects.bic.functionality[prop]}</li>`);
    }
    $('#bic-functionality').append('</ul>');

    //CONTACT
    $('#contact-title').html(envelopeIcon + language.contact.contact_title);
    $('#email').text(language.contact.email);
    $('#phone').text(language.contact.phone);
    $('#social-media').text(language.contact.social_media)

    //HIGHLIGHTED OPTIONS
    if (localStorage.getItem('language')==='es') {
        $('#spanish').addClass('active');
        $('#english').removeClass('active');
    }  else {
        $('#spanish').removeClass('active');
        $('#english').addClass('active');
    }

    // HOME ANIMATIONS    
    $('#full-title').addClass('visible');
    $('#full-title-separator').addClass('visible');
    $('#country').addClass('visible');
    $('#country-separator').addClass('visible');
    $('#date-birth').addClass('visible');
    $('#birth-separator').addClass('visible');
    $('#sp-languages').addClass('visible');
    $('#spl-separator').addClass('visible');
    $('#knowledge-section').addClass('visible');
    $('#experience-section').addClass('visible');
    $('#projects-section').addClass('visible');
    $('#contact-section').addClass('visible');
    $('#studies-section').addClass('visible');

    // SET THEME
    (localStorage.getItem('theme') === 'light') ? $('body').addClass('light')
    : $('body').removeClass('light');

    //SET THEME BUTTON            
    //SUN ICON
    const sunIcon = "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='theme-icon'><path stroke-linecap='round' stroke-linejoin='round' d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' /></svg>";
    //MOON ICON
    const moonIcon = "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='theme-icon'><path stroke-linecap='round' stroke-linejoin='round' d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' /></svg>";
    //console.log('ok')
    (localStorage.getItem('theme') === 'light') ? $('#theme').html(moonIcon) : $('#theme').html(sunIcon);

    // CALCULATE AGE BASED ON DATE OF BIRTH
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }    
});
