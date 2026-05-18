const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".bampForBigAbout");
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    updateDots();
    startAutoPlay();
    console.log(intervalid);
  }
}

function startAutoPlay() {
  if (intervalid !== null) {
    clearInterval(intervalid);
  }
  intervalid = setInterval(() => {
    nextSlide();
  }, 5000);
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
  updateDots();
}

function prevSlide() {
  clearInterval(intervalid);
  slideIndex--;
  showSlide(slideIndex);
  startAutoPlay();
}

function nextSlide() {
  clearInterval(intervalid);
  slideIndex++;
  showSlide(slideIndex);
  startAutoPlay();
}

// Добавляем обработчики для точек
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(intervalid);
    showSlide(index);
    startAutoPlay();
  });
});
