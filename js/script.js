function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// ========== ПЕРВАЯ КАРУСЕЛЬ (videoCarousel) ==========
const videoCarousel = document.querySelector(".videoCarousel-container"); // Fixed spelling!
const videoArrowBtns = document.querySelectorAll("#scrollLeft, #scrollRight");
let firstVideoCardWidth;

document.addEventListener("DOMContentLoaded", () => {
    if (videoCarousel) {
        const firstCard = videoCarousel.querySelector(".card");
        if (firstCard) {
            firstVideoCardWidth = firstCard.offsetWidth;
        }
    }
});

if (videoArrowBtns.length > 0 && videoCarousel) {
    videoArrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "scrollLeft" ? -firstVideoCardWidth : firstVideoCardWidth;
            videoCarousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

if (videoCarousel) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    const dragStart = (e) => {
        isDragging = true;
        videoCarousel.classList.add("dragging");
        startX = e.pageX - videoCarousel.offsetLeft;
        startScrollLeft = videoCarousel.scrollLeft;
        videoCarousel.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - videoCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        videoCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        videoCarousel.classList.remove("dragging");
        videoCarousel.style.cursor = 'grab';
    }
    
    const touchStart = (e) => {
        isDragging = true;
        videoCarousel.classList.add("dragging");
        startX = e.touches[0].pageX - videoCarousel.offsetLeft;
        startScrollLeft = videoCarousel.scrollLeft;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - videoCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        videoCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    videoCarousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    videoCarousel.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    videoCarousel.style.cursor = 'grab';
}

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

// ========== POPUP DIALOG ==========
const enrolButton = document.querySelector('#buttonOpinion1');
const enrolDialog = document.querySelector('#enrolOpinionDialog1');
const closeModel = enrolDialog ? enrolDialog.querySelector('#closeDialog1') : null;

if (enrolButton && enrolDialog && closeModel) {
    enrolButton.addEventListener('click', () => {
        enrolDialog.showModal();
    });

    closeModel.addEventListener('click', () => {
        enrolDialog.close();
    });
}