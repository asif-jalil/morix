(function ($) {
  "use strict";
	
	// stycky header
    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('header').addClass('neel');
      }
      else
      {
        $('header').removeClass('neel');
      }
      
    })

    $('.counter').counterUp({
	    delay: 10,
	    time: 10000
	});

  // slick slider
	$('.screen').slick({
	  slidesToShow: 5,
	  slidesToScroll: 5,
	  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]   
	});

	$('.feedback').slick({
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]  
	});

  $('.sponsor-logo').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }
    ]  
  });

  // active JS 
	$('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });

  // wow JS
  new WOW().init();

  // scroll JS
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: 2,
  });

})(jQuery);
