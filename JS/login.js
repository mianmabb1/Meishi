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
  $("#lp_gozc").click(function(){
    if($(this).attr("opened")==0){
      $("#lp_zc").slideDown();
      $(this).html("已有账号？马上登陆 ∧");
      $(this).attr("opened","1");
      $("#lp_login").slideUp();
      $(".lp_title").html('<span class="lp_t_left"></span>登录美食杰<span class= "lp_t_right"></span>');
    }else{
      $("#lp_zc").slideUp();
      $(this).html("还没有账号？免费注册 ∨");
      $(this).attr("opened", "0");
      $("#lp_login").slideDown();
      $(".lp_title").html('<span class="lp_t_left"></span>注册美食杰<span class= "lp_t_right"></span>');
    }
  })

})