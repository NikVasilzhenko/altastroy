$(document).ready(function(){
  //sticky header
  var lastScrollTop = 0,
      topHeaderHeight = $('#js-header-top').height(),
      stickyHeader = $('#js-header-sticky'),
      desctopCatalog = $('#js-desctop-catalog');
  
  $(window).scroll(function(event){
     if ($(this).scrollTop() >= topHeaderHeight){
       stickyHeader.addClass('sticky');
       desctopCatalog.addClass('sticky');
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           stickyHeader.removeClass('up');
       } else {
          stickyHeader.addClass('up');
       }
       lastScrollTop = st;
     } else{
       stickyHeader.removeClass('sticky');
       desctopCatalog.removeClass('sticky');
       stickyHeader.removeClass('up');
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
        ////
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


