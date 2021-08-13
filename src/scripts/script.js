// MENU
$('.navbar-toggler').on('click', function () {
  $('body').toggleClass('show-menu');
});

var wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 20, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

setTimeout(function () {
  if ($('.understand-container').length > 0) {
    $('.understand-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 1000,
      arrows: false,
      infinite: true,
      fade: true,
      autoplay: true,
    });
    $('.btn-prev').click(function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.understand-slider')
        .slick('slickPrev');
    });
    $('.btn-next').click(function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.understand-slider')
        .slick('slickNext');
    });
  }

  if ($('.slider-projects').length > 0) {
    $('.slider-projects').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 1000,
      arrows: false,
      infinite: true,
      fade: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
          },
        },
      ],
    });
    $('.btn-prev').click(function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.slider-projects')
        .slick('slickPrev');
    });
    $('.btn-next').click(function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.slider-projects')
        .slick('slickNext');
    });
  }

  if ($('.block-squad').length > 0) {
    $('.block-squad').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('.btn-prev').click(function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.block-squad')
        .slick('slickPrev');
    });
    $('.btn-next').click(function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.block-squad')
        .slick('slickNext');
    });
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 73) {
    $('.bg-custom').addClass('sticky');
  } else {
    $('.bg-custom').removeClass('sticky');
  }
});
