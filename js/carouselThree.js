
// ========== ТРЕТЬЯ КАРУСЕЛЬ (video-Carousel) - REWRITTEN ==========
// This carousel uses .video-Carousel-container, not .carouselByDays-container
const thirdCarousel = document.querySelector(".video-Carousel-container");
const thirdArrowBtns = document.querySelectorAll("#scrollLeftThird, #scrollRightThird"); // Same IDs as first carousel! (BAD)
let thirdCardWidth;

function getThirdCardWidth() {
    if (thirdCarousel) {
        const firstCard = thirdCarousel.querySelector(".card-video");
        if (firstCard) {
            thirdCardWidth = firstCard.offsetWidth;
            return thirdCardWidth;
        }
    }
    return 300;
}

document.addEventListener("DOMContentLoaded", () => {
    getThirdCardWidth();
    window.addEventListener("resize", () => {
        getThirdCardWidth();
    });
});

if (thirdArrowBtns.length > 0 && thirdCarousel) {
    thirdArrowBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const currentWidth = getThirdCardWidth();
            const scrollAmount = btn.id === "scrollLeftThird" ? -currentWidth : currentWidth;
            
            thirdCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
}

if (thirdCarousel) {
    let isDragging = false;
    let startX;
    let startScrollLeftThird;
    
    const dragStart = (e) => {
        isDragging = true;
        thirdCarousel.classList.add("dragging");
        startX = e.pageX - thirdCarousel.offsetLeft;
        startScrollLeftThird = thirdCarousel.scrollLeft;
        thirdCarousel.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - thirdCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        thirdCarousel.scrollLeftThird = startScrollLeftThird - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        thirdCarousel.classList.remove("dragging");
        thirdCarousel.style.cursor = 'grab';
    }
    
    const touchStart = (e) => {
        isDragging = true;
        thirdCarousel.classList.add("dragging");
        startX = e.touches[0].pageX - thirdCarousel.offsetLeft;
        startScrollLeftThird = thirdCarousel.scrollLeftThird;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - thirdCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        thirdCarousel.scrollLeftThird = startScrollLeftThird - walk;
    }
    
    thirdCarousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    thirdCarousel.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    thirdCarousel.style.cursor = 'grab';
}