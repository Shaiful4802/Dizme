$(function(){
  "use strict"
  //Counterup Js function Start 
  $('.counter').counterUp({
    delay: 10,
    time: 1500,
    offset: 100,
    beginAt: 0,
    });

  //Mixitup Js function Start 
  var mixer = mixitup(".box-list");

  //Tilt Js function Start 
  $('.js-tilt').tilt({
    perspective:    1000,
  })
  
  //Slick Slider Js function Start 
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

