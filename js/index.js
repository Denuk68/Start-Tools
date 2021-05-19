// Owl-Carousel Top
$(document).ready(function () {
    $(".slide-carousel-top").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
        },
    });
});

// Сounter
$(document).ready(function () {
    $(".counter").counterUp({
      delay: 15,
      time: 1200,
    });
  });