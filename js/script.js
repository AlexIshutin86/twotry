document.addEventListener("DOMContentLoaded", () => {
  // ========== КАРУСЕЛЬ ==========
  const carousel = document.querySelector(".carouselPoxod1-container");
  const arrowBtns = document.querySelectorAll("#scrollLeft, #scrollRight");
  let cardWidth;
  let isDragging = false;
  let startX;
  let scrollLeft;

  if (!carousel) {
    console.error("Карусель не найдена!");
    return;
  }

  const firstCard = carousel.querySelector(".card");
  if (firstCard) {
    cardWidth = firstCard.offsetWidth;
  }

  // Пересчёт ширины карточки
  window.addEventListener("resize", () => {
    if (firstCard) {
      cardWidth = firstCard.offsetWidth;
    }
  });

  // Кнопки навигации
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const scrollAmount = btn.id === "scrollLeft" ? -cardWidth : cardWidth;
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  });

  // ========== TOCH СОБЫТИЯ (исправлено) ==========
  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    },
    { passive: false },
  );

  carousel.addEventListener("touchend", () => {
    isDragging = false;
  });

  // ========== МЫШЬ ==========
  let isMouseDown = false;
  let startMouseX;
  let scrollMouseLeft;

  carousel.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startMouseX = e.pageX - carousel.offsetLeft;
    scrollMouseLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  carousel.addEventListener("mouseleave", () => {
    isMouseDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseup", () => {
    isMouseDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startMouseX) * 2;
    carousel.scrollLeft = scrollMouseLeft - walk;
  });

  carousel.style.cursor = "grab";
});
