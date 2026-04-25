// ========== ВТОРАЯ КАРУСЕЛЬ (opinionCarousel) ==========
const opinionCarousel = document.querySelector(".opinionCarousel-container");
const opinionArrowBtns = document.querySelectorAll("#scrollLeftOpinion, #scrollRightOpinion");
let opinionFirstCardWidth;

document.addEventListener("DOMContentLoaded", () => {
    if (opinionCarousel) {
        const firstCard = opinionCarousel.querySelector(".card-Opinion"); // Fixed! Was .cards-Opinion
        if (firstCard) {
            opinionFirstCardWidth = firstCard.offsetWidth;
        }
    }
});

if (opinionArrowBtns.length > 0 && opinionCarousel) {
    opinionArrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "scrollLeftOpinion" ? -opinionFirstCardWidth : opinionFirstCardWidth;
            opinionCarousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

if (opinionCarousel) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    const dragStart = (e) => {
        isDragging = true;
        opinionCarousel.classList.add("dragging");
        startX = e.pageX - opinionCarousel.offsetLeft;
        startScrollLeft = opinionCarousel.scrollLeft;
        opinionCarousel.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - opinionCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        opinionCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        opinionCarousel.classList.remove("dragging");
        opinionCarousel.style.cursor = 'grab';
    }
    
    const touchStart = (e) => {
        isDragging = true;
        opinionCarousel.classList.add("dragging");
        startX = e.touches[0].pageX - opinionCarousel.offsetLeft;
        startScrollLeft = opinionCarousel.scrollLeft;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - opinionCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        opinionCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    opinionCarousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    opinionCarousel.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    opinionCarousel.style.cursor = 'grab';
}

