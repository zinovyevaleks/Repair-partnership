$(document).ready(function () {
  $('.slider-1').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    variableWidth: true
  });
  $('.slider-2').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    variableWidth: true
  });

});