new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: "true",
  },
  autoHeight: "true",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
});

$(document).ready(function () {
  $(".form__close").click(function (event) {
    $(".form, .form-background").removeClass("active");
    $(".body").removeClass("lock");
  });
  $(".welcome__btn-wrap").click(function (event) {
    $(".form, .form-background").addClass("active");
    $(".body").addClass("lock");
  });
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});