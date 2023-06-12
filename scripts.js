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
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    let language;

    $.getJSON(`https://cycclon.github.io/lang/${localStorage.getItem('language')}.json`, function(json) {
        console.log(json);
        language = json;
    });

    // $.ajax({ 
    // url:  '/lang/' +  localStorage.getItem('language') + '.json', 
    // dataType: 'json', async: false, dataType: 'json', 
    // success: function (lang) { language = lang } });
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
    $('#title-label').text(language.home.full_title_label)
    $('#title-text').text(language.home.full_title)
    $('#country-label').text(language.home.country_label)
    $('#country-text').html(language.home.country + ` <img src="assets/Argentina.png" />`)
    $('#birth-label').text(language.home.age_label)
    $('#birth-text').text(language.home.age + ` (${getAge("12/15/1983")})`)
    

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