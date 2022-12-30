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
var filterSlider = new Swiper('.js-filter-slider', {
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
//carusel 5
document.querySelectorAll('.js-carusel-5').forEach(function(elem) {
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
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1365: {
        slidesPerView: 5,
        spaceBetween: 16,
      },
    },
  });
});
//carusel 3
document.querySelectorAll('.js-carusel-3').forEach(function(elem) {
  var carusel3 = new Swiper(elem, {
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
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1365: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });
});
//carusel 2
document.querySelectorAll('.js-carusel-2').forEach(function(elem) {
  var carusel3 = new Swiper(elem, {
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      nextEl: elem.nextElementSibling.querySelector('.js-carusel-next'),
      prevEl: elem.nextElementSibling.querySelector('.js-carusel-prev'),
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      1365: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
});
//carusel 1
document.querySelectorAll('.js-carusel-1').forEach(function(elem) {
  var carusel1 = new Swiper(elem, {
    slidesPerView: 2,
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
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
  });
});

//carusel fluid
document.querySelectorAll('.js-carusel-fluid').forEach(function(elem) {
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
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      1365: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
    },
  });
});

//carusel fluid 4
document.querySelectorAll('.js-carusel-fluid-4').forEach(function(elem) {
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
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      1365: {
        slidesPerView: 'auto',
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

//deatail gallery
let galleryCarusel = new Swiper('#js-detail-gallery-carusel', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let gallerySlider = new Swiper('#js-detail-gallery-slider', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryCarusel,
  },
  pagination: {
    el: '#js-detail-gallery-slider-pagination',
    clickable: true,
  },
});



//design sliders
let interiorCarusel = new Swiper('#js-interior-slideshow-carusel', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let interiorSlider = new Swiper('#js-interior-slideshow-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  thumbs: {
    swiper: interiorCarusel,
  },
  pagination: {
    el: '#js-interior-slideshow-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '#js-interior-slideshow-prev',
    nextEl: '#js-interior-slideshow-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
});

let sinkCarusel = new Swiper('#js-sink-slideshow-carusel', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let sinkSlider = new Swiper('#js-sink-slideshow-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  thumbs: {
    swiper: sinkCarusel,
  },
  pagination: {
    el: '#js-sink-slideshow-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '#js-sink-slideshow-prev',
    nextEl: '#js-sink-slideshow-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
});

let toiletCarusel = new Swiper('#js-toilet-slideshow-carusel', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let toiletSlider = new Swiper('#js-toilet-slideshow-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  thumbs: {
    swiper: toiletCarusel,
  },
  pagination: {
    el: '#js-toilet-slideshow-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '#js-toilet-slideshow-prev',
    nextEl: '#js-toilet-slideshow-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
});

let bathCarusel = new Swiper('#js-bath-slideshow-carusel', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let bathSlider = new Swiper('#js-bath-slideshow-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  thumbs: {
    swiper: bathCarusel,
  },
  pagination: {
    el: '#js-bath-slideshow-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '#js-bath-slideshow-prev',
    nextEl: '#js-bath-slideshow-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
});

let showerCarusel = new Swiper('#js-shower-slideshow-carusel', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let showerSlider = new Swiper('#js-shower-slideshow-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  thumbs: {
    swiper: showerCarusel,
  },
  pagination: {
    el: '#js-shower-slideshow-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '#js-shower-slideshow-prev',
    nextEl: '#js-shower-slideshow-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
});

let accessoriesCarusel = new Swiper('#js-accessories-slideshow-carusel', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let accessoriesSlider = new Swiper('#js-accessories-slideshow-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  thumbs: {
    swiper: accessoriesCarusel,
  },
  pagination: {
    el: '#js-accessories-slideshow-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '#js-accessories-slideshow-prev',
    nextEl: '#js-accessories-slideshow-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
});





let galleryCaruselFast = new Swiper('#js-detail-gallery-carusel-fast', {
  spaceBetween: 16,
  slidesPerView: 6,
  watchSlidesProgress: true,
  direction: 'vertical',
});
let gallerySliderFast = new Swiper('#js-detail-gallery-slider-fast', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryCaruselFast,
  },
  pagination: {
    el: '#js-detail-gallery-slider-pagination-fast',
    clickable: true,
  },
});

//scale sliders
var caruselScale = new Swiper('.js-carusel-scale', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1365: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  on: {
    slideChangeTransitionStart: function (e) {
      caruselScaleMain.slideTo(e.activeIndex)
    },
  },
});
var caruselScaleMain = new Swiper('#js-carusel-scale-main', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  navigation: {
    nextEl: '#js-carusel-scale-main-next',
    prevEl: '#js-carusel-scale-main-prev',
  },
  pagination: {
    el: '#js-carusel-scale-main-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1365: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  on: {
    slideChangeTransitionStart: function (e) {
      caruselScale.forEach(
        element => element.slideTo(e.activeIndex)
      );
    },
  },
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
    
//    zenscroll.to(about, 0, -550, console.log('222'));
  });
});
