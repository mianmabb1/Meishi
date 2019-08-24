<template>
  <div>
    <div class="footer">
      <div class="footer1">
        <div class="logo_bottom">
          <a href="javascript:;"></a>
        </div>
        <div class="links">
          <ul>
            <li class="sina">
              <!-- 设置背景图片 -->
              <a class="link_img" href="javascript:;">
                <span>关注：60万</span>
              </a>
              <p>
                <a href="javascript:;">
                  点击进入
                  <br />美食杰官方微博
                </a>
              </p>
            </li>
            <li class="qq">
              <a class="link_img" href="javascript:;">
                <span>关注：10.9万</span>
              </a>
              <p>
                <a href="javascript:;">
                  点击进入
                  <br />美食杰qq空间
                </a>
              </p>
            </li>
            <li class="wx">
              <a class="link_img" href="javascript:;"></a>
              <p>
                <a href="javascript:;">
                  扫描二维码添加
                  <br />美食杰为微信好友
                </a>
              </p>
            </li>
            <li class="download">
              <a class="link_img" href="javascript:;"></a>
              <p>
                <a href="javascript:;">
                  扫描二维码下载
                  <br />美食杰手机客户端
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer2">
        <ul>
          <li>
            <a href="javascript:;" title="公司简历">公司简历</a>
          </li>
          <li>
            <a href="javascript:;" title="关于我们">关于我们</a>
          </li>
          <li>
            <a href="javascript:;" title="产品下载">产品下载</a>
          </li>
          <li>
            <a href="javascript:;" title="加入我们">加入我们</a>
          </li>
          <li>
            <a href="javascript:;" title="联系我们">联系我们</a>
          </li>
          <li>
            <a href="javascript:;" title="商务合作">商务合作</a>
          </li>
          <li>
            <a href="javascript:;" title="用户协议">用户协议</a>
          </li>
          <li>
            <a href="javascript:;" title="隐私政策">隐私政策</a>
          </li>
          <li>
            <a href="javascript:;" title="网站地图">网站地图</a>
          </li>
          <li>
            <a href="javascript:;" title="友情链接">友情链接</a>
          </li>
        </ul>
        <p>
          <a class="gray_a" href="javascript:;">京ICP备14030359号</a>
          <a class="gray_a" href="javascript:;">
            <img src="http://127.0.0.1:5050/images/footer/20180208111357_93713.png" />京公网安备11010802026928
          </a>
          <a class="gray_a" href="javascript:;">Copyright © 2003-2019 MEISHIJ CO.,LTD.</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){

  }
};
</script>
<style scoped>
.footer{
  width: 100%;
  /* background: url(http://127.0.0.1:5050/images/footer/black75.png) repeat; */
  background: #3F3A32;
  margin-top: 30px;
  padding-bottom: 60px;
}
/* 底部第一部分 */
.footer1{
  width: 990px;
  position: relative;
  margin: 0 auto;
}
/* logo图片 */
.footer div.logo_bottom{
  height: 196px; width: 600px;
  background: url("http://127.0.0.1:5050/images/footer/20190606113304_957.png") no-repeat left center;
  background-size: 70% auto;
}
.footer div.logo_bottom a{
  width: 200px; height: 100%;
  display: block;
}
/* link */
.footer1 div.links{
  position: absolute;
  right: 0px;
  top: 30px;
}
.footer1 div.links ul li{
  position: relative;
  display: inline-block;
  vertical-align: top;
  background: url(http://127.0.0.1:5050/images/footer/footerlinks.png) no-repeat;
  width: 105px;
  margin-left: 20px;
  height: 160px;
}
.footer1 div.links ul li a.link_img{
  display: block;
  width: 105px;height: 105px;
}
.footer1 div.links ul li a.link_img span{
  color:#fff;
  height: 26px;width: 105px;
  line-height: 26px;
  text-align: center;
  padding-top: 79px;
  display: block;
}
.footer1 div.links ul li.qq{
  background-position: -105px 0px;
}
.footer1 div.links ul li.wx{
  background-position: -210px 0px;
}
.footer1 div.links ul li.download{
  background-position: -315px 0px;
}
.footer1 div.links ul li p{
  position: absolute;
  width: 105px; height: 36px;
  bottom:0px;
  left:0px;
  text-align: center;
  line-height: 18px;
  padding: 9px 0px;
}
.footer1 div.links ul li p a{
  color:#999
}
.footer1 div.links ul li p a:hover{
  color:#fff;
}
/* 底部第二部分 */
.footer2{
  width: 990px;
  margin:0 auto;
  border-top: 1px solid #444;
  text-align: center;
  padding: 10px 0px 30px 0px;
}
.footer2 ul li{
  display: inline-block;
  vertical-align: top;
}
.footer2 ul li a{
  display: inline-block;
  color: #999;
  padding: 0px 10px;
  height: 24px;
  line-height: 24px;
}
.footer2 ul li a:hover{
  background-color:#FF3232;
  color:#fff;
  border-radius:2px;
}
</style>