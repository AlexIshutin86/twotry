// js/telegram-button-loader.js
(function () {
  function loadTelegramButton() {
    const placeholder = document.getElementById("telegram-button-placeholder");
    if (!placeholder) return;

    placeholder.innerHTML = `
      <div class="telegramPlashka">
        <div class="container-telegramPlashka">
          <div class="telegram-icons">
            <a href="https://t.me/volgamore64" target="_blank" class="telegram-link">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="https://vk.com/volgamore64" target="_blank" class="vk-link">
              <i class="fa-brands fa-vk"></i>
            </a>
          </div>
          <div class="telegramPlashka-deskr">
            <h3>Остались вопросы? <span>Напишите мне</span></h3>
          </div>
        </div>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", loadTelegramButton);
})();
