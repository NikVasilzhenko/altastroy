//desctop catalog brends slider
var desctopCatalogBrendsSlider = new Swiper('#js-desctop-catalog-brends-slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
  navigation: {
    nextEl: '#js-desctop-catalog-brends-next',
    prevEl: '#js-desctop-catalog-brends-prev',
  },
});
var popBrends = new Swiper('#js-pop-brends', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
  navigation: {
    nextEl: '#js-pop-brends-next',
    prevEl: '#js-pop-brends-prev',
  },
});

//filter slider
var popBrends = new Swiper('.js-filter-slider', {
  slidesPerView: 'auto',
  freeMode: true,
});

//hero slider
var heroSlider = new Swiper('#js-hero-slider', {
  spaceBetween: 16,
  navigation: {
    nextEl: '#js-hero-slider-next',
    prevEl: '#js-hero-slider-prev',
  },
  pagination: {
    el: "#js-hero-slider-pagination",
    clickable: true,
  },
});

//hero dub slider
var heroDubSlider = new Swiper('#js-hero-dub-slider', {
  spaceBetween: 16,
  navigation: {
    nextEl: '#js-hero-dub-slider-next',
    prevEl: '#js-hero-dub-slider-prev',
  },
  pagination: {
    el: "#js-hero-dub-slider-pagination",
    clickable: true,
  },
});

//carusel 4
document.querySelectorAll('.js-carusel-4').forEach(function(elem) {
  var carusel4 = new Swiper(elem, {
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      nextEl: elem.nextElementSibling.querySelector('.js-carusel-next'),
      prevEl: elem.nextElementSibling.querySelector('.js-carusel-prev'),
    },
    pagination: {
      el: elem.nextElementSibling.querySelector('.js-carusel-pagination'),
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1365: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
});

//item
document.querySelectorAll('.js-item-pic').forEach(function(elem) {
  if( elem.querySelectorAll('.swiper-slide').length <= 1){
    var itemSlider = new Swiper(elem, {});
  } else{
    var itemSlider = new Swiper(elem, {
      pagination: {
        el: '.js-item-pagination',
        clickable: true,
      },
    });
  }
});








$(document).ready(function(){
  //fancybox
  $('.js-zoom').fancybox({
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'download',
      'close'
    ],
    backFocus : false,
    infobar: true,
      caption : function( instance, item ) {
        return $(this).next('figcaption').html();
      }
  });
  
  $('.js-scroll').on('click', function(){
    $('#js-header').add('#js-burger').removeClass('open');
    
    zenscroll.to(about);
  });
});
