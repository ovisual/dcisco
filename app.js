const dropdown = document.querySelector(".dropdown");
const dropdown_menu = document.querySelector(".dropdown-menu");
const catlink = document.querySelector(".cat-link");

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close-icon");

burger.addEventListener("click", () => {
    nav.style.display = "flex";
    burger.style.display = "none";
    close.style.display = "block";
});

close.addEventListener("click", () => {
    nav.style.display = "none";
    burger.style.display = "block";
    close.style.display = "none";
});

dropdown.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the <a> tag
    dropdown_menu.style.display = (dropdown_menu.style.display !== "flex") ? "flex" : "none";
});


