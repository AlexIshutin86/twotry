// ===== СТАБИЛЬНЫЙ STICKY НАВИГАЦИИ =====
(function () {
  "use strict";

  let nav = null;
  let placeholder = null;
  let navTop = 0;
  let isSticky = false;

  function init() {
    nav = document.querySelector(".nav-linksFoto");
    if (!nav) {
      console.log("❌ Навигация не найдена");
      return;
    }

    console.log("✅ Sticky навигация инициализирована");

    // Создаем заглушку
    placeholder = document.createElement("div");
    placeholder.className = "nav-sticky-placeholder";
    nav.parentNode.insertBefore(placeholder, nav);

    // Получаем начальную позицию
    updatePosition();

    // Слушаем события
    window.addEventListener("scroll", checkSticky);
    window.addEventListener("resize", function () {
      updatePosition();
      if (isSticky) {
        disableSticky();
      }
      checkSticky();
    });

    // Проверяем сразу
    checkSticky();
  }

  function updatePosition() {
    const rect = nav.getBoundingClientRect();
    navTop = rect.top + window.pageYOffset;
  }

  function checkSticky() {
    const scrollY = window.pageYOffset;
    const shouldBeSticky = scrollY >= navTop;

    if (shouldBeSticky && !isSticky) {
      enableSticky();
    } else if (!shouldBeSticky && isSticky) {
      disableSticky();
    }
  }

  function enableSticky() {
    isSticky = true;
    const navHeight = nav.offsetHeight;
    const navWidth = nav.offsetWidth;

    // Сохраняем ширину
    nav.style.width = navWidth + "px";

    // Показываем заглушку
    placeholder.style.display = "block";
    placeholder.style.height = navHeight + "px";

    // Включаем sticky класс
    nav.classList.add("sticky-active");

    console.log("📍 Навигация закреплена");
  }

  function disableSticky() {
    isSticky = false;

    // Убираем стили
    nav.classList.remove("sticky-active");
    nav.style.width = "";

    // Скрываем заглушку
    placeholder.style.display = "none";
    placeholder.style.height = "";

    console.log("📍 Навигация откреплена");
  }

  // Запускаем
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
