$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu, .header").toggleClass("active");
    $(".body").toggleClass("lock");
  });
  $(".header__buffer").click(function (event) {
    $(".header__burger, .header__menu, .header").removeClass("active");
    $(".body").removeClass("lock");
  });
});
