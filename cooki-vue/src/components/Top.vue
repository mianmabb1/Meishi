<template>
  <div>
    <div class="header">
      <div class="header_m">
        <div>
          <router-link to="/" class="logo_top"></router-link>
        </div>
        <div class="top_search">
          <input class="text" type="text" placeholder="请输入菜谱/食材/菜单/作者" />
          <input class="search" type="submit" value="搜 索" />
        </div>
        <div class="login_item">
          <router-link to="/login" class="link">登录</router-link>
          <!-- <a class="link" href="/login">登录</a> -->
          <a class="link" href="javascript:;">注册</a>
          <a class="link wb_login" href="javascript:;">微博登录</a>
          <a class="link qq_login" href="javascript:;">QQ登录</a>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul class="nav_main">
        <li class="current">
          <router-link to="/" class="link">
            <strong>首页</strong>
          </router-link>
        </li>
        <li class="extend">
          <router-link class="link" to="/kitchen">
            <strong>菜谱大全</strong>
          </router-link>
          <div class="cook">
            <div class="cookb extend_cpdq">
              <div class="cook_item">
                <dl>
                  <dt>
                    <router-link to="/kitchen">家常菜谱</router-link>
                  </dt>
                  <dd>
                    <router-link to="/kitchen">家常菜</router-link>
                  </dd>
                  <dd>
                    <a href="javascript:;">凉菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">素食</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">晚餐</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">热菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">海鲜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">孕妇</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">早餐</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">午餐</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">甜品点心</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">汤粥</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">宝宝食谱-婴儿食谱</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">糕点主食</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">微波炉</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">中华菜系</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">川菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">湘菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">鲁菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">东北菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">浙菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">湖北菜</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">各地小吃</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">广东小吃</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">北京小吃</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">陕西小吃</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">四川小吃</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">烘焙</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">蛋糕面包</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">甜品点心</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">饼干配方</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">外国菜谱</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">韩国料理</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">日本料理</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">法国菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">意大利餐</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">厨房百科</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">摆盘围边</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">烹饪技巧</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">生活妙招</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">美食专题</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">食材百科</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">蔬菜</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">水果</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">谷物</a>
                  </dd>
                </dl>
              </div>
              <div class="bgitem"></div>
            </div>
          </div>
        </li>
        <li class="extend">
          <a class="link" href="javascript:;">
            <strong>饮食健康</strong>
          </a>
          <div class="cook">
            <div class="cookb extend_ysjk">
              <div class="cook_item">
                <dl>
                  <dt>
                    <a href="javascript:;">饮食小常识</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">美容瘦身</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">食品安全</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">养生妙方</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">饮食禁忌</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">中医保健</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">母婴健康饮食</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">饮食新闻</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item">
                <dl>
                  <dt>
                    <a href="javascript:;">功能性调理</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">清热去火</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">减肥</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">乌发</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">清热解毒</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">消化不良</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">健脾开胃</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">增肥</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">脏腑调理</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">感冒</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">补血</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">腹泻</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">活血化瘀</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">人群膳食</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">孕妇</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">老人</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">青少年</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">哺乳期</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">幼儿</a>
                  </dd>
                </dl>
              </div>
              <div class="cook_item cook_sitem">
                <dl>
                  <dt>
                    <a href="javascript:;">疾病调理</a>
                  </dt>
                  <dd>
                    <a href="javascript:;">糖尿病</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">高血压</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">痛风</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">胃炎</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">更年期</a>
                  </dd>
                  <dd>
                    <a href="javascript:;">甲状腺</a>
                  </dd>
                </dl>
              </div>
              <div class="bgitem"></div>
            </div>
          </div>
        </li>
        <li>
          <a class="link" href="javascript:;">
            <strong>美食菜单</strong>
          </a>
        </li>
        <li>
          <a class="link" href="javascript:;">
            <strong>家居馆</strong>
          </a>
        </li>
        <li>
          <a class="link" href="javascript:;">
            <strong>
              美食达人
              <img
                class="crown"
                src="http://127.0.0.1:5050/images/header/20160909164810_443.png"
              />
            </strong>
          </a>
        </li>
        <li>
          <a class="link" href="javascript:;">
            <strong>菜谱视频</strong>
          </a>
        </li>
        <li>
          <a class="link" href="javascript:;">
            <strong>产品下载</strong>
          </a>
        </li>
      </ul>
    </div>
    <div class="back_to_top" id="back_to_top">
      <a href="javascript:;" class="toTop"></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  method: {
    // LoadMore() {
    //   $(".nav_main li").hover(
    //     function() {
    //       $(this)
    //         .siblings()
    //         .removeClass("on");
    //       $(this).addClass("on");
    //     },
    //     function() {
    //       $(this).removeClass("on");
    //     }
    //   );
    //   // 页面滚动事件
    //   $(window).scroll(function() {
    //     if ($(window).scrollTop() > 300) {
    //       $("#back_to_top").fadeIn();
    //     } else {
    //       $("#back_to_top").fadeOut();
    //     }
    //     $("#back_to_top").click(function() {
    //       window.scrollTo(0, 0); //回到页面顶部
    //     });
    //   });
    // }
  },
  mounted() {
    $(".nav_main li").hover(
      function() {
        $(this)
          .siblings()
          .removeClass("on");
        $(this).addClass("on");
      },
      function() {
        $(this).removeClass("on");
      }
    );
    // 页面滚动事件
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $("#back_to_top").fadeIn();
      } else {
        $("#back_to_top").fadeOut();
      }
      $("#back_to_top").click(function() {
        window.scrollTo(0, 0); //回到页面顶部
      });
    });
  }
};
</script>
<style scoped>
.header{
  width: 100%;height: 129px;
  background: #c90000 url(http://127.0.0.1:5050/images/header/header_bg.png) center repeat-y;
  position: relative;
}
.header_m{
  margin: 0px auto;
  height: 129px;width: 990px;
  position: relative;
}
/* logo */
.header .logo_top{
  display: block; /* 设置为行内块元素 */
  width: 184px;height: 129px;
  background: url(http://127.0.0.1:5050/images/header/meow.png) no-repeat -12px 25px;
  background-size: 300%;
  float: left;
}
/* 搜索框 */
.top_search{
  position: relative;
  float: left;
  width: 430px;height: 129px;
  margin-left: 58px;
}
.top_search input.text{
  width: 326px;height: 16px;
  padding: 8px;
  position: absolute;
  top:46px;
  line-height:16px;
  color:#999;
  border:0;
  border:2px solid #fff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 12px;
}
.top_search input.search{
  width: 80px;height: 36px;
  background: #a8000f;
  position: absolute;
  top: 46px;
  right: 7px;
  border: 2px solid #fff;
  border-left:none;
  color:#fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 12px;
}
.top_search input.search:hover{
  background: #8f030f;
}
/* 小图标 */
.login_item{
  height: 129px;
  float: right;
}
.login_item a.link{
  display: block;
  height: 28px;
  line-height: 28px;
  float:right;
  color:#fff;
  font-size: 12px;
  padding:0 10px;
  margin-top: 50px;
  text-decoration: none;
  border-radius: 4px;
}
/* 共同设置hover */
.login_item a.link:hover{
  background-color: rgba(0, 0, 0, .3);
}
/* qq登录图标 */
.login_item a.qq_login{
  background: url(http://127.0.0.1:5050/images/header/topdsflogin_icon.gif) no-repeat 3px 0px;
  padding-left:34px;
}
/* 微博登录图标 */
.login_item a.wb_login{
  background: url(http://127.0.0.1:5050/images/header/topdsflogin_icon.gif) no-repeat 3px -27px;
  padding-left:34px;
}
/* 导航栏 */
.nav{
  height: 76px;width: 100%;
  position: relative;
  background: #fff;
  box-shadow: 10px 0px 10px rgba(0,0,0,0.3);
}
.nav ul li{
  display: inline-block;
  height: 76px;
  vertical-align: top;
}
.nav ul.nav_main{
  height: 76px; width: 990px;
  margin: 0 auto;
}
.nav ul li a.link{
  float:left;
  /* display: flex; */
}
.nav ul li a.link{
  display:inline-block;
  height: 76px;
  line-height: 76px;
  font-size: 18px;
  color: #444;
  vertical-align: top;
  font-family: Microsoft Yahei,黑体;
  position: relative;
  padding: 0 24px;
}
.nav ul li a.link:hover{
  cursor:pointer;
  background: rgba(245, 244, 244,.5);
}
.nav ul li a.link strong{
  font-weight: bold;
  display: inline-block;
  vertical-align: top;
}
/* 首页li */
.nav ul li.current a strong{
  border-bottom: 4px solid #ff3232;
  height: 72px;
}
/* 菜谱大全，饮食健康 */
.nav ul li.extend{ 
  background: url(http://127.0.0.1:5050/images/header/msj_menuarrow.gif) no-repeat right center;
}
/* 美食达人li小图标 */
.nav a.link .crown{
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  margin-left: -7px;
}
.nav ul li .cook{
  display: none;
  position: absolute;
  top: 76px;
  left: 0px;
  width: 100%;
  z-index:200;
}
.nav ul li.on .cook{
  display: block;
}
.nav ul li .cook .cookb{
  width: 930px;
  margin: 0 auto;
  background: #fafafa;
  position: relative;
  box-shadow: 3px 3px 5px rgba(0,0,0,.1);
  padding: 18px 30px 24px;
}
.nav ul li .cook .cook_item{
  display: block;
  overflow: hidden;
  padding: 0px 10px 12px 0px;
}
.nav ul li .cook .cook_sitem{
  display: inline-block;
  width: 330px;
}
.nav ul li .extend .cook_item dl dt{
  display: block;
  height: 24px;
  line-height: 24px;
}
.nav ul li .cook .cook_item dl dt a{
  color:#ff3232;
  font-size: 18px;
}
.nav ul li .cook .cook_item dl dd{
  display: inline-block;
  height: 24px;
  line-height:24px;
  padding-right: 14px;
}
.nav ul li .cook .cook_item dl dd a{
  color:#999;
  font-size: 12px;
  float: left;
}
.nav ul li .cook .cook_item dl a:hover{
  background: #ff3232;
  color:#fff;
}
/* 两个扩展选项中的小图 */
.nav ul li .cook .extend_cpdq .bgitem{
  background:url(http://127.0.0.1:5050/images/header/jccp_navbgg.png) right bottom no-repeat;
  position:absolute;
  right:-60px;
  bottom:-30px;
  height:226px;width:406px;
}
.nav ul li .cook .extend_ysjk .bgitem{
  background:url(http://127.0.0.1:5050/images/header/ysjk_navbg.png) right bottom no-repeat;
  position:absolute;
  right:-60px;
  bottom:-30px;
  height:208px;width:325px;
}
/* 回到顶部按钮 */
.back_to_top{
  display: none;
  height: 178px;
  width: 48px;
  position: fixed;
  bottom:20px;
  right:6px;
  left: 1448px;
  text-indent: -9999px;
  z-index:500;
  /* transition: all .5s linear; */
}
.back_to_top .toTop{
  height: 48px;
  width: 48px;
  text-indent: -9999px;
  background: url(http://127.0.0.1:5050/images/header/backtotop_icon.png) no-repeat 0px 0px;
  position: absolute;
  right:0;
  bottom:0;
  z-index:600;
}
.back_to_top .toTop:hover{
  background-position: 0px -48px;
}
</style>