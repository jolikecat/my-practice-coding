$(function(){
  // ハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('.mask').fadeToggle(500);
  });
  $('.nav__link').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('.mask').fadeToggle(500);
  });
  // ヘッダーの色変化
  var imgHeight = $('.fv__img').outerHeight();
  var bgHeight = $('.fv').outerHeight();
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -30) {
      $('.logo__svg').removeClass('black');
    }else {
      $('.logo__svg').addClass('black');
    }
    if ($(window).scrollTop() < bgHeight -30) {
      $('.burger-btn').removeClass('black');
    }else {
      $('.burger-btn').addClass('black');
    }
 });
//  スムーススクロール
 $('a[href^="#"]').on('click',function() {
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position -60}, 500, 'swing');
  return false;
   });
});