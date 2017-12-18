$(document).ready(function() { 
  $('.modal-btn').click(function (e) {
    e.preventDefault;

    $('#' + $(this).data('modal')).show('400');
    $('.overlay').show('400');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    }, 400);
    $('body').addClass('overl-h');
  });
  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide('400');
    $('.overlay').hide('400');
    $('.modal').animate({
      opacity: 0,
    }, 400);
  });
  
  if($(document).width() < 736) {
    $('.check_list_info-carousel').addClass('owl-carousel');
    $('.check_list_info-carousel').owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      autoHeight: true,
      navText: false,
      responsive: {
        0: {
          items: 1,
          nav: true
        }
      }
    });
    
  }else{
    $('.check_list_info-carousel').removeClass('owl-carousel');
    
  }
  
});