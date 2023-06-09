"use strict"
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// Функция для переключения на следующий слайд
function nextSlide() {
  slides[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
  indicators[currentIndex].classList.add('active');
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  slides[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
  indicators[currentIndex].classList.add('active');
}

// Функция для переключения на выбранный слайд по индикатору
function goToSlide(index) {
  slides[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
  indicators[currentIndex].classList.add('active');
}

// Обработчики событий для кнопок переключения и индикаторов
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Установка активного класса для первого слайда и индикатора при загрузке страницы
slides[currentIndex].classList.add('active');
indicators[currentIndex].classList.add('active');