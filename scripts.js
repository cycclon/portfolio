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

    //HOME
    const bookIcon = "<svg xmlns='http://www.w3.org/2000/svg' class='section-icon' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' /></svg>";
    const briefCaseIcon = "<svg xmlns='http://www.w3.org/2000/svg' class='section-icon' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>";
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
    $('#grido-description').text(language.home.experience.grido_description);
    $('#tp-responsabilities').append('</ul>');
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

    //PROJECTS
    $('#projects-title').html(briefCaseIcon + language.projects.projects_title);
    $('#best-movies-description').text(language.projects.best_movies.best_movies_description);
    $('#bm-database').text(language.projects.database);
    $('#bm-IDEs').text(language.projects.IDEs_tools);
    $('#wc-database').text(language.projects.database);
    $('#wc-IDEs').text(language.projects.IDEs_tools);
    $('#wc-description').text(language.projects.wc_description);


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
