//Adding selectors to mobile menu modal window, mobile menu opening button and mobile menu closing button
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelectorAll(".menu-btn-close");
//Creating a function to toggle mobile menu class for opening and closing of modal window
const toggleMenu = () => mobileMenu.classList.toggle("is-open");
//Adding the previous function on click event for modal opening and closing buttons
menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.forEach((el) => el.addEventListener("click", toggleMenu));
