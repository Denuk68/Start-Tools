// Owl-Carousel Top
$(document).ready(function () {
    $(".slide-carousel-top").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
        },
    });
});
// Сounter
$(document).ready(function () {
    $(".counter").counterUp({
      delay: 15,
      time: 1500,
    });
  });