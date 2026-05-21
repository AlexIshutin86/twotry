// carouselThree.js
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carouselPoxod1-container");
  const arrowBtns = document.querySelectorAll(
    "#scrollLeftPohod, #scrollRightPohod",
  );

  if (!carousel) {
    console.error("Карусель не найдена!");
    return;
  }

  const firstCard = carousel.querySelector(".card");
  let cardWidth = firstCard ? firstCard.offsetWidth : 300;

  window.addEventListener("resize", () => {
    if (firstCard) {
      cardWidth = firstCard.offsetWidth;
    }
  });

  // Кнопки навигации
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const scrollAmount =
        btn.id === "scrollLeftPohod" ? -cardWidth : cardWidth;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // ========== DRAG ДЛЯ МЫШИ ==========
  let isDragging = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // ========== DRAG ДЛЯ ТАЧА (МОБИЛЬНЫЕ) ==========
  let touchStartX;
  let touchScrollLeft;

  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX - carousel.offsetLeft;
    touchScrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - touchStartX) * 2;
    carousel.scrollLeft = touchScrollLeft - walk;
  });

  carousel.style.cursor = "grab";
});
