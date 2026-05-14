// Universal breadcrumbs with working links
(function () {
  function generateBreadcrumbs() {
    const breadcrumbOl = document.getElementById("breadcrumb-list");
    if (!breadcrumbOl) return;

    // Get current page
    const path = window.location.pathname;
    let currentPage = path.split("/").pop().replace(".html", "");

    // If no page (like /), treat as index
    if (!currentPage || currentPage === "") {
      currentPage = "index";
    }

    // Define your page hierarchy with display names
    const pageHierarchy = {
      about: {
        display: "Обо мне",
        parent: null,
        url: "./about.html",
      },

      uzorVremeni: {
        display: "Узоры Времён",
        parent: "tours",
        url: "./uzorVremeni.html",
      },
      volgaMore: {
        display: "Волга-Море",
        parent: "tours",
        url: "./volgaMore.html",
      },
      autumnCaucases: {
        display: "Узоры Времён",
        parent: "tours",
        url: "./autumnCaucases.html",
      },

      tropaImperatora: {
        display: "Тропа Императора",
        parent: "tours",
        url: "./tropaImperatora.html",
      },

      mountansOfMasters: {
        display: "Горы Мастеров",
        parent: "tours",
        url: "./mountansOfMasters.html",
      },

      tours: {
        display: "Походы",
        parent: null,
        url: "./schedule.html",
      },

      team: {
        display: "Команда",
        parent: null,
        url: "./team.html",
      },

      instructors: {
        display: "Инструкторы",
        parent: "team",
        url: "./instructors.html",
      },

      vladimir: {
        display: "Владимир Сергиенко",
        parent: "instructors",
        url: "./vladimir.html",
      },
      reviews: { display: "Отзывы", parent: null, url: "./reviews.html" },

      contacts: { display: "Контакты", parent: null, url: "./contacts.html" },
    };

    // Build breadcrumb trail recursively
    function buildTrail(page, trail = []) {
      const pageInfo = pageHierarchy[page];

      if (!pageInfo) {
        // Unknown page - use page name as display
        trail.unshift({ name: page, url: null, page: page });
        return trail;
      }

      trail.unshift({
        name: pageInfo.display,
        url: pageInfo.url,
        page: page,
      });

      if (pageInfo.parent && pageInfo.parent !== null) {
        buildTrail(pageInfo.parent, trail);
      }

      return trail;
    }

    let trail = [];

    if (currentPage === "index") {
      // Homepage
      trail = [{ name: "Главная", url: null, page: null }];
    } else {
      // Build trail for current page
      trail = buildTrail(currentPage);

      // Add Главная at the beginning
      trail.unshift({ name: "Главная", url: "./", page: null });
    }

    // Generate HTML
    let html = "";
    for (let i = 0; i < trail.length; i++) {
      const item = trail[i];
      const isLast = i === trail.length - 1;

      if (isLast) {
        html += `<li aria-current="page">${item.name}</li>`;
      } else {
        // Use the URL from pageHierarchy or default
        const url = item.url || `./${item.page}.html`;
        html += `<li><a href="${url}">${item.name}</a></li>`;
      }
    }

    breadcrumbOl.innerHTML = html;

    // Debug info
    console.log("Current page:", currentPage);
    console.log("Breadcrumb trail:", trail);
  }

  document.addEventListener("DOMContentLoaded", generateBreadcrumbs);
})();
