"use strict";
var _a;
// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        var _a;
        event.preventDefault();
        const targetId = (_a = link.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.slice(1);
        if (!targetId)
            return;
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: "smooth"
            });
        }
    });
});
// Simple mobile menu toggle (for responsiveness)
const nav = document.querySelector("nav");
const menuButton = document.createElement("button");
menuButton.textContent = "☰";
menuButton.className = "menu-toggle";
(_a = document.querySelector("header .container")) === null || _a === void 0 ? void 0 : _a.prepend(menuButton);
menuButton.addEventListener("click", () => {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("active");
});
