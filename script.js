const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const overlay = document.querySelector(".overlay");
const body = document.body;

function toggleMenu() {
  toggle.classList.toggle("open");
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
  body.classList.toggle("no-scroll");
}

// Toggle menu on hamburger/cross click
toggle.addEventListener("click", toggleMenu);

// Toggle menu when overlay is clicked
overlay.addEventListener("click", toggleMenu);

// Set active class and close menu on nav link click
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (navLinks.classList.contains("show")) {
      toggleMenu();
    }
  });
});
