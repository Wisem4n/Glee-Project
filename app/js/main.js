$(function () {

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

  var mixer = mixitup('.products__gallery');

});