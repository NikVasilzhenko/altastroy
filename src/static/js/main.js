$(document).ready(function(){
  //sticky header
  var lastScrollTop = 0,
      topHeaderHeight = $('#js-header-top').height(),
      stickyHeader = $('#js-header-sticky'),
      desctopCatalog = $('#js-desctop-catalog');
  
  if($('.js-filter-btn').length > 0){
     var stickyFilterBtn = $('.js-filter-btn');
  }
  
  $(window).scroll(function(event){
     if ($(this).scrollTop() >= topHeaderHeight){
       stickyHeader.addClass('sticky');
       desctopCatalog.addClass('sticky');
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           $('body').removeClass('up');
           stickyHeader.removeClass('up');
           if($('.js-filter-btn').length > 0){
             stickyFilterBtn.removeClass('up');
           }
       } else {
         $('body').addClass('up');
         stickyHeader.addClass('up');
         if($('.js-filter-btn').length > 0){
          stickyFilterBtn.addClass('up');
         }
       }
       lastScrollTop = st;
     } else{
       stickyHeader.removeClass('sticky');
       desctopCatalog.removeClass('sticky');
       stickyHeader.removeClass('up');
       if($('.js-filter-btn').length > 0){
        stickyFilterBtn.removeClass('up');
       }
     }
  });
  
  if($('#js-detail-stick').length > 0){
    var mainSec = $('#js-detail-main'),
        mainSecPos = mainSec.offset().top,
        mainSecHeight = mainSec.height(),
        mainSecBottom = mainSecPos + mainSecHeight;
    $(window).scroll(function(event){
      if ($(this).scrollTop() >= mainSecBottom){
        $('#js-detail-stick').addClass('show');
      } else{
        $('#js-detail-stick').removeClass('show');
      }
    });
  }
  
  $('.js-scroll').click(function(e){
    e.preventDefault();
    let anchor = $(this).attr("href"),
        scroll_el = $(anchor);
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 160}, 250); 
    }
  });
  
  //close mob popup
  $('.js-mob-popup-close').on('click', function(){
    $(this).closest('.js-mob-popup').removeClass('open');
  });
  
  //open mob search popup
  $('.js-open-search-popup').on('click', function(){
    $('#js-search-mob-popup').addClass('open');
    $('#js-search-mob input').focus();
  });

  //open catalog
  $('.js-catalog-btn').on('click', function(){
    $('#js-catalog-btn').add('#js-header-sticky').toggleClass('open');
    $('#js-desctop-catalog').slideToggle(250);
  });
  
  //js-desctop-catalog-item
  $('.js-desctop-catalog-item').on('click', function(e){
    e.preventDefault();
    /*здесь нужен запрос на подгрузку списка подкатегории в блок #js-desctop-catalog-subcategory*/
    $('#js-desctop-catalog-main').hide();
    $('#js-desctop-catalog-sub').show();
    $('#js-desctop-catalog-wrap')[0].scrollTop = 0;
  });
  $('.js-desctop-catalog-back').on('click', function(){
    $('#js-desctop-catalog-main').show();
    $('#js-desctop-catalog-sub').hide();
    $('#js-desctop-catalog-wrap')[0].scrollTop = 0;
  });
  
  //shopcart btn
  $('.js-item-shopcart-btn').on('click', function(){
    $(this).addClass('added');
  });
  
  //fav btn
  $('.js-fav').on('click', function(){
    $(this).toggleClass('active');
  });
  
  //scale btn
  $('.js-scale').on('click', function(){
    $(this).toggleClass('active');
  });
  
  //grid select
  $('#js-grid').on('click', function(){    
    $(this).addClass('active').siblings().removeClass('active');
    $('#js-grid-wrap').removeClass('row-mode');
  })
  $('#js-row').on('click', function(){    
    $(this).addClass('active').siblings().removeClass('active');
    $('#js-grid-wrap').addClass('row-mode');
  })
  
  //seo spoiler
  $('.js-spoiler').on('click', function(){    
    $(this).toggleClass('open').next().slideToggle(250);
  })
  
  //accordion
  $('.js-accordion-btn').on('click', function(){    
    $(this).toggleClass('open').next().slideToggle(250);
  })
  if($(window).width() < 1024){
    $('.js-accordion-mob').on('click', function(){    
      $(this).toggleClass('open').next().slideToggle(250);
    })
  }
  
  //accordion
  $('.js-brends-more').on('click', function(){    
    $(this).toggleClass('open');
  })
  
  //hint
  $('.js-hint').on('click', function(){  
    if(!($(this).hasClass('active'))){
      $(this).addClass('active'); 
      
      var thisPosX = $(this).offset().left,
          thisPosY = $(this).offset().top,
          halfWinWidth = $(window).width() / 2,
          modalTitle = $(this).attr('data-title'),
          modalTxt = $(this).attr('data-txt'),
          modalLink = $(this).attr('data-link');

      var newModalWindow = '<div class="hint-modal"><button class="btn hint-modal__close"></button><h3 class="hint-modal__title">' + modalTitle + '</h3><p class="hint-modal__txt">' + modalTxt + '</p><a href="' + modalLink + ' " class="hint-modal__link">Подробнее <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 8H3.5"  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 4.5L12.5 8L9 11.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';

      $('body').append(newModalWindow);

      $('.hint-modal').css({
        'top' : thisPosY + 32 + 'px',
        'left' : thisPosX + 'px'
      });

      $('.hint-modal__close').on('click', function(){
        $(this).closest('.hint-modal').remove();
        $('.js-hint.active').removeClass('active');
      });

      console.log(thisPosX, halfWinWidth);
      if(thisPosX > halfWinWidth){
        $('.hint-modal').addClass('right-pos');        
      }
    } else{
      $('.hint-modal').remove();
      $(this).removeClass('active');
    }
  })
  
  //js-onlynumb
  $('.js-onlynumb').on('keypress', function(evt){
    if (evt.which < 48 || evt.which > 57){
      evt.preventDefault();
    }
  });
  
  //mob filter
  $('.js-filter-btn').on('click', function(){  
    $('#js-folter').toggleClass('open');
  })
  
  //brend nav more
  $('.js-brend-nav-more').on('click', function(){
    $(this).remove();
  });
  
  //delete cheeps
  $('.js-cheeps-delete').on('click', function(){
    $(this).closest('.swiper-slide').remove();
    filterSlider.update();
  });
  
  //about more
  $('.js-about-more').on('click', function(){
    $(this).remove();
  });
  
  //options
  $('.js-options-row').each(function(){
    var listLength = $(this).find('.js-option').length,
        minLength = +($(this).attr('data-minlength')),
        responsCoef;
    if($(window).width() < 768){
      responsCoef = 2;
    } else{
      responsCoef = 1;
    }
    if(listLength < minLength){
      $(this).find('.js-options-more').remove();
    } else{
      $(this).find('.js-options-more').html('+<span>&nbsp;eщё&nbsp;</span>' + (listLength - minLength + responsCoef));
    }
  });
  $('.js-options-more').on('click', function(){
    $(this).closest('.js-options-row').toggleClass('show');
  });
  
  //open select popap  
  $('.js-openselect-popap').on('click', function(){  
    $('#js-select-popup').toggleClass('open');
  })
  
  //open buy one click popap 
  $('.js-1-click-btn').on('click', function(){  
    $('#js-1-click').fadeToggle(250);
  })
  
  //eye button
  $('.js-eye-btn').on('click', function(){
    if($(this).hasClass('hide')){
      $(this).removeClass('hide').siblings('input').attr('type', 'password');
    } else{
      $(this).addClass('hide').siblings('input').attr('type', 'text');
    }
  });
  
  //popup
  $('.js-close-popup').on('click', function(){
    $(this).closest('.js-popup').fadeOut(300);
  });
  $('.js-sign-in-btn').on('click', function(e){
    e.preventDefault();
    $('.js-popup').fadeOut(300);
    $('#js-sign-in').fadeIn(300);
  });
  $('.js-sign-up-btn').on('click', function(e){
    e.preventDefault();
    $('.js-popup').fadeOut(300);
    $('#js-sign-up').fadeIn(300);
  });
  $('.js-forgot-pass-btn').on('click', function(e){
    e.preventDefault();
    $('.js-popup').fadeOut(300);
    $('#js-forgot-pass').fadeIn(300);
  });
  $('.js-search-loc-btn').on('click', function(e){
    e.preventDefault();
    $('.js-popup').fadeOut(300);
    $('#js-select-loc').fadeIn(300);
  });
  
  //fast view popup
  $('.js-fast-view').on('click', function(){
    $('#js-fast-view-popup').fadeIn(300);
  });
  
  //input file
  $('#js-file').on('change', function(e){
    var text = $('#js-file-name');
    if($(this)[0].files[0].name){
      text.text($(this)[0].files[0].name);
      $(this).closest('.file').addClass('value');
    } else{
      text.text('Прикрепить фото и документы');
      $(this).closest('.file').removeClass('value');
    }
  });
  $('#js-file-del').on('click', function(e){
    var text = $('#js-file-name');
    text.text('Прикрепить фото и документы');
    $(this).closest('.file').removeClass('value');
  });
  
  //contacts form
  $('.js-show-form').on('click', function(){
    $('#js-contact-form').addClass('open');
  });
  
  //select address on the map
  $('.js-addres-select-btn').on('click', function(){
    $('#js-addres-select').addClass('open');
  });
  
  //accordion switcher
  $('.js-switcher-accordion-trigger').on('click', function(){
	if ($(this).is(':checked')){
      $(this).closest('.js-switcher-accordion-header').next().slideDown(300);
	} else {
      $(this).closest('.js-switcher-accordion-header').next().slideUp(300);
	}
  });
  
  //tab
  $('.js-tab-item').not(':first-child').hide();
  $('.js-tab').click(function() {
    if(!$(this).hasClass('active')){
      let tabsContainer = $(this).closest('.js-tab-container'),
          tabs = tabsContainer.find('.js-tab'),
          tabsItems = tabsContainer.find('.js-tab-item');                
      tabs.removeClass('active').eq($(this).index()).addClass('active');

      tabsItems.hide().eq($(this).index()).fadeIn()
    }
  }).eq(0).addClass('active');
  
  //profile nav open
  $('.js-profile-nav-btn').on('click', function(){
	$('#js-profile-nav').addClass('open');
  });
  
  //add new address
  $('.js-show-address-on-map').on('click', function(){
	$('.my-addresses__hide.open').removeClass('open');
	$('#js-address-map').addClass('open');
  });
  $('.js-show-address-on-fields').on('click', function(){
	$('.my-addresses__hide.open').removeClass('open');
	$('#js-address-fields').addClass('open');
  });
});


