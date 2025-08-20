"use strict";
var _a;

// I needed to do this because my header reacts based on scroll height and with 0 px it just doesn't let me see the about me section
const HEADER_MIN_HEIGHT = 220; // or whatever the minimized header height is in px

// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href")?.slice(1);
    if (!targetId) return;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - HEADER_MIN_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

////// Start of 🌗 Theme toggle functionality //////
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  const applyTheme = theme => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    // Switch icon for clarity
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙"; // Show sun → "Switch to light" , Show moon → "Switch to dark"
    if (btn) btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  };

  applyTheme(localStorage.getItem("theme") || "light");

  btn?.addEventListener("click", () =>
    applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark")
  );
});
////// End of 🌗 Theme Toggle //////

// Header changes size on scroll
const fullHeader = document.querySelector('.full-header-content');
const smallHeader = document.querySelector('.small-header-content');

window.addEventListener('scroll', () => {
  if (window.scrollY > 120) { // 120px scroll threshold, adjust as needed
    fullHeader.classList.add('hidden');
    smallHeader.classList.add('visible');
  } else {
    fullHeader.classList.remove('hidden');
    smallHeader.classList.remove('visible');
  }
});

// Animate sections when they scroll into view
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, 
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));
