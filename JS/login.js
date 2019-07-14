$(function(){
  /*
  $(".golink").click(function(){
    if ($(".this").text() =="更多第三方登录方式 ∨"){
      $(".golink").text("收起 ∧")
      $(".lp_morefs").css("display","block")
    }else{
      $(".golink").text("更多第三方登录方式 ∨")
      $(".lp_morefs").css("display", "none")
    }
  })*/
  $("#more_fs").click(function () {
    if ($(this).attr("opened") == 0) {
      $(".lp_morefs").slideDown();
      $(this).html("收起 ∧");
      $(this).attr("opened", "1");
    } else {
      $(".lp_morefs").slideUp();
      $(this).html("更多第三方登录方式 ∨");
      $(this).attr("opened", "0");
    }


  });

})