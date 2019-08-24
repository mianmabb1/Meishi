$(function(){
  $(".nav_main li").hover(function () {
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
  }, function () {
    $(this).removeClass("on");
  });
  // 页面滚动事件
  $(window).scroll(function(){
    if($(window).scrollTop()>300){
      $("#back_to_top").fadeIn();
    }else{
      $("#back_to_top").fadeOut()
    };
    $("#back_to_top").click(function(){
      window.scrollTo(0,0); //回到页面顶部
    })
  })
})