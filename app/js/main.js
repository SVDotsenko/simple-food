$(() => {
  $('.slider').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev">' +
      '<svg class="slider__arrow-img">' +
      '<use xlink:href="images/sprite.svg#arrow-left"></use>' +
      '</svg>' +
      '</button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next">' +
      '<svg class="slider__arrow-img">' +
      '<use xlink:href="images/sprite.svg#arrow-left"></use>' +
      '</svg>' +
      '</button>'
  });
});

mixitup('.popular-categories__content');