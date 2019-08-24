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
      $(".lp_title").html('<span class="lp_t_left"></span>注册美食杰<span class= "lp_t_right"></span>');
    }else{
      $("#lp_zc").slideUp();
      $(this).html("还没有账号？免费注册 ∨");
      $(this).attr("opened", "0");
      $("#lp_login").slideDown();
      $(".lp_title").html('<span class="lp_t_left"></span>登录美食杰<span class= "lp_t_right"></span>');
    }
  })
  $("#zc_phone").click(function(){
    var $cur=$(this);
    $(".lp_zc_w").animate({"margin-left":"0px"},400,function(){
      $cur.siblings().removeClass("current");
      $cur.addClass("current");
    })
  })
  $("#zc_email").click(function(){
    var $cur=$(this);
    $(".lp_zc_w").animate({"margin-left":"-320px"},400,function(){
      $cur.siblings().removeClass("current");
      $cur.addClass("current");
    })
  })
  // 手机号验证
  function checkPhonenum(string) {
    var reg = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
    return reg.test(string);
  }
  // 密码验证
  function checkPw(string) {
    var Mcolor, Wcolor, Scolor, Color_Html;
    var m = 0;
    var Modes = 0;
    if (string.length <= 4) { m = 1; }
    if (string.length <= 0) { m = 0; }

    for (i = 0; i < string.length; i++) {
      var charType = 0;
      var t = string.charCodeAt(i);
      if (t >= 48 && t <= 57) { charType = 1; }
      else if (t >= 65 && t <= 90) { charType = 2; }
      else if (t >= 97 && t <= 122) { charType = 4; }
      else { charType = 4; }
      Modes |= charType;
    }
    for (i = 0; i < 4; i++) {
      if (Modes & 1) { m++; }
      Modes >>>= 1;
    }
    return (m);
  }
  // 邮箱验证
  function checkEmail(string) {
    var reg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;;
    return reg.test(string);
  }


  $(".pn_check").blur(function(){
    var $txt=$(this);
    var $val = $txt.val().trim();
    var $p=$txt.next()
    $txt.next().show();
    if(checkPhonenum($val)){
      $p.removeClass().addClass("login_tip true");
      $p.html("手机号码格式正确");
      $("#yzm_btn").removeClass("sended");
    }else{
      $p.removeClass().addClass("login_tip false");
      $p.html("请输入正确的手机号");
      $("#yzm_btn").addClass("sended");
    }
  })
  $(".email_check").blur(function(){
    var $txt=$(this);
    var $val = $txt.val().trim();
    var $p=$txt.next()
    $txt.next().show();
    if (checkEmail($val)){
      $p.removeClass().addClass("login_tip true");
      $p.html("邮箱格式正确");
      $("#yzm_btn").removeClass("sended");
    }else{
      $p.removeClass().addClass("login_tip false");
      $p.html("请输入正确的邮箱");
      $("#yzm_btn").addClass("sended");
    }
  })
  $(".password").blur(function(){
    var $txt=$(this);
    var $val = $txt.val().trim();
    var $p=$txt.next()
    $txt.next().show();
    if (checkPw($val)){
      $p.removeClass().addClass("login_tip true");
      $p.html("密码格式正确");
    }else{
      $p.removeClass().addClass("login_tip false");
      $p.html("密码的长度应为6-16位");
    }
  })

})