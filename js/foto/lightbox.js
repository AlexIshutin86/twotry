// ===== УНИВЕРСАЛЬНЫЙ ПРОСМОТРЩИК ГАЛЕРЕИ (LIGHTBOX) =====
class Lightbox {
  constructor() {
    this.currentIndex = 0;
    this.images = [];
    this.isOpen = false;
    this.createHTML();
    this.bindEvents();
  }

  createHTML() {
    if (document.querySelector(".lightbox")) return;

    const html = `
            <div class="lightbox" id="lightbox">
                <button class="lightbox-close" id="lbClose" aria-label="Закрыть">&times;</button>
                <button class="lightbox-prev" id="lbPrev" aria-label="Предыдущее">‹</button>
                <button class="lightbox-next" id="lbNext" aria-label="Следующее">›</button>
                <div class="lightbox-content">
                    <img id="lbImage" src="" alt="Увеличенное изображение">
                </div>
                <button class="lightbox-download" id="lbDownload">
                    <i class="fas fa-download"></i> Скачать
                </button>
                <div class="lightbox-info" id="lbInfo"></div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", html);
  }

  bindEvents() {
    const lb = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lbClose");
    const prevBtn = document.getElementById("lbPrev");
    const nextBtn = document.getElementById("lbNext");
    const downloadBtn = document.getElementById("lbDownload");

    if (closeBtn) closeBtn.onclick = () => this.close();
    if (prevBtn) prevBtn.onclick = () => this.changeImage(-1);
    if (nextBtn) nextBtn.onclick = () => this.changeImage(1);
    if (downloadBtn) downloadBtn.onclick = () => this.downloadCurrent();

    // Закрытие по клику на фон
    if (lb) {
      lb.addEventListener("click", (e) => {
        if (e.target === lb) this.close();
      });
    }

    // Управление с клавиатуры
    document.addEventListener("keydown", (e) => {
      if (!this.isOpen) return;
      if (e.key === "Escape") this.close();
      if (e.key === "ArrowLeft") this.changeImage(-1);
      if (e.key === "ArrowRight") this.changeImage(1);
    });
  }

  open(index, images) {
    this.images = images;
    this.currentIndex = index;
    this.isOpen = true;

    const lb = document.getElementById("lightbox");
    const img = document.getElementById("lbImage");
    const info = document.getElementById("lbInfo");

    if (img) img.src = this.images[this.currentIndex];
    if (info)
      info.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    if (lb) {
      lb.classList.add("active");
      document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
    }
  }

  close() {
    const lb = document.getElementById("lightbox");
    if (lb) {
      lb.classList.remove("active");
      document.body.style.overflow = "";
    }
    this.isOpen = false;
  }

  changeImage(direction) {
    if (!this.images.length) return;
    this.currentIndex =
      (this.currentIndex + direction + this.images.length) % this.images.length;

    const img = document.getElementById("lbImage");
    const info = document.getElementById("lbInfo");

    if (img) img.src = this.images[this.currentIndex];
    if (info)
      info.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
  }

  downloadCurrent() {
    if (!this.images[this.currentIndex]) return;

    const link = document.createElement("a");
    link.href = this.images[this.currentIndex];
    // Генерируем имя файла на основе номера в галерее
    link.download = `photo_${this.currentIndex + 1}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Функция для запуска просмотрщика на нужных страницах
function initGalleryLightbox() {
  // Ищем все изображения, которые находятся в блоках галереи
  // Селекторы под ваш код из репозитория
  const gallerySelectors = [
    ".galleryBento-grid .foto-card img", // Для страницы volgaMore.html
    ".fotoItemsMain-container .cardFotoMain .img img", // Для других страниц с карточками
    ".gallery img", // Универсальный селектор
    '[class*="gallery"] img', // Запасной вариант
    '[class*="foto"] img', // Запасной вариант
  ];

  let allImages = [];
  for (const selector of gallerySelectors) {
    const images = document.querySelectorAll(selector);
    if (images.length) {
      allImages = [...allImages, ...Array.from(images)];
    }
  }

  // Убираем возможные дубликаты (на случай, если изображение попало под несколько селекторов)
  allImages = [...new Map(allImages.map((img) => [img.src, img])).values()];

  if (allImages.length === 0) {
    // console.log('Галерея не найдена на этой странице');
    return;
  }

  // console.log(`Найдено изображений для просмотрщика: ${allImages.length}`);
  const imageUrls = allImages.map((img) => img.src);

  // Навешиваем обработчик клика на каждое изображение
  allImages.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const lightbox = new Lightbox(); // Создаем новый экземпляр при клике
      lightbox.open(index, imageUrls);
    });
  });
}

// Запускаем инициализацию после полной загрузки DOM
document.addEventListener("DOMContentLoaded", initGalleryLightbox);
