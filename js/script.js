document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carouselPoxod1-container");

  if (!carousel) {
    console.error("Карусель не найдена!");
    return;
  }

  let startX, startY, scrollLeft;
  let isDragging = false;
  let isHorizontalScroll = false;

  // Touch для мобильных
  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    isHorizontalScroll = false;
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;

      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      const deltaX = Math.abs(x - startX);
      const deltaY = Math.abs(y - startY);

      // Определяем направление скролла
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

  // Мышь для десктопа
  let isMouseDown = false;
  let mouseStartX, mouseStartY;
  let mouseScrollLeft;
  let isMouseHorizontal = false;

  carousel.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    isMouseHorizontal = false;
    mouseStartX = e.pageX;
    mouseStartY = e.pageY;
    mouseScrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;

    const deltaX = Math.abs(e.pageX - mouseStartX);
    const deltaY = Math.abs(e.pageY - mouseStartY);

    if (!isMouseHorizontal && (deltaX > 3 || deltaY > 3)) {
      isMouseHorizontal = deltaX > deltaY;
    }

    if (isMouseHorizontal) {
      e.preventDefault();
      const walk = (mouseStartX - e.pageX) * 1.5;
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
