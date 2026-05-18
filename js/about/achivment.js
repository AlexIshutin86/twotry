// Сертификаты и дипломы - модальное окно
document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("certificateImage");
  const closeBtn = document.querySelector(".certificate-modal-close");
  const achievementItems = document.querySelectorAll(".achievementItem");

  // Функция закрытия модального окна
  function closeModal() {
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  // Функция открытия модального окна
  function openModal(imgSrc) {
    if (modal && modalImg) {
      modalImg.src = imgSrc;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }

  // Добавляем обработчик клика на каждый элемент сертификата
  if (achievementItems.length > 0) {
    achievementItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        // Не срабатывает при клике на иконку (чтобы не было конфликта)
        if (e.target.closest(".achievementIcon")) {
          // Можно добавить дополнительную логику или просто открыть модалку
        }

        const certificatePath = this.dataset.certificate;
        if (certificatePath) {
          openModal(certificatePath);
        }
      });
    });
  }

  // Закрытие по кнопке
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Закрытие при клике вне изображения
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Закрытие по клавише ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.style.display === "flex") {
      closeModal();
    }
  });
});
