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
    autoplayInterval = setInterval(nextSlide, 5000);
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
