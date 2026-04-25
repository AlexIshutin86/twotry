// js/footer-loader.js
async function loadFooter() {
    try {
        const response = await fetch('../elements/footer/footer.html');
        const footerHtml = await response.text();
        
        // Find where to place the footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHtml;
        }
    } catch (error) {
        console.error('Footer failed to load:', error);
    }
}

// Load footer when page loads
loadFooter();