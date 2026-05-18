// Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carouselForBigAboutSlide");
  const dots = document.querySelectorAll(".bampForBigAbout");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  let currentIndex = 0;
  let autoplayInterval;

  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current slide and dot
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) nextIndex = 0;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = slides.length - 1;
    showSlide(prevIndex);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 10000);
  }

  function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
  }

  // Event listeners
  if (prevBtn)
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    });

  if (nextBtn)
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  // Pause autoplay on hover
  const carousel = document.querySelector(".carouselForBigAbout1");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
  }

  // Start carousel
  if (slides.length > 0) {
    showSlide(0);
    startAutoplay();
  }
});

// Вторая карусель
document.addEventListener("DOMContentLoaded", function () {
  // === ПЕРВАЯ КАРУСЕЛЬ ===
  const slides1 = document.querySelectorAll(".carouselForBigAboutSlide");
  const dots1 = document.querySelectorAll(".bampForBigAbout");
  const prevBtn1 = document.querySelector(".carousel-prev");
  const nextBtn1 = document.querySelector(".carousel-next");
  let currentIndex1 = 0;
  let autoplayInterval1;

  function showSlide1(index) {
    slides1.forEach((slide) => slide.classList.remove("active"));
    dots1.forEach((dot) => dot.classList.remove("active"));
    slides1[index].classList.add("active");
    dots1[index].classList.add("active");
    currentIndex1 = index;
  }

  function nextSlide1() {
    let nextIndex = currentIndex1 + 1;
    if (nextIndex >= slides1.length) nextIndex = 0;
    showSlide1(nextIndex);
  }

  function prevSlide1() {
    let prevIndex = currentIndex1 - 1;
    if (prevIndex < 0) prevIndex = slides1.length - 1;
    showSlide1(prevIndex);
  }

  function startAutoplay1() {
    autoplayInterval1 = setInterval(nextSlide1, 10000);
  }

  function stopAutoplay1() {
    if (autoplayInterval1) clearInterval(autoplayInterval1);
  }

  if (prevBtn1) {
    prevBtn1.addEventListener("click", () => {
      prevSlide1();
      stopAutoplay1();
      startAutoplay1();
    });
  }

  if (nextBtn1) {
    nextBtn1.addEventListener("click", () => {
      nextSlide1();
      stopAutoplay1();
      startAutoplay1();
    });
  }

  dots1.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide1(index);
      stopAutoplay1();
      startAutoplay1();
    });
  });

  const carousel1 = document.querySelector(".carouselForBigAbout1");
  if (carousel1) {
    carousel1.addEventListener("mouseenter", stopAutoplay1);
    carousel1.addEventListener("mouseleave", startAutoplay1);
  }

  if (slides1.length > 0) {
    showSlide1(0);
    startAutoplay1();
  }

  // === ВТОРАЯ КАРУСЕЛЬ ===
  const slides2 = document.querySelectorAll(".carouselForBigAboutSlide2");
  const dots2 = document.querySelectorAll(".bampForBigAbout2");
  const prevBtn2 = document.querySelector(".carousel-prev2");
  const nextBtn2 = document.querySelector(".carousel-next2");
  let currentIndex2 = 0;
  let autoplayInterval2;

  function showSlide2(index) {
    slides2.forEach((slide) => slide.classList.remove("active2"));
    dots2.forEach((dot) => dot.classList.remove("active2"));
    slides2[index].classList.add("active2");
    dots2[index].classList.add("active2");
    currentIndex2 = index;
  }

  function nextSlide2() {
    let nextIndex = currentIndex2 + 1;
    if (nextIndex >= slides2.length) nextIndex = 0;
    showSlide2(nextIndex);
  }

  function prevSlide2() {
    let prevIndex = currentIndex2 - 1;
    if (prevIndex < 0) prevIndex = slides2.length - 1;
    showSlide2(prevIndex);
  }

  function startAutoplay2() {
    autoplayInterval2 = setInterval(nextSlide2, 8000); // 8 секунд для второй карусели
  }

  function stopAutoplay2() {
    if (autoplayInterval2) clearInterval(autoplayInterval2);
  }

  if (prevBtn2) {
    prevBtn2.addEventListener("click", () => {
      prevSlide2();
      stopAutoplay2();
      startAutoplay2();
    });
  }

  if (nextBtn2) {
    nextBtn2.addEventListener("click", () => {
      nextSlide2();
      stopAutoplay2();
      startAutoplay2();
    });
  }

  dots2.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide2(index);
      stopAutoplay2();
      startAutoplay2();
    });
  });

  const carousel2 = document.querySelector(".carouselForBigAbout2");
  if (carousel2) {
    carousel2.addEventListener("mouseenter", stopAutoplay2);
    carousel2.addEventListener("mouseleave", startAutoplay2);
  }

  if (slides2.length > 0) {
    showSlide2(0);
    startAutoplay2();
  }
});
