// ========== КАРУСЕЛЬ С Z-ИНДЕКСОМ ==========
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cardfeature");
  const prevBtn = document.getElementById("prevCard");
  const nextBtn = document.getElementById("nextCard");
  let currentIndex = 0;
  const totalCards = cards.length;

  if (totalCards === 0) {
    console.error("Карточки не найдены!");
    return;
  }

  // Функция обновления позиций карточек
  function updateCarousel() {
    cards.forEach((card, index) => {
      // Убираем все классы
      card.classList.remove("active", "prev", "next");

      // Вычисляем позицию относительно currentIndex
      let position = index - currentIndex;

      // Нормализуем позицию для круговой прокрутки
      if (position < -Math.floor(totalCards / 2)) {
        position += totalCards;
      }
      if (position > Math.floor(totalCards / 2)) {
        position -= totalCards;
      }

      // Назначаем класс в зависимости от позиции
      if (position === 0) {
        card.classList.add("active");
        card.style.zIndex = "10";
        card.style.opacity = "1";
        card.style.visibility = "visible";
        card.style.position = "relative";
      } else if (position === -1 || position === 1) {
        card.classList.add("prev");
        card.style.zIndex = "5";
        card.style.opacity = "0";
        card.style.visibility = "hidden";
        card.style.position = "absolute";
      } else {
        card.classList.add("next");
        card.style.zIndex = "1";
        card.style.opacity = "0";
        card.style.visibility = "hidden";
        card.style.position = "absolute";
      }
    });
  }

  // Следующая карточка (вперед)
  function nextCard() {
    if (!nextBtn.disabled) {
      currentIndex = (currentIndex + 1) % totalCards;
      updateCarousel();
    }
  }

  // Предыдущая карточка (назад)
  function prevCard() {
    if (!prevBtn.disabled) {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateCarousel();
    }
  }

  // Назначаем обработчики кнопок
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", prevCard);
    nextBtn.addEventListener("click", nextCard);
  } else {
    console.error("Кнопки навигации не найдены!");
  }

  // Инициализация
  updateCarousel();
});
