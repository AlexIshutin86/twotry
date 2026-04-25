function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



 // ========== ПЕРВАЯ КАРУСЕЛЬ (carouselPoxod) ==========
const carouselPoxod = document.querySelector(".carouselPoxod-container"); // Fixed spelling!
const videoArrowBtns = document.querySelectorAll("#scrollLeft, #scrollRight");
let firstVideoCardWidth;

document.addEventListener("DOMContentLoaded", () => {
    if (carouselPoxod) {
        const firstCard = carouselPoxod.querySelector(".card");
        if (firstCard) {
            firstVideoCardWidth = firstCard.offsetWidth;
        }
    }
});

if (videoArrowBtns.length > 0 && carouselPoxod) {
    videoArrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "scrollLeft" ? -firstVideoCardWidth : firstVideoCardWidth;
            carouselPoxod.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

if (carouselPoxod) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    const dragStart = (e) => {
        isDragging = true;
        carouselPoxod.classList.add("dragging");
        startX = e.pageX - carouselPoxod.offsetLeft;
        startScrollLeft = carouselPoxod.scrollLeft;
        carouselPoxod.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - carouselPoxod.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselPoxod.scrollLeft = startScrollLeft - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        carouselPoxod.classList.remove("dragging");
        carouselPoxod.style.cursor = 'grab';
    }
    
    const touchStart = (e) => {
        isDragging = true;
        carouselPoxod.classList.add("dragging");
        startX = e.touches[0].pageX - carouselPoxod.offsetLeft;
        startScrollLeft = carouselPoxod.scrollLeft;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - carouselPoxod.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselPoxod.scrollLeft = startScrollLeft - walk;
    }
    
    carouselPoxod.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    carouselPoxod.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    carouselPoxod.style.cursor = 'grab';
}