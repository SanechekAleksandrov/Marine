$(function () {

  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-next">  <img src="images/next.svg" alt="O"></button>',
    nextArrow: '<button type="button" class="slick-prev">  <img src="images/prev.svg" alt="O"></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
  });

  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    dots:true,
    prevArrow: '<button type="button" class="product-next">  <img src="images/product_prev.svg" alt="O"></button>',
    nextArrow: '<button type="button" claproduct-prev">  <img src="images/product_next.svg" alt="O"></button>',
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true, 
  });




});