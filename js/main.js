$(function(){
  "use strict"

  $('.counter').counterUp({
    delay: 10,
    time: 1500,
    offset: 100,
    beginAt: 0,
    });

    // CommonJS
  var mixer = mixitup(".box-list");

  $('.js-tilt').tilt({
    perspective:    1000,
  })
  

  $('.slick_slide').slick({
    arrows:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

})

