// ranStrips-loader.js - с остановкой при наведении
(function () {
  function loadRanStrips() {
    if (document.querySelector(".ranStrips")) return;

    const placeholder = document.getElementById("ranStripsPlaceholder");
    if (!placeholder) return;

    // Базовое содержимое списка
    const listItems = `
      <li class="plus"><span class="advantages">•Специализация на районах Кавказа и Поволжья</span></li>
      <li class="plus"><span class="advantages">•Всегда дружеская атмосфера в команде</span></li>
      <li class="plus"><span class="advantages">•Проводим вечера с комфортом</span></li>
      <li class="plus"><span class="benefits">•Современное лагерное оборудование</span></li>
      <li class="plus"><span class="advantages">•Клуб любителей дикой природы</span></li>
      <li class="minus"><span class="advantages">•Национальная и костровая кухня:</span><span class="benefits">готовит исключительно проводник</span></li>
      <li class="plus"><span class="advantages">•Территория без политики и споров</span></li>
      <li class="plus"><span class="benefits">•Полное отсутствие дежурств для участников</span></li>
      <li class="plus"><span class="advantages">•Удивительная природа Кавказа и Поволжья</span></li>
      <li class="plus"><span class="advantages">•Красивейшие места для ночёвки</span></li>
      <li class="plus"><span class="benefits">•Бесплатная консультация перед походом</span></li>
      <li class="minus"><span class="advantages">•Небольшая группа</span></li>
      <li class="minus"><span class="advantages">•Безопасность во главе похода</span></li>
      <li class="minus"><span class="advantages">•Идем на легке</span></li>
      <li class="minus"><span class="advantages">•Гостеприимство и национальный колорит</span></li>
    `;

    fetch("../elements/ranStrips-placeholder.html")
      .then((response) => response.text())
      .then((html) => {
        placeholder.innerHTML = html;
        addHoverStop(); // Добавляем остановку при наведении
      })
      .catch((error) => {
        console.error("Error loading ranStrips:", error);
        placeholder.innerHTML = `
          <div class="ranStrips">
            <ul>${listItems}</ul>
            <ul aria-hidden="true">${listItems}</ul>
          </div>
        `;
        addHoverStop(); // Добавляем остановку при наведении
      });
  }

  // Функция для добавления остановки анимации при наведении
  function addHoverStop() {
    const ranStrips = document.querySelector(".ranStrips");
    if (!ranStrips) return;

    // Остановка при наведении на весь блок
    ranStrips.addEventListener("mouseenter", function () {
      const lists = this.querySelectorAll("ul");
      lists.forEach((list) => {
        list.style.animationPlayState = "paused";
      });
    });

    // Запуск при уходе мыши
    ranStrips.addEventListener("mouseleave", function () {
      const lists = this.querySelectorAll("ul");
      lists.forEach((list) => {
        list.style.animationPlayState = "running";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", loadRanStrips);
})();
