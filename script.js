// اسلایدر خودکار
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 5000);

// لودینگ و اسکرول
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

const header = document.querySelector('header');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // نمایش دکمه بازگشت به بالا
    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

    // انیمیشن ظهور بخش‌ها
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});