(function () {
  "use strict";

  var root = document.documentElement;
  var themeToggle = document.querySelector(".theme-toggle");
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var storedTheme;

  try {
    storedTheme = localStorage.getItem("portfolio-theme");
  } catch (error) {
    storedTheme = null;
  }

  var preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  var initialTheme = storedTheme || preferredTheme;

  function applyTheme(theme) {
    var isDark = theme === "dark";
    root.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Attiva il tema chiaro" : "Attiva il tema scuro");
    themeColor.setAttribute("content", isDark ? "#0d1017" : "#f7f8fb");
  }

  applyTheme(initialTheme);

  themeToggle.addEventListener("click", function () {
    var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
      // La persistenza è opzionale quando lo storage non è disponibile.
    }
  });

  var menu = document.querySelector(".mobile-menu");
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.removeAttribute("open");
    });
  });

  var navLinks = Array.from(document.querySelectorAll(".desktop-nav a"));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  document.getElementById("current-year").textContent = String(new Date().getFullYear());
}());
