//Carousel

const slidesAbout = document.querySelectorAll(".carouselForBigAboutSlide");
const bumps = document.querySelectorAll(".bampForBigAbout");
let currentslidesAbout = 0; // Start at 0, not 1
let autoplayInterval = null;

// Manual navigation function
const manualNav = function (manual) {
  // Remove active class from all slides
  slidesAbout.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Remove active class from all bumps
  bumps.forEach((bump) => {
    bump.classList.remove("active");
  });

  // Add active class to selected slide and bump
  slidesAbout[manual].classList.add("active");
  bumps[manual].classList.add("active");
  currentslidesAbout = manual;
};

// Next slide function
function nextSlide() {
  let nextIndex = currentslidesAbout + 1;
  if (nextIndex >= slidesAbout.length) {
    nextIndex = 0;
  }
  manualNav(nextIndex);
}

// Previous slide function
function prevSlide() {
  let prevIndex = currentslidesAbout - 1;
  if (prevIndex < 0) {
    prevIndex = slidesAbout.length - 1;
  }
  manualNav(prevIndex);
}

// Start autoplay
function startAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
}

// Stop autoplay
function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

// Add click events to bumps/dots
bumps.forEach((bampForBigAbout, i) => {
  bampForBigAbout.addEventListener("click", () => {
    manualNav(i);
    stopAutoplay();
    startAutoplay(); // Restart autoplay after manual click
  });
});

// Initialize carousel
/*document.addEventListener("DOMContentLoaded", () => {
  if (slidesAbout.length > 0) {
    manualNav(0); // Show first slide
    startAutoplay();

    // Optional: Pause autoplay on hover
    const carousel = document.querySelector(".carouselForBigAbout1");
    if (carousel) {
      carousel.addEventListener("mouseenter", stopAutoplay);
      carousel.addEventListener("mouseleave", startAutoplay);
    }
  }
});  */

// Optional: Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  } else if (e.key === "ArrowRight") {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  }
});

//Carousel 2

// ========== CAROUSEL 2 (FIXED) ==========
const slidesAbout2 = document.querySelectorAll(".carouselForBigAboutSlide2");
const bumps2 = document.querySelectorAll(".bampForBigAbout2");
let currentslidesAbout2 = 0;
let autoplayInterval2 = null;

// Manual navigation function for Carousel 2
const manualNav2 = function (manual) {
  // Remove active class from all slides in Carousel 2
  slidesAbout2.forEach((slide) => {
    slide.classList.remove("active2");
  });

  // Remove active class from all bumps in Carousel 2
  bumps2.forEach((bump) => {
    bump.classList.remove("active2");
  });

  // Add active class to selected slide and bump
  slidesAbout2[manual].classList.add("active2");
  bumps2[manual].classList.add("active2");
  currentslidesAbout2 = manual;
};

// Next slide function for Carousel 2
function nextSlide2() {
  let nextIndex = currentslidesAbout2 + 1;
  if (nextIndex >= slidesAbout2.length) {
    nextIndex = 0;
  }
  manualNav2(nextIndex);
}

// Previous slide function for Carousel 2
function prevSlide2() {
  let prevIndex = currentslidesAbout2 - 1;
  if (prevIndex < 0) {
    prevIndex = slidesAbout2.length - 1;
  }
  manualNav2(prevIndex);
}

// Add click events to bumps/dots for Carousel 2
if (bumps2.length > 0) {
  bumps2.forEach((bump, i) => {
    bump.addEventListener("click", () => {
      manualNav2(i);
      stopAutoplay2();
      startAutoplay2();
    });
  });
}

// Initialize Carousel 2
document.addEventListener("DOMContentLoaded", () => {
  if (slidesAbout2.length > 0) {
    manualNav2(0);
    startAutoplay2();

    // Pause autoplay on hover
    const carousel2 = document.querySelector(".carouselForBigAbout2");
    if (carousel2) {
      carousel2.addEventListener("mouseenter", stopAutoplay2);
      carousel2.addEventListener("mouseleave", startAutoplay2);
    }
  }
});

// Keyboard navigation for Carousel 2 (only when hovering over Carousel 2)
document.addEventListener("keydown", (e) => {
  const carousel2 = document.querySelector(".carouselForBigAbout2");
  if (carousel2 && carousel2.matches(":hover")) {
    if (e.key === "ArrowLeft") {
      prevSlide2();
      stopAutoplay2();
      startAutoplay2();
    } else if (e.key === "ArrowRight") {
      nextSlide2();
      stopAutoplay2();
      startAutoplay2();
    }
  }
});
