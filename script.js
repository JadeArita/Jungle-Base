const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const navbar = document.querySelector('.navbar'); 
function toggleMenu() {
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
}

let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
  current = index;
}

function currentSlide(index) {
  showSlide(index);
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);



let lastScrollTop = 0; 
const scrollThreshold = 50; 

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight + scrollThreshold) {
    
    navbar.classList.remove('show-nav'); 
  } else if (scrollTop < lastScrollTop && scrollTop > 0) {
   
    navbar.classList.add('show-nav');
  } else if (scrollTop === 0) {
    
    navbar.classList.add('show-nav');
  }

  lastScrollTop = scrollTop;
});


document.addEventListener('DOMContentLoaded', () => {
  if (window.pageYOffset === 0) {
    navbar.classList.add('show-nav');
  }
});
