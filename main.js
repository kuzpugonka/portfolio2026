const swiper = document.querySelector('.swiper').swiper;
new WOW().init();

const swiper = new Swiper(".swiper", {
    speed: 400,
  spaceBetween: 100,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

swiper.slideNext();