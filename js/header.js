// js/header.js  —  Reusable Header Loader

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'none';
}

// Load header from header.html
document.addEventListener('DOMContentLoaded', function () {
    fetch("../elements/header/header.html")                    // ← Путь от index.html (они в одной папке)
        .then(response => {
            if (!response.ok) {
                throw new Error('Header.html not found');
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => {
            console.error('Ошибка загрузки header:', error);
        });
});