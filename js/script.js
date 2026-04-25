function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



 document.addEventListener("DOMContentLoaded", () => {
    // ========== ПЕРВАЯ КАРУСЕЛЬ (carouselPoxod) ==========
    const carousel = document.querySelector(".carouselPoxod-container");
    const arrowBtns = document.querySelectorAll("#scrollLeft, #scrollRight");
    let cardWidth;
    let isDragging = false;
    let startX;
    let scrollLeft;

    if (!carousel) {
        console.error("Карусель не найдена!");
        return;
    }

    const firstCard = carousel.querySelector(".card");
    if (firstCard) {
        cardWidth = firstCard.offsetWidth;
    }

    // Пересчёт ширины карточки при изменении размера окна
    window.addEventListener("resize", () => {
        if (firstCard) {
            cardWidth = firstCard.offsetWidth;
        }
    });

    // Обработчики для кнопок навигации
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "scrollLeft" ? -cardWidth : cardWidth;
            carousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });

    // Обработчики жестов касания
    carousel.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    }, { passive: true }); // passive: true — здесь preventDefault не вызывается

    carousel.addEventListener("touchend", () => {
        isDragging = false;
    });
    carousel.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Теперь это допустимо, т. к. обработчик не пассивный
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Коэффициент для плавности
        carousel.scrollLeft = scrollLeft - walk;
    }, { passive: false }); // Ключевое исправление: passive: false


    // Альтернатива: обработка мыши для десктопа
    let isMouseDown = false;
    let startMouseX;
    let scrollMouseLeft;

    carousel.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        startMouseX = e.pageX - carousel.offsetLeft;
        scrollMouseLeft = carousel.scrollLeft;
    });
    carousel.addEventListener("mouseleave", () => {
        isMouseDown = false;
    });
    carousel.addEventListener("mouseup", () => {
        isMouseDown = false;
    });
    carousel.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startMouseX) * 2;
        carousel.scrollLeft = scrollMouseLeft - walk;
    });
});
