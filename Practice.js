document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  
    // Back-to-top button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
    const highlight = document.getElementById('high');
    highlight.style.backgroundColor= "red";
  });
  