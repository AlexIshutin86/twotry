// ========== КАРУСЕЛЬ С Z-ИНДЕКСОМ ==========
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cardfeature');
    const prevBtn = document.getElementById('prevCard');
    const nextBtn = document.getElementById('nextCard');
    let currentIndex = 0;
    const totalCards = cards.length;

    // Функция обновления позиций карточек
    function updateCarousel() {
        cards.forEach((card, index) => {
            // Убираем все классы
            card.classList.remove('active', 'prev', 'next', 'back');
            
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
                card.classList.add('active');
                card.style.zIndex = 10;
            } else if (position === -1 || position === totalCards - 1) {
                card.classList.add('prev');
                card.style.zIndex = 5;
            } else if (position === 1 || position === -(totalCards - 1)) {
                card.classList.add('next');
                card.style.zIndex = 5;
            } else {
                card.classList.add('back');
                card.style.zIndex = 1;
            }
        });
    }

    // Следующая карточка (вперед)
    function nextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }

    // Предыдущая карточка (назад)
    function prevCard() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    }

    // Назначаем обработчики кнопок
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevCard);
        nextBtn.addEventListener('click', nextCard);
    }

    // Инициализация
    updateCarousel();
});