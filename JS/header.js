$(function(){
  $(".nav_main li").hover(function () {
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
  }, function () {
    $(this).removeClass("on");
  });
})