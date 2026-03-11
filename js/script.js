const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll(".nav-links a");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});