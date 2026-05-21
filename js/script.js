document.addEventListener("DOMContentLoaded", () => {
  // ========== КАРУСЕЛЬ ==========
  const carousel = document.querySelector(".carouselPoxod1-container");
  const arrowBtns = document.querySelectorAll(
    "#scrollLeftPohod, #scrollRightPohod",
  );
  let cardWidth;
  let isDragging = false;
  let startX, startY;
  let scrollLeft;
  let isHorizontalScroll = false;

  if (!carousel) {
    console.error("Карусель не найдена!");
    return;
  }

  const firstCard = carousel.querySelector(".card");
  if (firstCard) {
    cardWidth = firstCard.offsetWidth;
  }

  window.addEventListener("resize", () => {
    if (firstCard) {
      cardWidth = firstCard.offsetWidth;
    }
  });

  // Кнопки
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const scrollAmount =
        btn.id === "scrollLeftPohod" ? -cardWidth : cardWidth;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // ========== TOUCH (мобильные) ==========
  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    isHorizontalScroll = false;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;

      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const deltaX = Math.abs(x - startX);
      const deltaY = Math.abs(y - startY);

      // Определяем направление после первого движения
      if (!isHorizontalScroll && (deltaX > 5 || deltaY > 5)) {
        isHorizontalScroll = deltaX > deltaY;
      }

      // Блокируем только горизонтальный скролл
      if (isHorizontalScroll) {
        e.preventDefault();
        const walk = (startX - x) * 1.5;
        carousel.scrollLeft = scrollLeft + walk;
      }
    },
    { passive: false },
  );

  carousel.addEventListener("touchend", () => {
    isDragging = false;
  });

  // ========== МЫШЬ (десктоп) ==========
  let isMouseDown = false;
  let mouseStartX, mouseStartY;
  let mouseScrollLeft;
  let isMouseHorizontal = false;

  carousel.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    isMouseHorizontal = false;
    mouseStartX = e.clientX;
    mouseStartY = e.clientY;
    mouseScrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;

    const deltaX = Math.abs(e.clientX - mouseStartX);
    const deltaY = Math.abs(e.clientY - mouseStartY);

    if (!isMouseHorizontal && (deltaX > 3 || deltaY > 3)) {
      isMouseHorizontal = deltaX > deltaY;
    }

    if (isMouseHorizontal) {
      e.preventDefault();
      const walk = (mouseStartX - e.clientX) * 1.5;
      carousel.scrollLeft = mouseScrollLeft + walk;
    }
  });

  carousel.addEventListener("mouseup", () => {
    isMouseDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseleave", () => {
    isMouseDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.style.cursor = "grab";
});
