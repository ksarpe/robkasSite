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

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll("#navbarSupportedContent .nav-link");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var navbarToggler = document.querySelector(".navbar-toggler");
        var isTogglerOpen = navbarToggler.getAttribute("aria-expanded");

        if (isTogglerOpen === "true") {
          navbarToggler.click();
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // ...
    // Include your existing code here
    // ...

    const revealSections = document.querySelectorAll('.reveal-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -200px 0px' // Adjust the value to change the trigger point
      });

    revealSections.forEach((section) => {
      observer.observe(section);
    });
  });

  document.querySelectorAll('.nav-link-custom').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.dataset.target);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50, // Adjust the offset value as needed
          behavior: 'smooth'
        });
      }
    });
  });