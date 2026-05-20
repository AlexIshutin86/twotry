function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// js/header.js  —  Reusable Header Loader

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.style.display = "none";
}

// Load header from header.html
document.addEventListener("DOMContentLoaded", function () {
  fetch("./elements/header.html") // ← Путь от index.html (они в одной папке)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Header.html not found");
      }
      return response.text();
    })
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch((error) => {
      console.error("Ошибка загрузки header:", error);
    });
});

// header.js - работает из любой папки
(function () {
  function getBasePath() {
    // Получаем текущий URL
    const path = window.location.pathname;

    // Считаем количество слешей (глубину)
    // /twotry/index.html → 1 слеш → depth = 0
    // /twotry/articles/kaspiy.html → 2 слеша → depth = 1
    const depth = (path.match(/\//g) || []).length - 1;

    // Возвращаем нужное количество "../"
    return depth > 1 ? "../".repeat(depth - 1) : "./";
  }

  function loadHeader() {
    const placeholder = document.getElementById("header-placeholder");
    if (!placeholder) return;

    const basePath = getBasePath();

    fetch(`${basePath}elements/header.html`)
      .then((response) => response.text())
      .then((html) => {
        placeholder.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading header:", error);
      });
  }

  document.addEventListener("DOMContentLoaded", loadHeader);
})();
