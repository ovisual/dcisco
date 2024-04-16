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

catlink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the <a> tag
    dropdown_menu.style.display = (dropdown_menu.style.display !== "flex") ? "flex" : "none";
});

// document.addEventListener("DOMContentLoaded", function() {
//     var carousel = document.querySelector('.partners_icons');
//     var images = carousel.querySelectorAll('img');
//     var currentIndex = 0;

//     setInterval(function() {
//         currentIndex = (currentIndex + 1) % images.length;
//         var translateValue = -currentIndex * images[0].clientWidth;
//         carousel.style.transform = 'translateX(' + translateValue + 'px)';
//     }, 1000); // Move every 5 seconds
// });



