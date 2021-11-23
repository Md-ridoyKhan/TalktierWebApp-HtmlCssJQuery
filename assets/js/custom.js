// jQuery
$(document).ready(function () {
  // preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut(1000);
  });

  /*-----------------
    sticky
    -----------------*/
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 85) {
      $(".header").addClass("navbar-fixed-top");
    } else {
      $(".header").removeClass("navbar-fixed-top");
    }
  });

  // video area here
  // magnific-popup
  $(".expandVideo").magnificPopup({
    type: "iframe",
  });

  // slick slider content
  // review area here 
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    draggable: false,
    // fade: true,
    asNavFor: '.slider-nav',
    responsive: [
        {
          breakpoint: 420,
          settings: {
            dots: false,
            centerMode: false,
            }
        }
    ]
  });

  // slick slider img
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    autoplay: true,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,  
            centerPadding: '0px',
            }
        },
        {
          breakpoint: 420,
          settings: {
            dots: false,
            slidesToShow: 1,
            // centerMode: false,
            }
        }
    ]
  });
});

// swiper slider
$(document).ready(function () {
  var swiper = new Swiper(".screenSwContent", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// wow js 
new WOW().init();



const headerMenu = document.querySelector(".headerbutton");
const navToggle = document.querySelector(".nav-toggler");
const closeMenu = document.querySelector(".closeMenu");
navToggle.onclick = () => {
  headerMenu.classList.toggle("active");
};
closeMenu.onclick = () => {
  headerMenu.classList.toggle("active");
};

/*########################
#theEndJAVASCRIPT########################
########################*/
