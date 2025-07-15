const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

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

// Optional: Auto-slide every 5 sec
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
