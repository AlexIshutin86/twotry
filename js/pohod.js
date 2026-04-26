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




/// Получаем элементы
const carousel = document.querySelector(".carouselDlyDney-container");
const arrowBtns = document.querySelectorAll("#scrollLeftPohod, #scrollRightPohod");
let firstCardWidth = 0; // Инициализируем нулём на случай, если элемент не найден

// Ждём загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    if (carousel) {
        const firstCard = carousel.querySelector(".cardPohod");
        if (firstCard) {
            firstCardWidth = firstCard.offsetWidth;
        } else {
            console.warn("Карточка .cardPohod не найдена в карусели");
        }
    } else {
        console.error("Карусель .carouselDlyDney-container не найдена!");
    }
});

// Кнопки навигации
if (arrowBtns.length > 0 && carousel) {
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Проверяем ID кнопки для определения направления
            const scrollAmount = btn.id === "scrollLeftPohod"
                ? -firstCardWidth
                : firstCardWidth;

            if (firstCardWidth > 0) {
                carousel.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            } else {
                console.warn("Ширина карточки не определена, прокрутка невозможна");
            }
        });
    });
}

// Drag and drop функционал
if (carousel) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    let hasMoved = false; // Флаг для отслеживания движения

    // Для мыши
    const dragStart = (e) => {
        isDragging = true;
        hasMoved = false;
        carousel.classList.add("dragging");
        startX = e.pageX - carousel.offsetLeft;
        startScrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    };

    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = startScrollLeft - walk;
        hasMoved = true; // Отмечаем, что было движение
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
        carousel.style.cursor = 'grab';
    };

    // Для touch (мобильные устройства)
    const touchStart = (e) => {
        isDragging = true;
        hasMoved = false;
        carousel.classList.add("dragging");
        startX = e.touches[0].pageX - carousel.offsetLeft;
        startScrollLeft = carousel.scrollLeft;
    };

    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = startScrollLeft - walk;
        hasMoved = true;
    };

    const touchEnd = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    // Обработчики для мыши
    carousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);

    // Обработчики для touch
    carousel.addEventListener("touchstart", touchStart);
    carousel.addEventListener("touchmove", touchMove);
    carousel.addEventListener("touchend", touchEnd);

    // Защита от случайных кликов
    carousel.addEventListener("click", (e) => {
        if (hasMoved) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
}
