// Smooth scrolling for nav links
document.querySelectorAll<HTMLAnchorElement>("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href")?.slice(1);
    if (!targetId) return;

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

document.querySelector("header .container")?.prepend(menuButton);

menuButton.addEventListener("click", () => {
  nav?.classList.toggle("active");
});
