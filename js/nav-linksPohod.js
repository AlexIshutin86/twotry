



// Add to your existing script.js or create a new file
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-linksPoxod a');
    const sections = {};
    
    // Get all sections that have IDs matching the hrefs
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                sections[sectionId] = section;
            }
        }
    });
    
    // Function to update active link based on scroll position
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 150; // Offset for header
        
        let activeSectionId = null;
        
        for (const [id, section] of Object.entries(sections)) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionId = id;
                break;
            }
        }
        
        // Update active class on links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.substring(1) === activeSectionId) {
                link.classList.add('active');
            }
        });
    }
    
    // Add scroll effect class to nav bar
    function updateNavBarScroll() {
        const navBar = document.querySelector('.nav-linksPoxod');
        if (window.scrollY > 100) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    }
    
    // Smooth scroll when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 70;
                    const navHeight = document.querySelector('.nav-linksPoxod')?.offsetHeight || 50;
                    const offset = headerHeight + navHeight;
                    
                    const targetPosition = targetSection.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Listen to scroll events
    window.addEventListener('scroll', () => {
        updateActiveLink();
        updateNavBarScroll();
    });
    
    // Initial call
    updateActiveLink();
    updateNavBarScroll();
});