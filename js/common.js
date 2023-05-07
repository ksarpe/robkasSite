// common.js
// document.addEventListener("DOMContentLoaded", function() {
//     fetch('navbar.html')
//         .then(response => response.text())
//         .then(navbarHtml => {
//             document.getElementById('navbar-placeholder').innerHTML = navbarHtml;
//             setActiveNav();
//         });
// });

// function setActiveNav() {
//     let currentPath = window.location.pathname;
//     let navLinks = document.querySelectorAll('.nav-link');
    
//     navLinks.forEach(link => {
//         let href = link.getAttribute('href');
//         if (currentPath.endsWith(href)) {
//             link.closest('.nav-item').classList.add('active');
//         } else {
//             link.closest('.nav-item').classList.remove('active');
//         }
//     });
// }

function switchLanguage(lang) {
    var elements = document.querySelectorAll('[data-' + lang + ']');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var text = element.getAttribute('data-' + lang);
        element.textContent = text;
    }
}

document.getElementById('en').addEventListener('click', function(event) {
    event.preventDefault();
    switchLanguage('en');
});
document.getElementById('nl').addEventListener('click', function(event) {
    event.preventDefault();
    switchLanguage('nl');
});

var navLinks = document.querySelectorAll('.nav-link-custom');

function setActiveLink(target) {
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    target.classList.add('active');
}
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
        setActiveLink(event.target);
    });
}
