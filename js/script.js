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
  effect: 'fade'
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu, .header").toggleClass("active");
    $(".body").toggleClass("lock");
  });
  $(".header__buffer").click(function (event) {
    $(".header__burger, .header__menu, .header").removeClass("active");
    $(".body").removeClass("lock");
  });
  $(".menu__burger").click(function (event) {
    $(".menu__burger, .menu__list").toggleClass("active");
    $(".body").toggleClass("lock");
  });

  
  $("#menu1H").on("click", function (e) {
    e.preventDefault();
    let top = $("#welcome").offset().top;
    $("html, body").animate({ scrollTop: top }, 500);
  });
  $("#menu1F").on("click", function (e) {
    e.preventDefault();
    let top = $("#welcome").offset().top;
    $("html, body").animate({ scrollTop: top }, 500);
  });

  $("#menu2H").on("click", function (e) {
    e.preventDefault();
    let top = $("#where").offset().top;
    $("html, body").animate({ scrollTop: top }, 500);
  });
  $("#menu2F").on("click", function (e) {
    e.preventDefault();
    let top = $("#where").offset().top;
    $("html, body").animate({ scrollTop: top }, 500);
  });

  $("#menu3H").on("click", function (e) {
    e.preventDefault();
    let top = $("#contacts").offset().top - 100;
    $("html, body").animate({ scrollTop: top }, 500);
  });
  $("#menu3F").on("click", function (e) {
    e.preventDefault();
    let top = $("#contacts").offset().top - 100;
    $("html, body").animate({ scrollTop: top }, 500);
  });


  
  //
  //
  //
  let html = document.documentElement;
  // const subtitle = document.querySelector(".where__subtitle");
  const wave = document.querySelector(".wrapper--img");
  const imgPara = document.querySelector(".where__img");
  const whereBef = document.querySelector(".where__back");

  $(window).scroll(function () {
    let scrollTop = html.scrollTop;
    scrollTop -= html.clientTop;

    // subtitle.style.bottom = (scrollTop - 642)/7.7 + 'px';
    wave.style.bottom = (scrollTop - 780)/3.3 + 'px';
    whereBef.style.top = (scrollTop - 660)/13.2 - 25 + '%';
    if (scrollTop > 220) {
      imgPara.style.animation = "imgPara 1.5s 1";
      imgPara.style.left = 72 + '%';
      imgPara.style.opacity = '1';
    }
  });
});