//input number
function catalogItemCounter(field){
  let allItems = document.querySelectorAll(field);
  for(i = 0; i < allItems.length; i++){
    let inputNum = allItems[i].querySelector('.js-number-input'),
        inputMin = inputNum.getAttribute('min'),
        event = new Event('change');
    allItems[i].querySelector('.js-number-minus').addEventListener('click', function(){
      if(inputNum.value <= inputMin){
        inputNum.value = inputMin;
        inputNum.parentElement.previousElementSibling.classList.remove('added');
      } else{
        inputNum.value = Number(inputNum.value) - 1;
      }
      inputNum.dispatchEvent(event);
    });
    allItems[i].querySelector('.js-number-plus').addEventListener('click', function(){
      inputNum.value = Number(inputNum.value) + 1;
      inputNum.dispatchEvent(event);
    });
  }
}
catalogItemCounter('.js-number');

//styled selects
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("js-styled-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  if(x[i].hasAttribute('data-placeholder')){
    a.innerHTML = '<span class="select-placeholder">' + x[i].dataset.placeholder + '</span>';
  } else{
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  }  
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
	c = document.createElement("DIV");
	c.innerHTML = selElmnt.options[j].innerHTML;
	c.addEventListener("click", function(e) {
		var y, i, k, s, h;
		s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		h = this.parentNode.previousSibling;
		for (i = 0; i < s.length; i++) {
		  if (s.options[i].innerHTML == this.innerHTML) {
			s.selectedIndex = i;
			h.innerHTML = this.innerHTML;
			y = this.parentNode.getElementsByClassName("same-as-selected");
			for (k = 0; k < y.length; k++) {
			  y[k].removeAttribute("class");
			}
			this.setAttribute("class", "same-as-selected");
			break;
		  }
		}
		h.click();
	});
	b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
	e.stopPropagation();
	closeAllSelect(this);
	this.nextSibling.classList.toggle("select-hide");
	this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
	if (elmnt == y[i]) {
	  arrNo.push(i)
	} else {
	  y[i].classList.remove("select-arrow-active");
	}
  }
  for (i = 0; i < x.length; i++) {
	if (arrNo.indexOf(i)) {
	  x[i].classList.add("select-hide");
	}
  }
}
document.addEventListener("click", closeAllSelect);

//notnum input block



