/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/***/ (() => {

//Adding selectors to mobile menu modal window, mobile menu opening button and mobile menu closing button
var mobileMenu = document.querySelector(".mobile-menu");
var menuBtnOpen = document.querySelector(".menu-btn-open");
var menuBtnClose = document.querySelectorAll(".menu-btn-close");
//Creating a function to toggle mobile menu class for opening and closing of modal window
var toggleMenu = function toggleMenu() {
  return mobileMenu.classList.toggle("is-open");
};
//Adding the previous function on click event for modal opening and closing buttons
menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.forEach(function (el) {
  return el.addEventListener("click", toggleMenu);
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

//Adding selectors to the call request form window, opening and closing button of this window
var modal = document.querySelector(".backdrop");
var modalBtnClose = document.querySelector(".modal-btn-close");
var modalBtnOpen = document.querySelectorAll(".modal-btn-open");
//Creating a function to toggle form window class for opening and closing of the window
var toggleModal = function toggleModal() {
  return modal.classList.toggle("is-hidden");
};
//Adding the previous function on click event for window opening and closing buttons
modalBtnClose.addEventListener("click", toggleModal);
modalBtnOpen.forEach(function (el) {
  el.addEventListener("click", toggleModal);
});

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//Adding selectors to the format section elements
var wrapper = document.querySelector(".wrapper");
var carousel = document.querySelector(".carousel");
var firstCardWidth = carousel.querySelector(".card").offsetWidth;
var arrowBtns = document.querySelectorAll(".wrapper i");
var carouselChildrens = _toConsumableArray(carousel.children);
var isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;
// Get the number of cards that can fit in the carousel at once
var cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(function (card) {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(function (card) {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
var dragStart = function dragStart(e) {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
var dragging = function dragging(e) {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
var dragStop = function dragStop() {
  isDragging = false;
  carousel.classList.remove("dragging");
};
var infiniteScroll = function infiniteScroll() {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", function () {
  return clearTimeout(timeoutId);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/html_Images/hero-section-pic.jpg */ "./src/html_Images/hero-section-pic.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  color: var(--color_primarydark);
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  background-color: var(--colorch);
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

.container {
  width: 100%;
  max-width: 1288px;
  margin: 0 auto;
  padding: 0 24px;
}

.fa-brands,
.fa-facebook,
.fa-bars {
  font-size: 2em;
}

.fa-bars {
  color: var(--colorch);
}

.fa-bars:hover {
  color: var(--colorb);
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

:root {
  --colorb: #819b57;
  --colorch: #faf4ea;
  --color_primarydark: #31261a;
}

.visually-hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.text-brand {
  color: var(--colorb);
}

.text-bold {
  font-weight: 600;
}

.text-uppercase {
  text-transform: uppercase;
}

.modal-btn-open {
  display: block;
  padding: 10px 20px;
  background-color: var(--colorb);
  color: var(--colorch);
  border: solid var(--colorb);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
@media screen and (min-width: 768px) {
  .modal-btn-open {
    padding: 16px 32px;
  }
}

.modal-btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}
@media screen and (min-width: 768px) {
  .modal-btn-close {
    top: 40px;
    right: 40px;
  }
}

.button:hover {
  background-color: transparent;
  color: #819b57;
}

.button:active {
  background-color: blue;
  color: var(--colorb);
}

.chefs-item {
  display: flex;
  gap: 16px;
  list-style: none;
  align-items: flex-start;
}
@media screen and (min-width: 1280px) {
  .chefs-item {
    gap: 20px;
  }
}
.chefs-item__image {
  list-style: none;
  width: 140px;
  border-radius: 4px 4px 4px 200px;
  box-shadow: -16px 16px 0px 0px var(--colorch), -16px 16px 0px 2px black;
}
@media screen and (min-width: 768px) {
  .chefs-item__image {
    width: 240px;
  }
}
.chefs-item__cook {
  margin-bottom: 16px;
  color: var(--color_primarydark);
  font-size: 24px;
  font-weight: 600;
}
@media screen and (min-width: 1280px) {
  .chefs-item__cook {
    font-size: 40px;
  }
}
.chefs-item__text {
  max-width: 187px;
  margin-bottom: 26px;
  font-size: 14px;
}
.chefs-item__text:last-child {
  margin-bottom: 0px;
}
@media screen and (min-width: 768px) {
  .chefs-item__text {
    font-size: 18px;
  }
}
@media screen and (min-width: 1280px) {
  .chefs-item__text {
    max-width: 334px;
  }
}

.header {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  padding-top: 16px;
  z-index: 2;
}
@media screen and (min-width: 768px) {
  .header {
    padding-top: 32px;
  }
}
.header__container {
  display: flex;
  align-items: center;
  gap: 40px;
}
.header__nav {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 40px;
}
.header__menu {
  display: none;
}
@media screen and (min-width: 1280px) {
  .header__menu {
    list-style: none;
    display: flex;
    gap: 64px;
    flex-grow: 1;
    justify-content: center;
  }
}
.header__button {
  display: none;
}
@media screen and (min-width: 1280px) {
  .header__button {
    display: block;
  }
}
.header__burger {
  background-color: transparent;
  border: none;
  fill: aliceblue;
}
@media screen and (min-width: 1280px) {
  .header__burger {
    display: none;
  }
}

.link {
  color: var(--colorch);
  text-decoration: none;
  transition: color 0.3s;
}

.link:hover {
  color: var(--colorb);
}

.section {
  padding: 20px 0;
}
@media screen and (min-width: 768px) {
  .section {
    padding: 48px 0;
  }
}
.section__titles {
  color: black;
  font-size: 42px;
  font-weight: 900;
  line-height: 1.3;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.section__titles--centered {
  text-align: center;
}
@media screen and (min-width: 1280px) {
  .section__titles {
    font-size: 64px;
  }
}

.hero-section {
  height: 336px;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(103deg, rgba(18, 18, 17, 0.78) 2.03%, rgba(18, 18, 17, 0.6) 58.46%, rgba(18, 18, 17, 0) 90.36%), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}
@media screen and (min-width: 768px) {
  .hero-section {
    height: 536px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section {
    height: 736px;
  }
}
.hero-section__title {
  color: var(--colorch);
  font-weight: 900;
  text-align: center;
  position: relative;
  top: 50px;
  font-size: 47px;
  margin-bottom: 100px;
  line-height: 1;
}
@media screen and (min-width: 768px) {
  .hero-section__title {
    top: 0px;
    margin-bottom: 50px;
    font-size: 107px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__title {
    font-size: 128px;
    line-height: 1.5;
    margin-bottom: 0;
  }
}
.hero-section__button {
  margin: 0 auto;
}
@media screen and (min-width: 1280px) {
  .hero-section__button {
    display: none;
  }
}

.advantages-section {
  padding: 40px 0 0px;
}
@media screen and (min-width: 768px) {
  .advantages-section {
    background-color: var(--colorb);
    padding: 16px 0 16px;
  }
}
.advantages-section__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #cfcfbc;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 24px 40px;
}
@media screen and (min-width: 768px) {
  .advantages-section__list {
    list-style: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
  }
}
.advantages-section__item {
  color: black;
  font-size: 14px;
}
@media screen and (min-width: 768px) {
  .advantages-section__item {
    font-size: 20px;
    font-weight: 300;
    color: var(--colorch);
  }
}

.traditions-section {
  padding: 40px 0 20px 0;
  font-size: 14px;
}
@media screen and (min-width: 768px) {
  .traditions-section {
    font-size: 18px;
    padding: 96px 0 48px 0;
  }
}
.traditions-section__container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
}
@media screen and (min-width: 768px) {
  .traditions-section__container {
    font-size: 18px;
  }
}
@media screen and (min-width: 768px) and (min-width: 768px) {
  .traditions-section__container {
    justify-content: space-between;
  }
}
.traditions-section__content {
  max-width: 710px;
}
.traditions-section__title {
  margin-bottom: 24px;
}
@media screen and (min-width: 768px) {
  .traditions-section__title {
    margin-bottom: 42px;
  }
}
.traditions-section__text--limited {
  max-width: 350px;
}
.traditions-section__baker-image {
  display: none;
  border-radius: 400px 400px 0px 0px;
}
@media screen and (min-width: 768px) {
  .traditions-section__baker-image {
    display: block;
  }
}

.cooks-section__title {
  margin-bottom: 24px;
  max-width: 520px;
  position: relative;
}
@media screen and (min-width: 768px) {
  .cooks-section__title {
    margin-bottom: 80px;
  }
}
.cooks-section__title::before {
  display: none;
}
@media screen and (min-width: 1280px) {
  .cooks-section__title::before {
    display: block;
    width: 352px;
    height: 2px;
    background-color: #cfcfbc;
    content: "";
    position: absolute;
    left: -360px;
    bottom: 24px;
  }
}
.cooks-section__title::after {
  display: none;
}
@media screen and (min-width: 1280px) {
  .cooks-section__title::after {
    display: block;
    width: 352px;
    height: 2px;
    background-color: #cfcfbc;
    content: "";
    position: absolute;
    right: -360px;
    bottom: 24px;
  }
}
.cooks-section__container {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}
@media screen and (min-width: 1280px) {
  .cooks-section__container {
    justify-content: space-between;
  }
}

.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
  margin: 0;
}
@media screen and (min-width: 1280px) {
  .wrapper {
    margin: 0 0 50px 50px;
  }
}

.wrapper i {
  top: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-size: 1.25rem;
  position: absolute;
  text-align: center;
  line-height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translateY(-50%);
  transition: transform 0.1s linear;
}

.wrapper i:active {
  transform: translateY(-50%) scale(0.85);
}

.wrapper i:first-child {
  left: -22px;
}

.wrapper i:last-child {
  right: -22px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(33.3333333333% - 12px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}

.carousel :where(.card, .img) {
  display: flex;
  justify-content: center;
  align-items: left;
}

.carousel .card {
  scroll-snap-align: start;
  height: 444px;
  max-width: 345px;
  list-style: none;
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 8px;
  padding: 24px;
  justify-content: flex-end;
}
@media screen and (max-width: 600px) {
  .carousel .card {
    scroll-snap-align: center;
  }
}

.carousel .card .img {
  height: 148px;
  width: 148px;
  border-radius: 50%;
}

.card .img img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}

.carousel .card h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}

.carousel .card span {
  color: #6a6d78;
  font-size: 1.31rem;
}

@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc(50% - 9px);
  }
}
@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }
}
.card h2,
.card p {
  color: #fff;
  text-align: end left;
}

.contacts-section__title {
  margin-bottom: 16px;
}
.contacts-section__container {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 0;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .contacts-section__container {
    gap: 40px;
    padding-bottom: 96px;
    flex-direction: row;
  }
}
.contacts-section__map {
  flex-shrink: 0;
  height: 176px;
  margin: 0 -24px;
  border-radius: 16px;
  width: 100%;
  border: none;
}
@media screen and (min-width: 768px) {
  .contacts-section__map {
    margin: auto;
    width: 320px;
    height: 500px;
  }
}
@media screen and (min-width: 1280px) {
  .contacts-section__map {
    width: 603px;
    height: 595px;
  }
}
.contacts-section__form {
  max-width: 605px;
}
.contacts-section__form-instruction {
  color: olive;
  text-align: center;
}

.footer {
  position: relative;
  text-align: center;
  padding: 32px 0;
  background-color: #31261a;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .footer {
    text-align: left;
  }
}
.footer__logo {
  z-index: 5;
  display: inline-block;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .footer__logo {
    justify-content: left;
  }
}
.footer__container {
  display: flex;
  flex-direction: column;
  align-items: top;
  gap: 20px;
}
@media screen and (min-width: 768px) {
  .footer__container {
    flex-direction: row;
    gap: 40px;
  }
}
.footer__nav {
  display: flex;
  align-items: top;
  flex-grow: 1;
  gap: 40px;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .footer__nav {
    flex-direction: row;
  }
}
.footer__contacts_item {
  font-size: 16px;
  font-weight: 300;
  max-width: 211px;
  color: var(--colorch);
  text-decoration: none;
  transition: color 0.3s;
  flex-direction: column;
}
.footer__contacts_item:hover {
  color: var(--colorb);
}
@media screen and (min-width: 768px) {
  .footer__contacts_item {
    flex-direction: row;
  }
}
.footer__menu {
  display: flex;
  z-index: 1;
  gap: 20px;
  flex-grow: 1;
  justify-content: space-evenly;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .footer__menu {
    flex-direction: row;
    gap: 64px;
  }
}
.footer__before {
  width: 180px;
  height: 120px;
  background-repeat: no-repeat;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0px;
}
@media screen and (min-width: 768px) {
  .footer__before {
    bottom: 0;
    left: 0;
  }
}
.footer__after {
  width: 329px;
  height: 154px;
  content: "";
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
@media screen and (min-width: 768px) {
  .footer__after {
    width: 380px;
    height: 190px;
    bottom: 0;
    right: 0;
  }
}
.footer__bottom {
  z-index: 1;
}
.footer__icons {
  display: flex;
  gap: 20px;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .footer__icons {
    justify-content: left;
  }
}
.footer__protection {
  color: #a18268;
  font-size: 14px;
  font-weight: 400;
}
.footer__address-icon {
  fill: var(--colorch);
}

.backdrop {
  z-index: 5;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 0;
  transition: opacity 1s, visibility 1s;
}
.backdrop.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.modal {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 680px;
  height: 100%;
  max-height: 680px;
  background-color: var(--colorch);
  border-radius: 32px;
  padding: 48px;
  overflow-y: auto;
}
@media screen and (min-width: 1280px) {
  .modal {
    padding: 128px;
    max-width: 880px;
  }
}
.modal__cross-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.modal__form-title {
  margin-bottom: 8px;
  margin-top: 50px;
}
.modal__form-instruction {
  position: relative;
  margin: 0 auto 20px;
  text-align: center;
  color: darkolivegreen;
  font-size: 18px;
}
@media screen and (min-width: 768px) {
  .modal {
    margin: 0 auto 72px;
  }
}

.form-field {
  margin-bottom: 32px;
}
.form-field:focus::placeholder {
  color: var(--color_primarydark);
}
.form-field__input {
  padding: 16px 42px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #a18268;
  background-color: transparent;
  font-size: 16px;
  line-height: 1.17;
}
.form-field__input:focus {
  border-color: var(--colorb);
  outline: none;
}
.form-field__input::placeholder {
  color: #a18268;
  font-size: 16px;
  line-height: 1.17;
}
.form-field__label {
  display: block;
}
.form-field__terms {
  margin: 0 auto;
  max-width: 220px;
  font-size: 12px;
  text-align: center;
}
.form-field__terms-link {
  color: #819b57;
}
.form-field__button {
  margin: 0 auto 24px;
}

.fa-xmark {
  font-size: 2em;
}
.fa-xmark:hover {
  color: var(--colorb);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--colorch);
  transform: translateX(100%);
  transition: transform 0.5s;
}
.mobile-menu.is-open {
  transform: translateX(0);
}
.mobile-menu__button {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 100px;
}
.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
}
.mobile-menu__link {
  text-decoration: none;
  color: var(--color_primarydark);
}
.mobile-menu__link:hover {
  color: var(--colorb);
}`, "",{"version":3,"sources":["webpack://./src/scss/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/utils/_variables.scss","webpack://./src/scss/utils/_util.scss","webpack://./src/scss/utils/_texts.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_chefs-item.scss","webpack://./src/scss/layouts/_header.scss","webpack://./src/scss/components/_link.scss","webpack://./src/scss/layouts/_section.scss","webpack://./src/scss/layouts/_hero-section.scss","webpack://./src/scss/layouts/_advantages-section.scss","webpack://./src/scss/layouts/_traditions-section.scss","webpack://./src/scss/layouts/_cook-section.scss","webpack://./src/scss/layouts/_formats-section.scss","webpack://./src/scss/layouts/_contacts-section.scss","webpack://./src/scss/layouts/_footer-section.scss","webpack://./src/scss/layouts/_form-section.scss","webpack://./src/scss/layouts/_mobile-menu.scss"],"names":[],"mappings":"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","sourcesContent":["/* Global */\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  color: var(--color_primarydark);\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n  background-color: var(--colorch);\n}\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\naddress {\n  font-style: normal;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 1288px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n//Icons\n.fa-brands,\n.fa-facebook,\n.fa-bars {\n  font-size: 2em;\n}\n.fa-bars {\n  color: var(--colorch);\n}\n.fa-bars:hover {\n  color: var(--colorb);\n  cursor: pointer;\n}\nbutton:hover {\n  opacity: 0.9;\n}\n","/* Global */\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\");\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  color: var(--color_primarydark);\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n  background-color: var(--colorch);\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\naddress {\n  font-style: normal;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 1288px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.fa-brands,\n.fa-facebook,\n.fa-bars {\n  font-size: 2em;\n}\n\n.fa-bars {\n  color: var(--colorch);\n}\n\n.fa-bars:hover {\n  color: var(--colorb);\n  cursor: pointer;\n}\n\nbutton:hover {\n  opacity: 0.9;\n}\n\n:root {\n  --colorb: #819b57;\n  --colorch: #faf4ea;\n  --color_primarydark: #31261a;\n}\n\n.visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.text-brand {\n  color: var(--colorb);\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.text-uppercase {\n  text-transform: uppercase;\n}\n\n.modal-btn-open {\n  display: block;\n  padding: 10px 20px;\n  background-color: var(--colorb);\n  color: var(--colorch);\n  border: solid var(--colorb);\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n}\n@media screen and (min-width: 768px) {\n  .modal-btn-open {\n    padding: 16px 32px;\n  }\n}\n\n.modal-btn-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n@media screen and (min-width: 768px) {\n  .modal-btn-close {\n    top: 40px;\n    right: 40px;\n  }\n}\n\n.button:hover {\n  background-color: transparent;\n  color: #819b57;\n}\n\n.button:active {\n  background-color: blue;\n  color: var(--colorb);\n}\n\n.chefs-item {\n  display: flex;\n  gap: 16px;\n  list-style: none;\n  align-items: flex-start;\n}\n@media screen and (min-width: 1280px) {\n  .chefs-item {\n    gap: 20px;\n  }\n}\n.chefs-item__image {\n  list-style: none;\n  width: 140px;\n  border-radius: 4px 4px 4px 200px;\n  box-shadow: -16px 16px 0px 0px var(--colorch), -16px 16px 0px 2px black;\n}\n@media screen and (min-width: 768px) {\n  .chefs-item__image {\n    width: 240px;\n  }\n}\n.chefs-item__cook {\n  margin-bottom: 16px;\n  color: var(--color_primarydark);\n  font-size: 24px;\n  font-weight: 600;\n}\n@media screen and (min-width: 1280px) {\n  .chefs-item__cook {\n    font-size: 40px;\n  }\n}\n.chefs-item__text {\n  max-width: 187px;\n  margin-bottom: 26px;\n  font-size: 14px;\n}\n.chefs-item__text:last-child {\n  margin-bottom: 0px;\n}\n@media screen and (min-width: 768px) {\n  .chefs-item__text {\n    font-size: 18px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .chefs-item__text {\n    max-width: 334px;\n  }\n}\n\n.header {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  padding-top: 16px;\n  z-index: 2;\n}\n@media screen and (min-width: 768px) {\n  .header {\n    padding-top: 32px;\n  }\n}\n.header__container {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n.header__nav {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  gap: 40px;\n}\n.header__menu {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .header__menu {\n    list-style: none;\n    display: flex;\n    gap: 64px;\n    flex-grow: 1;\n    justify-content: center;\n  }\n}\n.header__button {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .header__button {\n    display: block;\n  }\n}\n.header__burger {\n  background-color: transparent;\n  border: none;\n  fill: aliceblue;\n}\n@media screen and (min-width: 1280px) {\n  .header__burger {\n    display: none;\n  }\n}\n\n.link {\n  color: var(--colorch);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.link:hover {\n  color: var(--colorb);\n}\n\n.section {\n  padding: 20px 0;\n}\n@media screen and (min-width: 768px) {\n  .section {\n    padding: 48px 0;\n  }\n}\n.section__titles {\n  color: black;\n  font-size: 42px;\n  font-weight: 900;\n  line-height: 1.3;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n.section__titles--centered {\n  text-align: center;\n}\n@media screen and (min-width: 1280px) {\n  .section__titles {\n    font-size: 64px;\n  }\n}\n\n.hero-section {\n  height: 336px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: linear-gradient(103deg, rgba(18, 18, 17, 0.78) 2.03%, rgba(18, 18, 17, 0.6) 58.46%, rgba(18, 18, 17, 0) 90.36%), url(\"/src/html_Images/hero-section-pic.jpg\");\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: cover;\n}\n@media screen and (min-width: 768px) {\n  .hero-section {\n    height: 536px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section {\n    height: 736px;\n  }\n}\n.hero-section__title {\n  color: var(--colorch);\n  font-weight: 900;\n  text-align: center;\n  position: relative;\n  top: 50px;\n  font-size: 47px;\n  margin-bottom: 100px;\n  line-height: 1;\n}\n@media screen and (min-width: 768px) {\n  .hero-section__title {\n    top: 0px;\n    margin-bottom: 50px;\n    font-size: 107px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__title {\n    font-size: 128px;\n    line-height: 1.5;\n    margin-bottom: 0;\n  }\n}\n.hero-section__button {\n  margin: 0 auto;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__button {\n    display: none;\n  }\n}\n\n.advantages-section {\n  padding: 40px 0 0px;\n}\n@media screen and (min-width: 768px) {\n  .advantages-section {\n    background-color: var(--colorb);\n    padding: 16px 0 16px;\n  }\n}\n.advantages-section__list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background-color: #cfcfbc;\n  justify-content: center;\n  align-items: center;\n  border-radius: 24px;\n  padding: 24px 40px;\n}\n@media screen and (min-width: 768px) {\n  .advantages-section__list {\n    list-style: none;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    gap: 40px;\n    background-color: transparent;\n    border-radius: 0;\n    padding: 0;\n  }\n}\n.advantages-section__item {\n  color: black;\n  font-size: 14px;\n}\n@media screen and (min-width: 768px) {\n  .advantages-section__item {\n    font-size: 20px;\n    font-weight: 300;\n    color: var(--colorch);\n  }\n}\n\n.traditions-section {\n  padding: 40px 0 20px 0;\n  font-size: 14px;\n}\n@media screen and (min-width: 768px) {\n  .traditions-section {\n    font-size: 18px;\n    padding: 96px 0 48px 0;\n  }\n}\n.traditions-section__container {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 40px;\n}\n@media screen and (min-width: 768px) {\n  .traditions-section__container {\n    font-size: 18px;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 768px) {\n  .traditions-section__container {\n    justify-content: space-between;\n  }\n}\n.traditions-section__content {\n  max-width: 710px;\n}\n.traditions-section__title {\n  margin-bottom: 24px;\n}\n@media screen and (min-width: 768px) {\n  .traditions-section__title {\n    margin-bottom: 42px;\n  }\n}\n.traditions-section__text--limited {\n  max-width: 350px;\n}\n.traditions-section__baker-image {\n  display: none;\n  border-radius: 400px 400px 0px 0px;\n}\n@media screen and (min-width: 768px) {\n  .traditions-section__baker-image {\n    display: block;\n  }\n}\n\n.cooks-section__title {\n  margin-bottom: 24px;\n  max-width: 520px;\n  position: relative;\n}\n@media screen and (min-width: 768px) {\n  .cooks-section__title {\n    margin-bottom: 80px;\n  }\n}\n.cooks-section__title::before {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .cooks-section__title::before {\n    display: block;\n    width: 352px;\n    height: 2px;\n    background-color: #cfcfbc;\n    content: \"\";\n    position: absolute;\n    left: -360px;\n    bottom: 24px;\n  }\n}\n.cooks-section__title::after {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .cooks-section__title::after {\n    display: block;\n    width: 352px;\n    height: 2px;\n    background-color: #cfcfbc;\n    content: \"\";\n    position: absolute;\n    right: -360px;\n    bottom: 24px;\n  }\n}\n.cooks-section__container {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n@media screen and (min-width: 1280px) {\n  .cooks-section__container {\n    justify-content: space-between;\n  }\n}\n\n.wrapper {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n}\n@media screen and (min-width: 1280px) {\n  .wrapper {\n    margin: 0 0 50px 50px;\n  }\n}\n\n.wrapper i {\n  top: 50%;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  font-size: 1.25rem;\n  position: absolute;\n  text-align: center;\n  line-height: 50px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);\n  transform: translateY(-50%);\n  transition: transform 0.1s linear;\n}\n\n.wrapper i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n\n.wrapper i:first-child {\n  left: -22px;\n}\n\n.wrapper i:last-child {\n  right: -22px;\n}\n\n.wrapper .carousel {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: calc(33.3333333333% - 12px);\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n\n.carousel.no-transition {\n  scroll-behavior: auto;\n}\n\n.carousel.dragging {\n  scroll-snap-type: none;\n  scroll-behavior: auto;\n}\n\n.carousel.dragging .card {\n  cursor: grab;\n  user-select: none;\n}\n\n.carousel :where(.card, .img) {\n  display: flex;\n  justify-content: center;\n  align-items: left;\n}\n\n.carousel .card {\n  scroll-snap-align: start;\n  height: 444px;\n  max-width: 345px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  padding: 24px;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 600px) {\n  .carousel .card {\n    scroll-snap-align: center;\n  }\n}\n\n.carousel .card .img {\n  height: 148px;\n  width: 148px;\n  border-radius: 50%;\n}\n\n.card .img img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #fff;\n}\n\n.carousel .card h2 {\n  font-weight: 500;\n  font-size: 1.56rem;\n  margin: 30px 0 5px;\n}\n\n.carousel .card span {\n  color: #6a6d78;\n  font-size: 1.31rem;\n}\n\n@media screen and (max-width: 900px) {\n  .wrapper .carousel {\n    grid-auto-columns: calc(50% - 9px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper .carousel {\n    grid-auto-columns: 100%;\n  }\n}\n.card h2,\n.card p {\n  color: #fff;\n  text-align: end left;\n}\n\n.contacts-section__title {\n  margin-bottom: 16px;\n}\n.contacts-section__container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding-bottom: 0;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n  .contacts-section__container {\n    gap: 40px;\n    padding-bottom: 96px;\n    flex-direction: row;\n  }\n}\n.contacts-section__map {\n  flex-shrink: 0;\n  height: 176px;\n  margin: 0 -24px;\n  border-radius: 16px;\n  width: 100%;\n  border: none;\n}\n@media screen and (min-width: 768px) {\n  .contacts-section__map {\n    margin: auto;\n    width: 320px;\n    height: 500px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .contacts-section__map {\n    width: 603px;\n    height: 595px;\n  }\n}\n.contacts-section__form {\n  max-width: 605px;\n}\n.contacts-section__form-instruction {\n  color: olive;\n  text-align: center;\n}\n\n.footer {\n  position: relative;\n  text-align: center;\n  padding: 32px 0;\n  background-color: #31261a;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  .footer {\n    text-align: left;\n  }\n}\n.footer__logo {\n  z-index: 5;\n  display: inline-block;\n  margin: 0 auto;\n}\n@media screen and (min-width: 768px) {\n  .footer__logo {\n    justify-content: left;\n  }\n}\n.footer__container {\n  display: flex;\n  flex-direction: column;\n  align-items: top;\n  gap: 20px;\n}\n@media screen and (min-width: 768px) {\n  .footer__container {\n    flex-direction: row;\n    gap: 40px;\n  }\n}\n.footer__nav {\n  display: flex;\n  align-items: top;\n  flex-grow: 1;\n  gap: 40px;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n  .footer__nav {\n    flex-direction: row;\n  }\n}\n.footer__contacts_item {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 211px;\n  color: var(--colorch);\n  text-decoration: none;\n  transition: color 0.3s;\n  flex-direction: column;\n}\n.footer__contacts_item:hover {\n  color: var(--colorb);\n}\n@media screen and (min-width: 768px) {\n  .footer__contacts_item {\n    flex-direction: row;\n  }\n}\n.footer__menu {\n  display: flex;\n  z-index: 1;\n  gap: 20px;\n  flex-grow: 1;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n  .footer__menu {\n    flex-direction: row;\n    gap: 64px;\n  }\n}\n.footer__before {\n  width: 180px;\n  height: 120px;\n  background-repeat: no-repeat;\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0px;\n}\n@media screen and (min-width: 768px) {\n  .footer__before {\n    bottom: 0;\n    left: 0;\n  }\n}\n.footer__after {\n  width: 329px;\n  height: 154px;\n  content: \"\";\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n@media screen and (min-width: 768px) {\n  .footer__after {\n    width: 380px;\n    height: 190px;\n    bottom: 0;\n    right: 0;\n  }\n}\n.footer__bottom {\n  z-index: 1;\n}\n.footer__icons {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n@media screen and (min-width: 768px) {\n  .footer__icons {\n    justify-content: left;\n  }\n}\n.footer__protection {\n  color: #a18268;\n  font-size: 14px;\n  font-weight: 400;\n}\n.footer__address-icon {\n  fill: var(--colorch);\n}\n\n.backdrop {\n  z-index: 5;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n}\n.backdrop.is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 680px;\n  height: 100%;\n  max-height: 680px;\n  background-color: var(--colorch);\n  border-radius: 32px;\n  padding: 48px;\n  overflow-y: auto;\n}\n@media screen and (min-width: 1280px) {\n  .modal {\n    padding: 128px;\n    max-width: 880px;\n  }\n}\n.modal__cross-button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.modal__form-title {\n  margin-bottom: 8px;\n  margin-top: 50px;\n}\n.modal__form-instruction {\n  position: relative;\n  margin: 0 auto 20px;\n  text-align: center;\n  color: darkolivegreen;\n  font-size: 18px;\n}\n@media screen and (min-width: 768px) {\n  .modal {\n    margin: 0 auto 72px;\n  }\n}\n\n.form-field {\n  margin-bottom: 32px;\n}\n.form-field:focus::placeholder {\n  color: var(--color_primarydark);\n}\n.form-field__input {\n  padding: 16px 42px;\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid #a18268;\n  background-color: transparent;\n  font-size: 16px;\n  line-height: 1.17;\n}\n.form-field__input:focus {\n  border-color: var(--colorb);\n  outline: none;\n}\n.form-field__input::placeholder {\n  color: #a18268;\n  font-size: 16px;\n  line-height: 1.17;\n}\n.form-field__label {\n  display: block;\n}\n.form-field__terms {\n  margin: 0 auto;\n  max-width: 220px;\n  font-size: 12px;\n  text-align: center;\n}\n.form-field__terms-link {\n  color: #819b57;\n}\n.form-field__button {\n  margin: 0 auto 24px;\n}\n\n.fa-xmark {\n  font-size: 2em;\n}\n.fa-xmark:hover {\n  color: var(--colorb);\n}\n\n.mobile-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--colorch);\n  transform: translateX(100%);\n  transition: transform 0.5s;\n}\n.mobile-menu.is-open {\n  transform: translateX(0);\n}\n.mobile-menu__button {\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 16px;\n  right: 100px;\n}\n.mobile-menu__nav {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 20px;\n}\n.mobile-menu__link {\n  text-decoration: none;\n  color: var(--color_primarydark);\n}\n.mobile-menu__link:hover {\n  color: var(--colorb);\n}",":root {\n  --colorb: #819b57;\n  --colorch: #faf4ea;\n  --color_primarydark: #31261a;\n}\n\n$bp-mobile: 480px;\n$bp-tablet: 768px;\n$bp-desktop: 1280px;\n",".visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n",".text-brand {\n  color: var(--colorb);\n}\n.text-bold {\n  font-weight: 600;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n",".modal-btn-open {\n  display: block;\n  padding: 10px 20px;\n  background-color: var(--colorb);\n  color: var(--colorch);\n  border: solid var(--colorb);\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  @media screen and (min-width: $bp-tablet) {\n    padding: 16px 32px;\n  }\n}\n\n.modal-btn-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  @media screen and (min-width: $bp-tablet) {\n    top: 40px;\n    right: 40px;\n  }\n}\n.button:hover {\n  background-color: transparent;\n  color: #819b57;\n}\n\n.button:active {\n  background-color: blue;\n  color: var(--colorb);\n}\n",".chefs-item {\n  display: flex;\n  gap: 16px;\n  list-style: none;\n  align-items: flex-start;\n\n  @media screen and (min-width: $bp-desktop) {\n    gap: 20px;\n  }\n\n  &__image {\n    list-style: none;\n    width: 140px;\n    border-radius: 4px 4px 4px 200px;\n    box-shadow: -16px 16px 0px 0px var(--colorch), -16px 16px 0px 2px black;\n\n    @media screen and (min-width: $bp-tablet) {\n      width: 240px;\n    }\n  }\n\n  &__cook {\n    margin-bottom: 16px;\n    color: var(--color_primarydark);\n    font-size: 24px;\n    font-weight: 600;\n\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 40px;\n    }\n  }\n\n  &__text {\n    max-width: 187px;\n    margin-bottom: 26px;\n    font-size: 14px;\n    &:last-child {\n      margin-bottom: 0px;\n    }\n    @media screen and (min-width: $bp-tablet) {\n      font-size: 18px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      max-width: 334px;\n    }\n  }\n}\n",".header {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  padding-top: 16px;\n  z-index: 2;\n  @media screen and (min-width: $bp-tablet) {\n    padding-top: 32px;\n  }\n\n  &__container {\n    display: flex;\n    align-items: center;\n    gap: 40px;\n  }\n\n  &__nav {\n    display: flex;\n    align-items: center;\n    flex-grow: 1;\n    gap: 40px;\n  }\n  &__menu {\n    display: none;\n\n    @media screen and (min-width: $bp-desktop) {\n      list-style: none;\n      display: flex;\n      gap: 64px;\n      flex-grow: 1;\n      justify-content: center;\n    }\n  }\n  &__button {\n    display: none;\n\n    @media screen and (min-width: $bp-desktop) {\n      display: block;\n    }\n  }\n  &__burger {\n    background-color: transparent;\n    border: none;\n    fill: aliceblue;\n    @media screen and (min-width: $bp-desktop) {\n      display: none;\n    }\n  }\n}\n",".link {\n  color: var(--colorch);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.link:hover {\n  color: var(--colorb);\n}\n",".section {\n  padding: 20px 0;\n\n  @media screen and (min-width: $bp-tablet) {\n    padding: 48px 0;\n  }\n\n  &__titles {\n    color: black;\n    font-size: 42px;\n    font-weight: 900;\n    line-height: 1.3;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    &--centered {\n      text-align: center;\n    }\n\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 64px;\n    }\n  }\n}\n",".hero-section {\n  height: 336px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n      103deg,\n      rgba(18, 18, 17, 0.78) 2.03%,\n      rgba(18, 18, 17, 0.6) 58.46%,\n      rgba(18, 18, 17, 0) 90.36%\n    ),\n    url(\"/src/html_Images/hero-section-pic.jpg\");\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: cover;\n  @media screen and (min-width: $bp-tablet) {\n    height: 536px;\n  }\n  @media screen and (min-width: $bp-desktop) {\n    height: 736px;\n  }\n\n  &__title {\n    color: var(--colorch);\n    font-weight: 900;\n    text-align: center;\n    position: relative;\n    top: 50px;\n    font-size: 47px;\n    margin-bottom: 100px;\n    line-height: 1;\n    @media screen and (min-width: $bp-tablet) {\n      top: 0px;\n      margin-bottom: 50px;\n      font-size: 107px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 128px;\n      line-height: 1.5;\n      margin-bottom: 0;\n    }\n  }\n  &__button {\n    margin: 0 auto;\n    @media screen and (min-width: $bp-desktop) {\n      display: none;\n    }\n  }\n}\n",".advantages-section {\n  padding: 40px 0 0px;\n\n  @media screen and (min-width: $bp-tablet) {\n    background-color: var(--colorb);\n    padding: 16px 0 16px;\n  }\n\n  &__list {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    background-color: #cfcfbc;\n    justify-content: center;\n    align-items: center;\n    border-radius: 24px;\n    padding: 24px 40px;\n\n    @media screen and (min-width: $bp-tablet) {\n      list-style: none;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      gap: 40px;\n      background-color: transparent;\n      border-radius: 0;\n      padding: 0;\n    }\n  }\n  &__item {\n    color: black;\n    font-size: 14px;\n\n    @media screen and (min-width: $bp-tablet) {\n      font-size: 20px;\n      font-weight: 300;\n      color: var(--colorch);\n    }\n  }\n}\n",".traditions-section {\n  padding: 40px 0 20px 0;\n  font-size: 14px;\n\n  @media screen and (min-width: $bp-tablet) {\n    font-size: 18px;\n    padding: 96px 0 48px 0;\n  }\n\n  &__container {\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 40px;\n    @media screen and (min-width: $bp-tablet) {\n      font-size: 18px;\n      @media screen and (min-width: $bp-tablet) {\n        justify-content: space-between;\n      }\n    }\n  }\n  &__content {\n    max-width: 710px;\n  }\n  &__title {\n    margin-bottom: 24px;\n\n    @media screen and (min-width: $bp-tablet) {\n      margin-bottom: 42px;\n    }\n  }\n  &__text {\n    &--limited {\n      max-width: 350px;\n    }\n  }\n  &__baker-image {\n    display: none;\n    border-radius: 400px 400px 0px 0px;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n    }\n  }\n}\n",".cooks-section {\n  &__title {\n    margin-bottom: 24px;\n    max-width: 520px;\n    position: relative;\n    @media screen and (min-width: $bp-tablet) {\n      margin-bottom: 80px;\n    }\n\n    &::before {\n      display: none;\n      @media screen and (min-width: $bp-desktop) {\n        display: block;\n        width: 352px;\n        height: 2px;\n        background-color: #cfcfbc;\n        content: \"\";\n        position: absolute;\n        left: -360px;\n        bottom: 24px;\n      }\n    }\n\n    &::after {\n      display: none;\n\n      @media screen and (min-width: $bp-desktop) {\n        display: block;\n        width: 352px;\n        height: 2px;\n        background-color: #cfcfbc;\n        content: \"\";\n        position: absolute;\n        right: -360px;\n        bottom: 24px;\n      }\n    }\n  }\n  &__container {\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    flex-wrap: wrap;\n    @media screen and (min-width: $bp-desktop) {\n      justify-content: space-between;\n    }\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\");\n\n.wrapper {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  @media screen and (min-width: $bp-desktop) {\n    margin: 0 0 50px 50px;\n  }\n}\n.wrapper i {\n  top: 50%;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  font-size: 1.25rem;\n  position: absolute;\n  text-align: center;\n  line-height: 50px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);\n  transform: translateY(-50%);\n  transition: transform 0.1s linear;\n}\n.wrapper i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n.wrapper i:first-child {\n  left: -22px;\n}\n.wrapper i:last-child {\n  right: -22px;\n}\n.wrapper .carousel {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: calc((100% / 3) - 12px);\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n.carousel.no-transition {\n  scroll-behavior: auto;\n}\n.carousel.dragging {\n  scroll-snap-type: none;\n  scroll-behavior: auto;\n}\n.carousel.dragging .card {\n  cursor: grab;\n  user-select: none;\n}\n.carousel :where(.card, .img) {\n  display: flex;\n  justify-content: center;\n  align-items: left;\n}\n.carousel .card {\n  scroll-snap-align: start;\n  height: 444px;\n  max-width: 345px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  padding: 24px;\n  justify-content: flex-end;\n  @media screen and (max-width: 600px) {\n    scroll-snap-align: center;\n  }\n}\n.carousel .card .img {\n  height: 148px;\n  width: 148px;\n  border-radius: 50%;\n}\n.card .img img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #fff;\n}\n.carousel .card h2 {\n  font-weight: 500;\n  font-size: 1.56rem;\n  margin: 30px 0 5px;\n}\n.carousel .card span {\n  color: #6a6d78;\n  font-size: 1.31rem;\n}\n@media screen and (max-width: 900px) {\n  .wrapper .carousel {\n    grid-auto-columns: calc((100% / 2) - 9px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper .carousel {\n    grid-auto-columns: 100%;\n  }\n}\n\n.card h2,\n.card p {\n  color: #fff;\n  text-align: end left;\n}\n\n// .card1 {\n//   background-image: linear-gradient(\n//       180deg,\n//       rgba(49, 38, 26, 0) 55.21%,\n//       rgba(49, 38, 26, 0.71) 72.92%,\n//       #31261a 100%\n//     ),\n//     url(\"images/model_handlebar.jpg\");\n// }\n// .card2 {\n//   background-image: linear-gradient(\n//       180deg,\n//       rgba(49, 38, 26, 0) 55.21%,\n//       rgba(49, 38, 26, 0.71) 72.92%,\n//       #31261a 100%\n//     ),\n//     url(\"images/model_horseshoe.png\");\n// }\n\n// .card3 {\n//   background-image: linear-gradient(\n//       180deg,\n//       rgba(49, 38, 26, 0) 55.21%,\n//       rgba(49, 38, 26, 0.71) 72.92%,\n//       #31261a 100%\n//     ),\n//     url(\"images/model_walrus.jpg\");\n// }\n",".contacts-section {\n  &__title {\n    margin-bottom: 16px;\n  }\n  &__container {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    padding-bottom: 0;\n    flex-direction: column;\n    @media screen and (min-width: $bp-tablet) {\n      gap: 40px;\n      padding-bottom: 96px;\n      flex-direction: row;\n    }\n  }\n  &__map {\n    flex-shrink: 0;\n    height: 176px;\n    margin: 0 -24px;\n    border-radius: 16px;\n    width: 100%;\n    border: none;\n\n    @media screen and (min-width: $bp-tablet) {\n      margin: auto;\n      width: 320px;\n      height: 500px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      width: 603px;\n      height: 595px;\n    }\n  }\n  &__form {\n    max-width: 605px;\n  }\n  &__form-instruction {\n    color: olive;\n    text-align: center;\n  }\n}\n",".footer {\n  position: relative;\n  text-align: center;\n  padding: 32px 0;\n  background-color: #31261a;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n  @media screen and (min-width: $bp-tablet) {\n    text-align: left;\n  }\n  &__logo {\n    z-index: 5;\n    display: inline-block;\n    margin: 0 auto;\n    @media screen and (min-width: $bp-tablet) {\n      justify-content: left;\n    }\n  }\n  &__container {\n    display: flex;\n    flex-direction: column;\n    align-items: top;\n    gap: 20px;\n    @media screen and (min-width: $bp-tablet) {\n      flex-direction: row;\n      gap: 40px;\n    }\n  }\n  &__nav {\n    display: flex;\n    align-items: top;\n    flex-grow: 1;\n    gap: 40px;\n    flex-direction: column;\n\n    @media screen and (min-width: $bp-tablet) {\n      flex-direction: row;\n    }\n  }\n  &__contacts_item {\n    font-size: 16px;\n    font-weight: 300;\n    max-width: 211px;\n    color: var(--colorch);\n    text-decoration: none;\n    transition: color 0.3s;\n    &:hover {\n      color: var(--colorb);\n    }\n    flex-direction: column;\n    @media screen and (min-width: $bp-tablet) {\n      flex-direction: row;\n    }\n  }\n  &__menu {\n    display: flex;\n    z-index: 1;\n    gap: 20px;\n    flex-grow: 1;\n    justify-content: space-evenly;\n    flex-direction: column;\n    @media screen and (min-width: $bp-tablet) {\n      flex-direction: row;\n      gap: 64px;\n    }\n  }\n  &__before {\n    width: 180px;\n    height: 120px;\n    background-repeat: no-repeat;\n\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0px;\n    @media screen and (min-width: $bp-tablet) {\n      bottom: 0;\n      left: 0;\n    }\n  }\n  &__after {\n    width: 329px;\n\n    height: 154px;\n\n    content: \"\";\n    background-repeat: no-repeat;\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    @media screen and (min-width: $bp-tablet) {\n      width: 380px;\n      height: 190px;\n      bottom: 0;\n      right: 0;\n    }\n  }\n  &__bottom {\n    z-index: 1;\n  }\n  &__icons {\n    display: flex;\n\n    gap: 20px;\n    justify-content: center;\n    @media screen and (min-width: $bp-tablet) {\n      justify-content: left;\n    }\n  }\n  &__protection {\n    color: #a18268;\n    font-size: 14px;\n    font-weight: 400;\n  }\n  &__address-icon {\n    fill: var(--colorch);\n  }\n}\n",".backdrop {\n  z-index: 5;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n\n  &.is-hidden {\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n  }\n}\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 680px;\n  height: 100%;\n  max-height: 680px;\n  background-color: var(--colorch);\n  border-radius: 32px;\n  padding: 48px;\n  overflow-y: auto;\n\n  @media screen and (min-width: $bp-desktop) {\n    padding: 128px;\n    max-width: 880px;\n  }\n\n  &__cross-button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n  }\n  &__form-title {\n    margin-bottom: 8px;\n    margin-top: 50px;\n  }\n  &__form-instruction {\n    position: relative;\n    margin: 0 auto 20px;\n    text-align: center;\n    color: darkolivegreen;\n    font-size: 18px;\n  }\n  @media screen and (min-width: $bp-tablet) {\n    margin: 0 auto 72px;\n  }\n}\n\n.form-field {\n  margin-bottom: 32px;\n\n  &:focus::placeholder {\n    color: var(--color_primarydark);\n  }\n\n  &__input {\n    padding: 16px 42px;\n    width: 100%;\n    border-radius: 8px;\n    border: 1px solid #a18268;\n    background-color: transparent;\n    font-size: 16px;\n    line-height: 1.17;\n    &:focus {\n      border-color: var(--colorb);\n      outline: none;\n    }\n    &::placeholder {\n      color: #a18268;\n      font-size: 16px;\n      line-height: 1.17;\n    }\n  }\n  &__label {\n    display: block;\n  }\n  &__terms {\n    margin: 0 auto;\n    max-width: 220px;\n    font-size: 12px;\n    text-align: center;\n  }\n  &__terms-link {\n    color: #819b57;\n  }\n\n  &__button {\n    margin: 0 auto 24px;\n  }\n}\n\n.fa-xmark {\n  font-size: 2em;\n  &:hover {\n    color: var(--colorb);\n  }\n}\n",".mobile-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--colorch);\n  transform: translateX(100%);\n  transition: transform 0.5s;\n  &.is-open {\n    transform: translateX(0);\n  }\n  &__button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    top: 16px;\n    right: 100px;\n  }\n  &__nav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin: 20px;\n  }\n  &__link {\n    text-decoration: none;\n    color: var(--color_primarydark);\n    &:hover {\n      color: var(--colorb);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/html_Images/baker-man.jpg":
/*!***************************************!*\
  !*** ./src/html_Images/baker-man.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/baker-man.jpg";

/***/ }),

/***/ "./src/html_Images/hero-section-pic.jpg":
/*!**********************************************!*\
  !*** ./src/html_Images/hero-section-pic.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/hero-section-pic.jpg";

/***/ }),

/***/ "./src/html_Images/nastia.jpg":
/*!************************************!*\
  !*** ./src/html_Images/nastia.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/nastia.jpg";

/***/ }),

/***/ "./src/html_Images/vlad.jpg":
/*!**********************************!*\
  !*** ./src/html_Images/vlad.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/vlad.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider */ "./src/js/slider.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mobile-menu */ "./src/js/mobile-menu.js");
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _html_Images_vlad_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html_Images/vlad.jpg */ "./src/html_Images/vlad.jpg");
/* harmony import */ var _html_Images_nastia_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html_Images/nastia.jpg */ "./src/html_Images/nastia.jpg");
/* harmony import */ var _html_Images_baker_man_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html_Images/baker-man.jpg */ "./src/html_Images/baker-man.jpg");







var vlad_cook = document.getElementById("vlad");
vlad_cook.src = _html_Images_vlad_jpg__WEBPACK_IMPORTED_MODULE_4__;
var nastia_cook = document.getElementById("nastia");
nastia_cook.src = _html_Images_nastia_jpg__WEBPACK_IMPORTED_MODULE_5__;
var baker_man = document.getElementById("baker_");
baker_man.src = _html_Images_baker_man_jpg__WEBPACK_IMPORTED_MODULE_6__;
})();

/******/ })()
;
//# sourceMappingURL=bundle72a3e97be02868023b71.js.map