mixitup('.popular-categories__content');

$(() => {
  $('.slider').slick({
    arrows: true,
    dots: true,
    infinite: false,
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

  $(window).on('load resize', () => {
    if ($(window).width() < 400) {
      $('.best-restaurants__items:not(.slick-initialized)').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $('.best-restaurants__items.slick-initialized').slick('unslick');
    }
  });
});

const burger = document.querySelector('.burger-button');
const bodyLock = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    bodyLock.classList.add('lock')
  }
});

document.addEventListener('click', e => {
  if (e.target !== burger && e.target !== mobileMenu) {
    mobileMenu.classList.remove('active');
    bodyLock.classList.remove('lock');
  }
});