// ========== FAQ: Аккордеон ==========
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Закрыть все другие вопросы (опционально)
                // Раскомментируйте, если хотите, чтобы открывался только один вопрос
                /*
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                */
                
                // Переключить активный класс на текущем вопросе
                item.classList.toggle('active');
            });
        });
    }
});


// ========== Price: Аккордеон (только один открыт) ==========
document.addEventListener('DOMContentLoaded', function() {
    const priceItems = document.querySelectorAll('.price-item');
    
    if (priceItems.length > 0) {
        priceItems.forEach(item => {
            const question = item.querySelector('.price-question');
            
            question.addEventListener('click', () => {
                // Закрываем все элементы
                priceItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Переключаем текущий элемент
                item.classList.toggle('active');
            });
        });
    }
});




// ========== КНОПКА "ЧИТАТЬ ПОЛНОСТЬЮ" ==========
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const detailsDescription = document.getElementById('detailsDescription');
    
    if (readMoreBtn && detailsDescription) {
        readMoreBtn.addEventListener('click', function() {
            // Переключаем класс expanded
            detailsDescription.classList.toggle('expanded');
            
            // Меняем текст кнопки и иконку
            const btnText = this.querySelector('.btn-text');
            const icon = this.querySelector('i');
            
            if (detailsDescription.classList.contains('expanded')) {
                btnText.textContent = 'Свернуть';
                this.classList.add('active');
            } else {
                btnText.textContent = 'Читать полностью';
                this.classList.add('active');
            }
        });
    }
});


// ========== КНОПКА "ЧИТАТЬ ПОЛНОСТЬЮ" ==========
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn2');
    const detailsDescription = document.getElementById('detailsDescription2');
    
    if (readMoreBtn && detailsDescription) {
        readMoreBtn.addEventListener('click', function() {
            // Переключаем класс expanded
            detailsDescription.classList.toggle('expanded');
            
            // Меняем текст кнопки и иконку
            const btnText = this.querySelector('.btn-text');
            const icon = this.querySelector('i');
            
            if (detailsDescription.classList.contains('expanded')) {
                btnText.textContent = 'Свернуть';
                this.classList.add('active');
            } else {
                btnText.textContent = 'Читать полностью';
                this.classList.add('active');
            }
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carouselDlyDney-container');
  const prevButton = document.getElementById('scrollLeftPohod');
  const nextButton = document.getElementById('scrollRightPohod');

  if (!carousel) {
    console.error('Карусель .carouselDlyDney-container не найдена!');
    return;
  }

  let isDragging = false;
  let startX;
  let startScrollLeft;
  let hasMoved = false;

  // Функции для скролла
  const scrollLeft = () => {
    carousel.scrollBy({
      left: -carousel.clientWidth / 1.5,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    carousel.scrollBy({
      left: carousel.clientWidth / 1.5,
      behavior: 'smooth'
    });
  };

  // Обработчики для кнопок
  prevButton.addEventListener('click', scrollLeft);
  nextButton.addEventListener('click', scrollRight);

  // Drag and drop функционал

  // Для мыши
  const dragStart = (e) => {
    isDragging = true;
    hasMoved = false;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.getBoundingClientRect().left;
    startScrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
  };

  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - carousel.getBoundingClientRect().left;
    const walk = (x - startX) * 1.5;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    carousel.scrollLeft = Math.max(0, Math.min(startScrollLeft - walk, maxScroll));
    hasMoved = true;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
    carousel.style.cursor = 'grab';
  };

  // Для touch (мобильные устройства)
  const touchStart = (e) => {
    isDragging = true;
    hasMoved = false;
    carousel.classList.add('dragging');
    startX = e.touches[0].pageX - carousel.getBoundingClientRect().left;
    startScrollLeft = carousel.scrollLeft;
  };

  const touchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.touches[0].pageX - carousel.getBoundingClientRect().left;
    const walk = (x - startX) * 1.5;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    carousel.scrollLeft = Math.max(0, Math.min(startScrollLeft - walk, maxScroll));
    hasMoved = true;
  };

  const touchEnd = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
  };

  // Обработчики для мыши
  carousel.addEventListener('mousedown', dragStart);
  window.addEventListener('mousemove', dragging);
  window.addEventListener('mouseup', dragStop);

  // Обработчики для touch
  carousel.addEventListener('touchstart', touchStart);
  carousel.addEventListener('touchmove', touchMove);
  carousel.addEventListener('touchend', touchEnd);

  // Защита от случайных кликов
  carousel.addEventListener('click', (e) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
});
