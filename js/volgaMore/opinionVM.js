// ========== КАРУСЕЛЬ ОТЗЫВОВ (opinionCarouselVM) ==========
const opinionCarousel = document.querySelector(".opinionCarouselVM-container");
const opinionArrowBtns = document.querySelectorAll("#scrollLeftOpinionVM, #scrollRightOpinionVM");
let opinionCardWidth = 350; // Default value

// Function to update card width dynamically
function updateOpinionCardWidth() {
    if (opinionCarousel) {
        const firstCard = opinionCarousel.querySelector(".card-OpinionVM");
        if (firstCard) {
            // Get the computed width including margins
            const cardWidth = firstCard.offsetWidth;
            const computedStyle = window.getComputedStyle(firstCard);
            const marginLeft = parseFloat(computedStyle.marginLeft) || 0;
            const marginRight = parseFloat(computedStyle.marginRight) || 0;
            opinionCardWidth = cardWidth + marginLeft + marginRight;
        }
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    updateOpinionCardWidth();
    
    // Update on window resize
    window.addEventListener("resize", () => {
        updateOpinionCardWidth();
    });
});

// ========== ARROW BUTTONS FUNCTIONALITY ==========
if (opinionArrowBtns.length > 0 && opinionCarousel) {
    opinionArrowBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            // Determine scroll direction
            const scrollAmount = btn.id === "scrollLeftOpinionVM" 
                ? -opinionCardWidth 
                : opinionCardWidth;
            
            // Smooth scroll
            opinionCarousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

// ========== DRAG TO SCROLL FUNCTIONALITY ==========
if (opinionCarousel) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    // Mouse drag start
    const dragStart = (e) => {
        isDragging = true;
        opinionCarousel.classList.add("dragging");
        startX = e.pageX - opinionCarousel.offsetLeft;
        startScrollLeft = opinionCarousel.scrollLeft;
        opinionCarousel.style.cursor = 'grabbing';
    }
    
    // Mouse dragging
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - opinionCarousel.offsetLeft;
        const walk = (x - startX);
        opinionCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    // Mouse drag end
    const dragStop = () => {
        isDragging = false;
        opinionCarousel.classList.remove("dragging");
        opinionCarousel.style.cursor = 'grab';
    }
    
    // Touch drag start
    const touchStart = (e) => {
        isDragging = true;
        opinionCarousel.classList.add("dragging");
        startX = e.touches[0].pageX - opinionCarousel.offsetLeft;
        startScrollLeft = opinionCarousel.scrollLeft;
    }
    
    // Touch dragging
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - opinionCarousel.offsetLeft;
        const walk = (x - startX);
        opinionCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    // Touch drag end
    const touchEnd = () => {
        isDragging = false;
        opinionCarousel.classList.remove("dragging");
    }
    
    // Event listeners for drag to scroll
    opinionCarousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    opinionCarousel.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", touchEnd);
    
    // Set initial cursor
    opinionCarousel.style.cursor = 'grab';
}

// ========== DIALOG MODAL FOR "READ MORE" BUTTONS ==========
// Create dialog element dynamically
const dialog = document.createElement('dialog');
dialog.className = 'opinion-dialogVM';
dialog.innerHTML = `
    <div class="dialogOpinionVM-content">
        <button class="closeDialogVM">&times;</button>
        <h2 id="dialogTitle">Заголовок</h2>
        <p id="dialogText">Текст отзыва...</p>
    </div>
`;
document.body.appendChild(dialog);

// Get dialog elements
const closeBtn = dialog.querySelector('.closeDialogVM');
const dialogTitle = document.getElementById('dialogTitle');
const dialogText = document.getElementById('dialogText');

// Close dialog when clicking close button
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        dialog.close();
    });
}

// Close dialog when clicking outside
dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
});

// Close dialog with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog.open) {
        dialog.close();
    }
});

// Add click handlers to all "Читать полностью" buttons
const readMoreButtons = document.querySelectorAll('.buttonOpinionVM, .buttonOpinion');

readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Find the parent card
        const card = button.closest('.card-OpinionVM');
        if (!card) return;
        
        // Get the title and full text
        const titleElement = card.querySelector('.opinion h1, .opinion .h1Opinion');
        const title = titleElement ? titleElement.innerText : 'Отзыв участника';
        
        const textElement = card.querySelector('.opinion p');
        const fullText = textElement ? textElement.innerText : '';
        
        // Update dialog content
        dialogTitle.innerText = title;
        dialogText.innerText = fullText;
        
        // Show dialog
        dialog.showModal();
    });
});

// ========== "СМОТРЕТЬ ВСЕ ОТЗЫВЫ" BUTTON ==========
const viewAllBtn = document.querySelector('.btnOpinionVM');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Option 1: Navigate to reviews page
        // window.location.href = './all-reviews.html';
        
        // Option 2: Scroll to reviews section
        const reviewsSection = document.querySelector('#opinionCarouselVM');
        if (reviewsSection) {
            reviewsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Option 3: Alert (for testing)
        // alert('Переход на страницу со всеми отзывами');
    });
}

// ========== OPTIONAL: DISABLE SCROLL BUTTONS AT EDGES ==========
function updateButtonStates() {
    if (!opinionCarousel) return;
    
    const scrollLeft = opinionCarousel.scrollLeft;
    const maxScroll = opinionCarousel.scrollWidth - opinionCarousel.clientWidth;
    
    const leftBtn = document.getElementById('scrollLeftOpinionVM');
    const rightBtn = document.getElementById('scrollRightOpinionVM');
    
    if (leftBtn) {
        leftBtn.style.opacity = scrollLeft <= 10 ? '0.5' : '1';
        leftBtn.style.cursor = scrollLeft <= 10 ? 'not-allowed' : 'pointer';
    }
    
    if (rightBtn) {
        rightBtn.style.opacity = scrollLeft >= maxScroll - 10 ? '0.5' : '1';
        rightBtn.style.cursor = scrollLeft >= maxScroll - 10 ? 'not-allowed' : 'pointer';
    }
}

// Add scroll event listener to update button states
if (opinionCarousel) {
    opinionCarousel.addEventListener('scroll', updateButtonStates);
    window.addEventListener('resize', updateButtonStates);
    // Initial call
    setTimeout(updateButtonStates, 100);
}

// ========== OPTIONAL: AUTO-SCROLL ON HOVER EDGES ==========

let autoScrollInterval = null;

function startAutoScroll(direction) {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
        if (opinionCarousel) {
            opinionCarousel.scrollBy({
                left: direction * 20,
                behavior: 'auto'
            });
        }
    }, 16); // 60fps
}

function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

// Add hover listeners for edges
if (opinionCarousel) {
    opinionCarousel.addEventListener('mouseenter', (e) => {
        const rect = opinionCarousel.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const edgeThreshold = 50;
        
        if (mouseX < edgeThreshold) {
            startAutoScroll(-1);
        } else if (mouseX > rect.width - edgeThreshold) {
            startAutoScroll(1);
        }
    });
    
    opinionCarousel.addEventListener('mousemove', (e) => {
        const rect = opinionCarousel.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const edgeThreshold = 50;
        
        if (mouseX < edgeThreshold) {
            startAutoScroll(-1);
        } else if (mouseX > rect.width - edgeThreshold) {
            startAutoScroll(1);
        } else {
            stopAutoScroll();
        }
    });
    
    opinionCarousel.addEventListener('mouseleave', stopAutoScroll);
}


console.log('Carousel initialized successfully!'); 