// Add this to your existing script.js or create scrollUp.js
document.addEventListener('DOMContentLoaded', function() {
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    
    if (!scrollUpBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.add('visible');
        } else {
            scrollUpBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    const scrollLink = scrollUpBtn.querySelector('a');
    if (scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});