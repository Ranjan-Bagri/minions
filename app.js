//©Ranjan 2017
$(document).ready(function() {
  $('.stuart').click(function() {
    $('.right').hide();
    $('.frame').css({
      width: '110px',
    });
    $('.left').css({
      left: '50%',
      transform: 'scale(1.2,1.2)',
      'z-index': '80',
    });
  });
  $('.kevin').click(function() {
    $('.right').show();
    $('.frame').css({
      width: '170px',
    });
    $('.left').css({
      left: '32%',
      transform: 'scale(1,1)',
      'z-index': '80',
    });
  });
});
