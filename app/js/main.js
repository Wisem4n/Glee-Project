$(function () {

  $('.menu__btn').click(function () {
    $('.menu__btn,.menu__btn span,.menu__list').toggleClass('active');
    
  })

  $('.details-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
    $(this).addClass('details-tabs__top-item--active');

    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');

  });

  $('.details-item__input').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  
  $(function () {
    $(".star").rateYo({
      rating: 3.6,
      readOnly: true,
      starWidth: "11px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00"
    });
  });

  $(function () {
    $(".star-list").rateYo({
      readOnly: true,
      starWidth: "16px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00"
    });
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false
  });

  $('.related__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  var mixer = mixitup('.products__gallery');

});