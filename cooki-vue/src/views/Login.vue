<template>
  <div>
    <top></top>
    <div class="main_w">
      <div class="loginpage">
        <h3 class="lp_title">
          <span class="lp_t_left"></span>
          登录美食杰
          <span class="lp_t_right"></span>
        </h3>
        <!-- 第三方登录方式 -->
        <div class="lp_fs">
          <div class="lp_fs1">
            <a href="javascript:;" class="a1">
              <span class="icon"></span>
            </a>
            <a href="javascript:;" class="a2">
              <span class="icon"></span>
            </a>
            <a href="javascript:;" class="a3">
              <span class="icon"></span>
            </a>
          </div>
          <a href="javascrpt:;" class="golink" id="more_fs" opened="0">更多第三方登录方式 ∨</a>
          <div class="lp_morefs">
            <a href="javascrpt:;" class="a1">人人网账号登录</a>
            <a href="javascrpt:;" class="a2">百度账号登录</a>
            <a href="javascrpt:;" class="a3">开心网账号登录</a>
          </div>
        </div>
        <div class="lp_or"></div>
        <!-- 普通登录 -->
        <div class="lp_login" id="lp_login">
          <form action="post">
            <input type="text" class="text" placeholder="请输入手机号/邮箱/昵称" />
            <div>
              <input type="password" class="password" placeholder="请输入密码" />
            </div>
            <label>
              <input type="checkbox" class="checkbox" /> 下次自动登录
            </label>
            <a href="javascript:;" class="forgetPwd">忘记密码?</a>
            <div>
              <input type="submit" class="submit" value="登录" />
            </div>
          </form>
        </div>
        <!-- 注册表单 -->
        <div class="lp_zc" id="lp_zc" style="display: none">
          <div class="lp_tab">
            <a href="javascrpt:;" class="current" id="zc_phone">手机注册</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href="javascrpt:;" id="zc_email">邮箱注册</a>
          </div>
          <div class="lp_zc_con clearfix">
            <div class="lp_zc_w">
              <div class="zc_item">
                <form action="post">
                  <input type="text" class="text pn_check" placeholder="请输入手机号" passcheck="0" />
                  <p class="login_tip tip" style="display:none;"></p>
                  <input
                    type="text"
                    class="text"
                    placeholder="请输入验证码"
                    passcheck="0"
                    style="width:150px"
                  />
                  <a href="javascript:;" class="get_yzm sended" id="yzm_btn">免费获取验证码</a>
                  <input type="password" class="password" placeholder="请输入密码" />
                  <p class="login_tip" style="display:none;"></p>
                  <label>
                    <input type="checkbox" /> 我已阅读并同意
                    <a href="javascript:;">美食杰用户使用协议</a>
                  </label>
                  <div>
                    <input type="submit" class="submit" value="注册" />
                  </div>
                </form>
              </div>
              <div class="zc_item">
                <form action="post">
                  <input type="text" class="text email_check" placeholder="请输入邮箱" passcheck="0" />
                  <p class="login_tip false" style="display:none;"></p>
                  <input type="password" class="password" placeholder="请输入密码" />
                  <p class="login_tip" style="display:none;"></p>
                  <label>
                    <input type="checkbox" /> 我已阅读并同意
                    <a href="javascript:;">美食杰用户使用协议</a>
                  </label>
                  <div>
                    <input type="submit" class="submit" value="注册" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:;" class="golink" id="lp_gozc" opened="0">还没有账号? 立即注册 ∨</a>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    $("#more_fs").click(function() {
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
    $("#lp_gozc").click(function() {
      if ($(this).attr("opened") == 0) {
        $("#lp_zc").slideDown();
        $(this).html("已有账号？马上登陆 ∧");
        $(this).attr("opened", "1");
        $("#lp_login").slideUp();
        $(".lp_title").html(
          '<span class="lp_t_left"></span>注册美食杰<span class= "lp_t_right"></span>'
        );
      } else {
        $("#lp_zc").slideUp();
        $(this).html("还没有账号？免费注册 ∨");
        $(this).attr("opened", "0");
        $("#lp_login").slideDown();
        $(".lp_title").html(
          '<span class="lp_t_left"></span>登录美食杰<span class= "lp_t_right"></span>'
        );
      }
    });
    $("#zc_phone").click(function() {
      var $cur = $(this);
      $(".lp_zc_w").animate({ "margin-left": "0px" }, 400, function() {
        $cur.siblings().removeClass("current");
        $cur.addClass("current");
      });
    });
    $("#zc_email").click(function() {
      var $cur = $(this);
      $(".lp_zc_w").animate({ "margin-left": "-320px" }, 400, function() {
        $cur.siblings().removeClass("current");
        $cur.addClass("current");
      });
    });
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
      if (string.length <= 4) {
        m = 1;
      }
      if (string.length <= 0) {
        m = 0;
      }

      for (i = 0; i < string.length; i++) {
        var charType = 0;
        var t = string.charCodeAt(i);
        if (t >= 48 && t <= 57) {
          charType = 1;
        } else if (t >= 65 && t <= 90) {
          charType = 2;
        } else if (t >= 97 && t <= 122) {
          charType = 4;
        } else {
          charType = 4;
        }
        Modes |= charType;
      }
      for (i = 0; i < 4; i++) {
        if (Modes & 1) {
          m++;
        }
        Modes >>>= 1;
      }
      return m;
    }
    // 邮箱验证
    function checkEmail(string) {
      var reg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      return reg.test(string);
    }

    $(".pn_check").blur(function() {
      var $txt = $(this);
      var $val = $txt.val().trim();
      var $p = $txt.next();
      $txt.next().show();
      if (checkPhonenum($val)) {
        $p.removeClass().addClass("login_tip true");
        $p.html("手机号码格式正确");
        $("#yzm_btn").removeClass("sended");
      } else {
        $p.removeClass().addClass("login_tip false");
        $p.html("请输入正确的手机号");
        $("#yzm_btn").addClass("sended");
      }
    });
    $(".email_check").blur(function() {
      var $txt = $(this);
      var $val = $txt.val().trim();
      var $p = $txt.next();
      $txt.next().show();
      if (checkEmail($val)) {
        $p.removeClass().addClass("login_tip true");
        $p.html("邮箱格式正确");
        $("#yzm_btn").removeClass("sended");
      } else {
        $p.removeClass().addClass("login_tip false");
        $p.html("请输入正确的邮箱");
        $("#yzm_btn").addClass("sended");
      }
    });
    $(".password").blur(function() {
      var $txt = $(this);
      var $val = $txt.val().trim();
      var $p = $txt.next();
      $txt.next().show();
      if (checkPw($val)) {
        $p.removeClass().addClass("login_tip true");
        $p.html("密码格式正确");
      } else {
        $p.removeClass().addClass("login_tip false");
        $p.html("密码的长度应为6-16位");
      }
    });
  }
};
</script>
<style scoped>
.loginpage {
  width: 1000px;
  margin: 40px auto 0px;
  background: #fff;
  padding: 1px 0px 60px;
}
.lp_title {
  height: 43px;
  line-height: 43px;
  color: #333;
  font-size: 22px;
  text-align: center;
  margin: 40px auto;
}
.lp_title .lp_t_left {
  display: inline-block;
  vertical-align: top;
  width: 91px;
  height: 9px;
  margin-top: 17px;
  background: url(http://127.0.1:5050/images/login/nl_title_left.png) center
    no-repeat;
  margin-right: 20px;
}
.lp_title .lp_t_right {
  display: inline-block;
  vertical-align: top;
  width: 91px;
  height: 9px;
  margin-top: 17px;
  background: url(http://127.0.1:5050/images/login/nl_title_right.png) center
    no-repeat;
  margin-left: 20px;
}
.lp_fs {
  text-align: center;
}
.lp_fs1 a {
  display: inline-block;
  vertical-align: top;
  width: 108px;
  line-height: 44px;
  font-size: 15px;
  margin: 0 25px;
}
.lp_fs1 a span {
  display: block;
  height: 108px;
  width: 108px;
  background: url(http://127.0.1:5050/images/login/nl_dsficon1.png) no-repeat;
}
.lp_fs1 .a1 span {
  background-position: 0px 0px;
}
.lp_fs1 .a2 span {
  background-position: -108px 0px;
}
.lp_fs1 .a3 span {
  background-position: -216px 0px;
}
.lp_fs1 .a1:hover span {
  background-position: 0px -108px;
}
.lp_fs1 .a2:hover span {
  background-position: -108px -108px;
}
.lp_fs1 .a3:hover span {
  background-position: -216px -108px;
}
.golink {
  color: #333;
  font-size: 15px;
  display: block;
  height: 66px;
  line-height: 66px;
  text-align: center;
  margin-top: 20px;
}
.golink:hover {
  color: #ec5541;
  text-decoration: underline;
}
.lp_morefs {
  height: 100px;
  width: 60%;
  border: 1px solid #eee;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 4px;
  display: none;
}
.lp_morefs a {
  display: inline-block;
  vertical-align: top;
  height: 16px;
  line-height: 16px;
  margin-top: 42px;
  padding: 0px 20px;
  color: #333;
  background: url(http://127.0.1:5050/images/login/nl_moredsf_icons.png)
    no-repeat;
}
.lp_morefs a:hover {
  color: #ec5541;
  text-decoration: underline;
}
.lp_morefs .a2 {
  background-position: 0px -16px;
}
.lp_morefs .a3 {
  background-position: 0px -32px;
}
.lp_or {
  height: 69px;
  width: 100%;
  background: url(http://127.0.1:5050/images/login/nl_or.png) center no-repeat;
}
/* 登录表单 */
.lp_login {
  width: 320px;
  margin: 24px auto 0;
  overflow: hidden;
  text-align: left;
}
.lp_login .text,
.lp_login .password {
  width: 296px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  padding: 11px;
  margin-bottom: 14px;
  font-size: 14px;
}
.lp_login label {
  display: inline-block;
  vertical-align: top;
  color: #666;
  font-size: 13px;
}
.lp_login .checkbox {
  height: 22px;
}
.lp_login .forgetPwd {
  float: right;
  color: #999;
  font-size: 13px;
  line-height: 22px;
}
.lp_login .forgetPwd:hover {
  color: #ec5541;
  text-decoration: underline;
}
.lp_login div {
  text-align: center;
}
.lp_login .submit {
  width: 78px;
  height: 42px;
  padding: 0 24px;
  display: inline-block;
  border: 1px solid #db432e;
  background: #ec5541;
  color: #fff;
  font-size: 15px;
  border-radius: 4px;
  line-height: 40px;
  cursor: pointer;
}
.lp_login .submit:hover {
  background: #db432e;
}

/* 注册表单 */
.lp_zc {
  width: 60%;
  text-align: center;
  background: #f5f5f5;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 4px;
  padding-bottom: 20px;
}
.lp_zc .lp_tab {
  height: 32px;
  line-height: 32px;
  margin: 32px auto 0px;
  color: #aaa;
  text-align: center;
  font-size: 13px;
}
.lp_zc .lp_tab a {
  font-size: 18px;
  color: #999;
}
.lp_zc .lp_tab a:hover {
  color: #ec5541;
  text-decoration: underline;
}
.lp_zc .lp_tab a.current {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}
.lp_zc_con {
  width: 320px;
  margin: 0 auto;
  overflow: hidden;
}
.lp_zc_w {
  width: 640px;
  margin-left: 0px;
}
.zc_item {
  width: 320px;
  margin: 24px auto 0px;
  float: left;
  text-align: left;
  overflow: hidden;
}
.zc_item .text,
.zc_item .password {
  width: 296px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  padding: 11px;
  margin-bottom: 14px;
  font-size: 14px;
}
.zc_item .text2 {
  width: 150px;
}
.login_tip {
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  margin-top: -10px;
  margin-bottom: 10px;
  padding-left: 20px;
  background: url(http://127.0.1:5050/images/login/nl_tipsicons.png) no-repeat;
}
.login_tip.false {
  background-position: 0px -48px;
  color: #ec5541;
}
.login_tip.true {
  background-position: 0px -24px;
  color: #8fc31f;
}
.login_tip.tip {
  background-position: 0px 0px;
  color: #7ecef4;
}
.get_yzm {
  width: 134px;
  float: right;
  background: #8fc31f;
  border: 1px solid #75ab49;
  height: 43px;
  line-height: 43px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  font-size: 15px;
}
.get_yzm:hover {
  background: #75ab49;
}
.get_yzm.sended {
  background: #ddd;
  border: 1px solid #ccc;
  color: #999;
}
.zc_item label {
  color: #666;
  line-height: 22px;
  font-size: 13px;
}
.zc_item label input {
  margin-top: -2px;
  position: relative;
}
.zc_item label a {
  color: #ec5541;
}
.zc_item label a:hover {
  text-decoration: underline;
}
.zc_item div {
  text-align: center;
  margin-top: 14px;
}
.zc_item .submit {
  width: 78px;
  height: 42px;
  padding: 0 24px;
  display: inline-block;
  border: 1px solid #db432e;
  background: #ec5541;
  color: #fff;
  font-size: 15px;
  border-radius: 4px;
  line-height: 40px;
  cursor: pointer;
}
.zc_item .submit:hover {
  background: #db432e;
}
</style>