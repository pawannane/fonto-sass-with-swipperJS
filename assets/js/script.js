const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".header-nav");
const navLink = document.querySelectorAll(".header-nav a");
const html = document.querySelector("html");

/************************************ Hamburger logic ***********************************************/
//add active
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active-nav");
  html.classList.toggle("html-scroll"); // prevent scrolling
})

//remove active
navLink.forEach(e => {
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navContainer.classList.remove("active-nav");
    html.classList.remove("html-scroll"); // remove prevent scrolling or user can scroll
  })
});

/************************************ Swipper slider logic ***********************************************/
let swiper = new Swiper(".reviews-container-top", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },

  // If we need pagination
  pagination: {
    el: '.slider-container',
  },
});



