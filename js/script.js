function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



// ========== ПЕРВАЯ КАРУСЕЛЬ (Carousel-turs) ==========
const Carousel-turs = document.querySelector(".Carousel-turs-container"); // Fixed spelling!
const videoArrowBtns = document.querySelectorAll("#scrollLeft, #scrollRight");
let firstVideoCardWidth;

document.addEventListener("DOMContentLoaded", () => {
    if (Carousel-turs) {
        const firstCard = Carousel-turs.querySelector(".card");
        if (firstCard) {
            firstVideoCardWidth = firstCard.offsetWidth;
        }
    }
});

if (videoArrowBtns.length > 0 && Carousel-turs) {
    videoArrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "scrollLeft" ? -firstVideoCardWidth : firstVideoCardWidth;
            Carousel-turs.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

if (Carousel-turs) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    const dragStart = (e) => {
        isDragging = true;
        Carousel-turs.classList.add("dragging");
        startX = e.pageX - Carousel-turs.offsetLeft;
        startScrollLeft = Carousel-turs.scrollLeft;
        Carousel-turs.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - Carousel-turs.offsetLeft;
        const walk = (x - startX) * 1.5;
        Carousel-turs.scrollLeft = startScrollLeft - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        Carousel-turs.classList.remove("dragging");
        Carousel-turs.style.cursor = 'grab';
    }
    
    const touchStart = (e) => {
        isDragging = true;
        Carousel-turs.classList.add("dragging");
        startX = e.touches[0].pageX - Carousel-turs.offsetLeft;
        startScrollLeft = Carousel-turs.scrollLeft;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - Carousel-turs.offsetLeft;
        const walk = (x - startX) * 1.5;
        Carousel-turs.scrollLeft = startScrollLeft - walk;
    }
    
    Carousel-turs.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    Carousel-turs.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    Carousel-turs.style.cursor = 'grab';
}
