<template>
  <div>
    <top></top>
    <div class="main_w">
      <div class="main">
        <!-- 路径 -->
        <ul class="pathstyle">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>></li>
          <li>
            <a href="javascript:;">菜谱大全</a>
          </li>
          <li>></li>
        </ul>
        <!-- 菜谱头部 -->
        <div class="cp_header clearfix">
          <div class="cp_header_img">
            <img src="http://127.0.0.1:5050/images/content/jichi.jpg" />
          </div>
          <div class="cp_header_con">
            <div class="info1">
              <h1 class="title">蜜汁鸡翅</h1>
              <div class="erweima"></div>
              <!-- <div class="ewmbox"></div> -->
              <div class="favbtn">
                <a href="javascript:;" title="蜜汁鸡翅的做法" class="addToFav">
                  收藏
                  <span>(1548)</span>
                </a>
                <div class="cp_share">分享到:</div>
              </div>
              <dl class="tags clearfix">
                <dt>
                  <a href="javascript:;">抵抗力</a>
                </dt>
                <dt>
                  <a href="javascript:;">养肾</a>
                </dt>
                <dt>
                  <a href="javascript:;">减肥</a>
                </dt>
                <dt>
                  <a href="javascript:;">骨质疏松</a>
                </dt>
                <dt>
                  <a href="javascript:;">美容养颜</a>
                </dt>
                <dt>
                  <a href="javascript:;">防癌、抗癌</a>
                </dt>
              </dl>
            </div>
            <div class="info2">
              <ul class="clearfix">
                <li>
                  <strong>工艺</strong>
                  <a href="javascript:;" class="big">煮</a>
                </li>
                <li>
                  <strong>难度</strong>
                  <div class="processing_con">
                    <span class="icon icon_nd"></span>
                    <span class="processing processing_nd4"></span>
                    <a href="javascript:;" class="small">初级入门</a>
                  </div>
                </li>
                <li>
                  <strong>人数</strong>
                  <div class="processing_con">
                    <span class="icon icon_rs"></span>
                    <span class="processing processing_rs9"></span>
                    <a href="javascript:;" class="small">3人份</a>
                  </div>
                </li>
                <li>
                  <strong>口味</strong>
                  <a href="javascript:;" class="big">咸鲜味</a>
                </li>
                <li>
                  <strong>准备时间</strong>
                  <div class="processing_con">
                    <span class="icon icon_zb"></span>
                    <span class="processing processing_zb1"></span>
                    <a href="javascript:;" class="small">5分钟</a>
                  </div>
                </li>
                <li>
                  <strong>烹饪时间</strong>
                  <div class="processing_con">
                    <span class="icon icon_pr"></span>
                    <span class="processing processing_pr7"></span>
                    <a href="javascript:;" class="small">&lt;30分钟</a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="info3">
              <div class="user">
                <!-- 用户头像 -->
                <a href="javascript:;" class="img">
                  <img src="http://127.0.0.1:5050/images/content/44.jpg" />
                </a>
                <!-- 用户信息 -->
                <div class="use_info">
                  <h4>
                    <a href="javascript:;">爱生活的馋猫</a>
                    <a href="javascript:;" class="v_small"></a>
                  </h4>
                  <span>菜谱：146 &nbsp;/&nbsp; 关注：30 &nbsp;/&nbsp; 粉丝：5391</span>
                  <strong>2019-07-13 &nbsp;/&nbsp; 45396人看过</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 菜谱主体 -->
        <div class="cp_body clearfix">
          <!-- 材料 -->
          <div class="materials">
            <p>
              <strong>“</strong>
              蜜汁鸡翅一直以来都是我的心头大爱，香嫩口感带来抵挡不住的美味诱惑，色香味俱全，营养又健康做法也简单，一个接着一个吃！
              <strong>”</strong>
            </p>
            <h2 class="cp_h2">用料</h2>
            <div class="materials_con">
              <div class="zl clearfix">
                <h3>主料</h3>
                <ul class="clearfix">
                  <li>
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_jcz.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">鸡翅中</a>
                        <span>10个</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_ds.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">大蒜</a>
                        <span>25克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li class="br0">
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_hy.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">耗油</a>
                        <span>15克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_jy.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">酱油</a>
                        <span>10克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_fm.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">蜂蜜</a>
                        <span>15克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li class="br0">
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_y.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">盐</a>
                        <span>2克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li class="bb0">
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_lj.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">料酒</a>
                        <span>20克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li class="bb0">
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_hjf.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">白胡椒粉</a>
                        <span>1克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                  <li class="bb0 br0">
                    <a href="javascript:;" class="img">
                      <img src="http://127.0.0.1:5050/images/content/sc_rs.jpg" />
                    </a>
                    <div class="c">
                      <h4>
                        <a href="javascript:;">热水</a>
                        <span>10克</span>
                      </h4>
                      <a href="javascript:;"></a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="fl clearfix">
                <h3>辅料</h3>
                <ul class="clearfix">
                  <li>
                    <h4>
                      <a href="javascript:;">白芝麻</a>
                    </h4>
                    <span>少许</span>
                    <a href="javascript:;"></a>
                  </li>
                  <li>
                    <h4>
                      <a href="javascript:;">清水</a>
                    </h4>
                    <span>适量</span>
                    <a href="javascript:;"></a>
                  </li>
                  <li>
                    <h4>
                      <a href="javascript:;">白糖</a>
                    </h4>
                    <span>适量</span>
                    <a href="javascript:;"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 做法 -->
          <div class="measure">
            <h2 class="cp_h2">蜜汁鸡翅的做法</h2>
            <div class="measure_con">
              <div class="content clearfix">
                <em class="step">1.</em>
                <div class="c">
                  <p>鸡翅中浸泡20分钟去去血水，冲洗干净，沥干水分。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure1.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">2.</em>
                <div class="c">
                  <p>给鸡翅划上2～3刀，便于入味。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure2.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">3.</em>
                <div class="c">
                  <p>碗内加入蒜泥、料酒、酱油、蚝油、蜂蜜、盐、甜红椒粉、白胡椒粉。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure3.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">4.</em>
                <div class="c">
                  <p>倒入热开水，搅拌均匀。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure4.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">5.</em>
                <div class="c">
                  <p>把鸡翅里倒入混合好的酱料，搅拌均匀，盖上保鲜膜，放冰箱冷藏腌制一天。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure5.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">6.</em>
                <div class="c">
                  <p>腌制好的鸡翅，用厨房纸吸干表面的水份，煎制时才能上色。开中火，不粘锅里倒入少许食用油，油热后放入鸡翅。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure6.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">7.</em>
                <div class="c">
                  <p>把鸡翅两面煎至金黄色。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure7.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">8.</em>
                <div class="c">
                  <p>加入与鸡翅齐平的开水，稍搅动均匀。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure8.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">9.</em>
                <div class="c">
                  <p>盖上锅盖，中火焖炖15分钟。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure9.jpg" />
                  </p>
                </div>
              </div>
              <div class="content clearfix">
                <em class="step">10.</em>
                <div class="c">
                  <p>炖好后，开大火收汁，完全收干，让酱汁在鸡翅上挂住。</p>
                  <p>
                    <img src="http://127.0.0.1:5050/images/content/measure10.jpg" />
                  </p>
                </div>
              </div>
              <h2 class="cp_h2">蜜汁菜谱成品图</h2>
              <!-- 小轮播图 -->
              <div class="cp_banner">
                <img src="http://127.0.0.1:5050/images/content/banner1.jpg" />
                <img src="http://127.0.0.1:5050/images/content/banner2.jpg" />
                <img src="http://127.0.0.1:5050/images/content/banner3.jpg" />
                <img src="http://127.0.0.1:5050/images/content/banner4.jpg" />
                <ul class="cp_banner_index">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <h2 class="cp_h2">烹饪技巧</h2>
              <p class="cp_skill">
                1、如果腌制时间不够，最少腌制1小时，建议冷藏过夜味道更佳。
                <br />2、若一次做的比较多，鸡翅可以分几次来煎，不要一次全部下锅。
              </p>
            </div>
          </div>
          <!-- 讨论 -->
          <div class="cp_comment">
            <h2 class="cp_h2">蜜汁鸡翅的讨论</h2>
            <div class="cp_comment_con">
              <!-- 用户评论区 -->
              <div class="cp_com_form clearfix">
                <a href="javascript:;" class="user_avatar">
                  <img src="http://127.0.0.1:5050/images/content/avatar1.jpg" />
                </a>
                <div class="form_con">
                  <div class="form_tag">
                    <em>给内容一个标签：</em>
                    <span class="current">随意吐槽</span>
                    <span>提问求解</span>
                  </div>
                  <form>
                    <textarea placeholder="说点什么吧"></textarea>
                    <input type="submit" class="submit" value="提交" />
                  </form>
                  <a href="javascrpt:;" class="cp_upload">上传成果作品</a>
                </div>
              </div>
              <!-- 排序区 -->
              <div class="cp_com_list">
                <strong>评论排序：</strong>
                <span class="current">最新</span>
                <span>最热</span>
              </div>
              <!-- 讨论区 -->
              <div class="new_com">
                <ul>
                  <li class="com_li clearfix">
                    <a href="javascript:;" class="avatar">
                      <img src="http://127.0.0.1:5050/images/content/tx2_1.png" />
                      <h5>用户4576864</h5>
                    </a>
                    <div class="c">
                      <p>
                        <strong>[随意吐槽]</strong>好好吃的亚子，看到就饿了……
                      </p>
                      <div class="info">
                        <span>
                          2019-07-14 15:09:18来自
                          <a href="javascript:;">美食杰</a>
                        </span>
                        <a href="javascript:;">回复</a>
                        <span class="zan">
                          <em></em>
                          <strong>5</strong>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="com_li clearfix">
                    <a href="javascript:;" class="avatar">
                      <img src="http://127.0.0.1:5050/images/content/tx2_8.png" />
                      <h5>小豆豆</h5>
                    </a>
                    <div class="c">
                      <p>
                        <strong>[随意吐槽]</strong>这个貌似很不错
                      </p>
                      <div class="info">
                        <span>
                          2019-07-13 20:06:45来自
                          <a href="javascript:;">美食杰</a>
                        </span>
                        <a href="javascript:;">回复</a>
                        <span class="zan">
                          <em></em>
                          <strong>2</strong>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="com_li clearfix">
                    <a href="javascript:;" class="avatar">
                      <img src="http://127.0.0.1:5050/images/content/tx2_6.png" />
                      <h5>两百斤的小胖子</h5>
                    </a>
                    <div class="c">
                      <p>
                        <strong>[提问求解]</strong>为啥我的糊了……
                      </p>
                      <div class="info">
                        <span>
                          2019-07-13 19:20:32来自
                          <a href="javascript:;">美食杰</a>
                        </span>
                        <a href="javascript:;">回复</a>
                        <span class="zan">
                          <em></em>
                          <strong>6</strong>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="com_li clearfix">
                    <a href="javascript:;" class="avatar">
                      <img src="http://127.0.0.1:5050/images/content/tx2_4.png" />
                      <h5>圆圆</h5>
                    </a>
                    <div class="c">
                      <p>
                        <strong>[随意吐槽]</strong>回去试试
                      </p>
                      <div class="info">
                        <span>
                          2019-07-13 13:35:18来自
                          <a href="javascript:;">美食杰</a>
                        </span>
                        <a href="javascript:;">回复</a>
                        <span class="zan">
                          <em></em>
                          <strong>1</strong>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="com_li clearfix">
                    <a href="javascript:;" class="avatar">
                      <img src="http://127.0.0.1:5050/images/content/tx2_7.png" />
                      <h5>苏打</h5>
                    </a>
                    <div class="c">
                      <p>
                        <strong>[随意吐槽]</strong>赞赞
                      </p>
                      <div class="info">
                        <span>
                          2019-07-13 09:46:58来自
                          <a href="javascript:;">美食杰</a>
                        </span>
                        <a href="javascript:;">回复</a>
                        <span class="zan">
                          <em></em>
                          <strong>9</strong>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
    var imgIndex = 0;
    var timer = setInterval(autoPlay, 3000);
    function autoPlay() {
      $(".measure_con .cp_banner img")
        .eq(imgIndex)
        .css("display", "none");
      $(".measure_con .cp_banner ul li")
        .eq(imgIndex)
        .css("background", "#eee");
      imgIndex =
        ++imgIndex == $(".measure_con .cp_banner img").length ? 0 : imgIndex;
      $(".measure_con .cp_banner img")
        .eq(imgIndex)
        .css("display", "block");
      $(".measure_con .cp_banner ul li")
        .eq(imgIndex)
        .css("background", "#e90808");
    }
    $("ul.cp_banner_index").on("click", "li", function() {
      var $li = $(this);
      imgIndex = $li.index();
    });
  }
};
</script>
<style scoped>
/* 路径 */
.pathstyle {
  height: 88px;
  line-height: 88px;
}
.pathstyle li {
  display: inline-block;
  color: #333;
  font-size: 18px;
  height: 88px;
  padding: 0px 5px;
}
.pathstyle li a {
  color: #333;
}
.pathstyle li a:hover {
  color: #ff3232;
  text-decoration: underline;
}
/* 菜谱头部 */
.cp_header {
  background: #fff;
  width: 990px;
  margin-bottom: 20px;
}
/* 头部图片 */
.cp_header_img {
  width: 328px;
  float: left;
  overflow: hidden;
}
.cp_header_img img {
  width: 328px;
  float: left;
  display: block;
}
/* 头部主体 */
.cp_header_con {
  width: 662px;
  float: right;
  position: relative;
}
/* 头部主体part1 */
.cp_header_con .info1 {
  height: 159px;
  padding-left: 25px;
  border-bottom: 1px solid #eee;
}
.cp_header_con .info1 .title {
  height: 44px;
  padding: 28px 0px;
  line-height: 44px;
  max-width: 288px;
  display: inline-block;
  font-size: 36px;
  color: #333;
  cursor: default;
}
.cp_header_con .info1 .erweima {
  display: inline-block;
  width: 52px;
  height: 52px;
  background: url(http://127.1:5050/images/content/erweima_32.gif) 0px 0px
    no-repeat;
  margin-top: 23px;
  margin-left: 10px;
  position: relative;
  vertical-align: top;
}
.cp_header_con .info1 .erweima_hover {
  background-position: 0px -52px;
}
.favbtn {
  display: inline-block;
  vertical-align: top;
  height: 50px;
  position: absolute;
  top: 25px;
  right: 25px;
}
.cp_header_con .favbtn .addToFav {
  display: inline-block;
  vertical-align: top;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #ff3232;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #e90808;
  border-right: 0;
  padding: 0px 14px;
}
.cp_header_con .favbtn .addToFav:hover {
  background: #e90808;
}
.cp_header_con .cp_share {
  display: inline-block;
  vertical-align: top;
  background: #f5f5f5;
  height: 48px;
  width: 167px;
  line-height: 50px;
  cursor: default;
  position: relative;
  color: #999;
  font-weight: bold;
  border: 1px solid #e5e5e5;
  border-left: 0;
  left: -5px;
  text-indent: 10px;
}
.tags {
  display: block;
  height: 34px;
  width: 540px;
  margin-bottom: 30px;
}
.tags dt {
  float: left;
}
.tags dt a {
  color: #fff;
  background: #60a531;
  border: 1px solid #46811d;
  height: 32px;
  line-height: 32px;
  text-align: center;
  display: inline-block;
  padding: 0px 8px;
  margin-right: 10px;
}
.tags dt a:hover {
  background: #46811d;
}
/* 主体part2 */
.cp_header_con .info2 ul {
  display: block;
}
.cp_header_con .info2 ul li {
  float: left;
  height: 48px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 18px 0px 18px 20px;
}
/* 设置每个li元素宽度 */
.cp_header_con .info2 ul li:first-child {
  width: 104px;
}
.cp_header_con .info2 ul li:nth-child(2) {
  width: 248px;
}
.cp_header_con .info2 ul li:nth-child(3) {
  width: 248px;
  border-right: 0;
}
.cp_header_con .info2 ul li:nth-child(4) {
  width: 104px;
}
.cp_header_con .info2 ul li:nth-child(5) {
  width: 248px;
}
.cp_header_con .info2 ul li:last-child {
  width: 248px;
  border-right: 0;
}
.cp_header_con .info2 ul li strong {
  font-size: 12px;
  color: #999;
  display: block;
  height: 18px;
  line-height: 18px;
}
.cp_header_con .info2 ul li a.big {
  display: block;
  font-size: 24px;
  color: #ff3232;
}
.cp_header_con .info2 ul li .processing_con {
  height: 30px;
  font-size: 12px;
  color: #666;
}
.cp_header_con .info2 ul li .processing_con span {
  display: block;
  float: left;
}
.cp_header_con .info2 ul li .processing_con span.icon {
  height: 30px;
  width: 30px;
  background: url(http://127.1:5050/images/content/cpinfo_icons.gif) no-repeat;
}
.cp_header_con .info2 ul li .processing_con span.icon_nd {
  background-position: -3px -39px;
}
.cp_header_con .info2 ul li .processing_con span.processing {
  height: 20px;
  width: 140px;
  background: url(http://127.1:5050/images/content/processing.gif) no-repeat;
  position: relative;
  top: 7px;
  margin-left: 5px;
}
.cp_header_con .info2 ul li .processing_con span.processing_nd4 {
  background-position: 0px -80px;
}
.cp_header_con .info2 ul li .processing_con a.small {
  display: block;
  float: left;
  color: #666;
  padding-top: 6px;
  cursor: default;
  line-height: 20px;
}
.cp_header_con .info2 ul li .processing_con span.icon_rs {
  background-position: -3px -110px;
}
.cp_header_con .info2 ul li .processing_con span.processing_rs9 {
  background-position: 0px -180px;
}
.cp_header_con .info2 ul li .processing_con span.processing_zb1 {
  background-position: 0px -20px;
}
.cp_header_con .info2 ul li .processing_con span.icon_pr {
  background-position: -3px -74px;
}
.cp_header_con .info2 ul li .processing_con span.processing_pr7 {
  background-position: 0px -140px;
}
/* 头部主体part3 */
.cp_header_con .info3 .user {
  height: 70px;
  padding: 20px 0px 20px 20px;
}
.cp_header_con .info3 .use_info {
  float: left;
  padding-left: 10px;
  height: 70px;
}
.cp_header_con .info3 .user a.img {
  display: block;
  height: 70px;
  width: 70px;
  float: left;
  position: relative;
}
.cp_header_con .info3 .user a.img img {
  width: 100%;
  border-radius: 50%;
}
.cp_header_con .info3 .user h4 {
  height: 22px;
  line-height: 22px;
  position: relative;
}
.cp_header_con .info3 .user h4 a {
  color: #ff3232;
  display: inline-block;
  vertical-align: top;
  /* height: 22px; */
}
.cp_header_con .info3 .user h4 a:hover {
  text-decoration: underline;
}
.cp_header_con .info3 .user h4 a.v_small {
  width: 20px;
  height: 20px;
  background: url(http://127.1:5050/images/content/vip_20.png) center no-repeat;
}
.cp_header_con .info3 .user span {
  display: block;
  color: #666;
  padding-top: 4px;
  line-height: 24px;
}
.cp_header_con .info3 .user strong {
  color: #999;
  line-height: 22px;
}
/* 菜谱主体 */
.cp_body {
  width: 990px;
  position: relative;
}
/* 材料 */
.cp_body .materials {
  background: #fff;
  margin-bottom: 20px;
}
.cp_body .materials p {
  color: #666;
  padding: 20px 24px 10px;
  line-height: 24px;
  font-size: 14px;
}
.cp_body .materials p strong {
  font-size: 24px;
  color: #ddd;
  font-weight: 700;
  padding: 0px 3px;
}
.cp_h2 {
  font-size: 24px;
  color: #333;
  height: 66px;
  line-height: 66px;
  border-bottom: 1px solid #eee;
  text-indent: 30px;
}
.cp_body .materials_con > div {
  border-bottom: 1px solid #eee;
}
/* 主料 */
.cp_body .materials_con div.zl h3 {
  width: 48px;
  height: 22px;
  line-height: 22px;
  background: #ff3232;
  color: #fff;
  text-align: center;
  border: 1px solid #e90808;
  margin: 14px 25px;
  float: left;
  cursor: default;
}
.cp_body .materials_con div.zl ul {
  float: left;
  width: 890px;
}
.cp_body .materials_con div.zl ul li {
  float: left;
  width: 295px;
  height: 78px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.cp_body .materials_con div.zl ul li a.img {
  float: left;
  width: 50px;
  height: 50px;
  padding: 14px 0px 14px 14px;
}
.cp_body .materials_con div.zl ul li a.img img {
  display: block;
  width: 50px;
}
.cp_body .materials_con div.zl ul li div.c {
  float: left;
  padding: 14px 0px 14px 10px;
  width: 221px;
  height: 50px;
}
.cp_body .materials_con div.zl ul li div.c h4 {
  width: 204px;
  height: 24px;
  line-height: 24px;
  float: left;
}
.cp_body .materials_con div.zl ul li div.c h4 a {
  color: #333;
}
.cp_body .materials_con div.zl ul li div.c h4 a:hover {
  color: #ff3232;
  text-decoration: underline;
}
.cp_body .materials_con div.zl ul li div.c h4 span {
  float: right;
  color: #999;
}
.cp_body .materials_con div.zl ul li div.c > a {
  display: block;
  height: 26px;
  width: 204px;
  background: url(http://127.1:5050/images/content/cart_26.gif) left top
    no-repeat;
  float: left;
}
.cp_body .materials_con div.zl ul li div.c > a:hover {
  background-position: left bottom;
}
/* 辅料 */
.cp_body .materials_con div.fl h3 {
  width: 48px;
  height: 22px;
  line-height: 24px;
  background: #f5f5f5;
  color: #999;
  text-align: center;
  border: 1px solid #ddd;
  margin: 14px 25px;
  float: left;
  cursor: default;
}
.cp_body .materials_con div.fl ul {
  float: left;
  width: 890px;
}
.cp_body .materials_con div.fl ul li {
  float: left;
  width: 295px;
  height: 54px;
  border-right: 1px solid #eee;
}
.cp_body .materials_con div.fl ul li h4 {
  float: left;
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  text-indent: 14px;
}
.cp_body .materials_con div.fl ul li h4 a {
  color: #333;
}
.cp_body .materials_con div.fl ul li h4 a:hover {
  text-decoration: underline;
  color: #ff3232;
}
.cp_body .materials_con div.fl ul li span {
  color: #999;
  float: right;
  display: block;
  height: 54px;
  width: 120px;
  line-height: 54px;
  text-align: right;
  padding-right: 16px;
}
.cp_body .materials_con div.fl ul li > a {
  height: 26px;
  width: 26px;
  float: left;
  margin: 14px 10px;
  background: url(http://127.1:5050/images/content/cart_26.gif) left -2px no-repeat;
}
.cp_body .materials_con div.fl ul li > a:hover {
  background-position: left -28px;
}
/* 步骤 */
.cp_body .measure {
  background: #fff;
  margin-bottom: 20px;
}
.cp_body .measure .measure_con {
  padding: 20px 0px;
}
.cp_body .measure .measure_con div.content {
  line-height: 24px;
  position: relative;
  padding: 0px 20px 0px 0px;
}
.cp_body .measure .measure_con div.content em.step {
  float: left;
  height: 50px;
  width: 200px;
  line-height: 50px;
  text-align: center;
  font-style: italic;
  font-size: 50px;
  color: #ff3232;
}
.cp_body .measure .measure_con div.content div.c {
  float: left;
  width: 720px;
}
.cp_body .measure .measure_con p {
  line-height: 24px;
  color: #666;
  position: relative;
  padding: 10px 20px 10px 0px;
  font-size: 16px;
}
/* 菜谱小轮播图 */
.cp_body .measure .measure_con .cp_banner {
  width: 660px;
  height: 366px;
  margin: 20px 130px 20px 200px;
  overflow: hidden;
  position: relative;
}
.cp_body .measure .measure_con .cp_banner img {
  width: 660px;
  height: 366px;
  display: none;
}
.cp_body .measure .measure_con .cp_banner img:first-child {
  display: block;
}
.cp_body .measure .measure_con .cp_banner ul.cp_banner_index {
  position: absolute;
  bottom: 30px;
  left: 300px;
}
.cp_body .measure .measure_con .cp_banner ul.cp_banner_index li {
  float: left;
  height: 10px;
  width: 10px;
  background: #eee;
  border-radius: 50%;
  cursor: pointer;
}
.cp_body
  .measure
  .measure_con
  .cp_banner
  ul.cp_banner_index
  li:not(:last-child) {
  margin-right: 10px;
}
.cp_body .measure .measure_con .cp_banner ul.cp_banner_index li:first-child {
  background: #e90808;
}
/* 烹饪技巧 */
.cp_body .measure .measure_con p.cp_skill {
  padding-left: 200px;
}
/* 讨论 */
.cp_body .cp_comment {
  background: #fff;
  margin-bottom: 20px;
  width: 990px;
}
.cp_comment_con {
  width: 990px;
  padding: 20px 0px;
}
/* 用户评论区 */
.cp_com_form {
  width: 930px;
  padding: 0px 30px;
}
.cp_com_form a.user_avatar {
  width: 80px;
  height: 80px;
  float: left;
}
.cp_com_form a.user_avatar img {
  display: block;
  width: 80px;
  height: 80px;
}
.cp_com_form .form_con {
  float: left;
  display: block;
  height: 280px;
  width: 820px;
  position: relative;
  margin-left: 30px;
  margin-bottom: 20px;
}
.cp_com_form .form_con .form_tag {
  height: 34px;
  width: 100%;
  margin-bottom: 20px;
}
.cp_com_form .form_con .form_tag em {
  height: 34px;
  font-size: 20px;
  line-height: 34px;
  color: #666;
  display: inline-block;
  vertical-align: top;
}
.cp_com_form .form_con .form_tag span {
  height: 34px;
  font-size: 20px;
  line-height: 34px;
  color: #999;
  display: inline-block;
  vertical-align: top;
  margin-right: 15px;
  padding: 0px 10px;
  background: #eee;
  border-radius: 2px;
  cursor: pointer;
}
.cp_com_form .form_con .form_tag span:hover {
  background: #ddd;
}
.cp_com_form .form_con .form_tag span.current {
  background: #ff3232;
  color: #fff;
}
.cp_com_form .form_con form textarea {
  width: 790px;
  height: 150px;
  padding: 14px;
  border: 1px solid #ddd;
  background: #fcfcfc;
  font-size: 16px;
}
.cp_com_form .form_con form input.submit {
  box-sizing: content-box;
  height: 40px;
  width: 80px;
  background: #ff3232;
  border: 1px solid #e90808;
  color: #fff;
  font-size: 18px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.cp_com_form .form_con form input.submit:hover {
  background: #e90808;
  cursor: pointer;
}
.cp_com_form .form_con a.cp_upload {
  display: block;
  height: 40px;
  width: 140px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  background: #ff3232;
  text-align: center;
  border: 1px solid #e90808;
  position: absolute;
  bottom: 0;
}
.cp_com_form .form_con a.cp_upload:hover {
  background: #e90808;
}
/* 排序区 */
.cp_com_list {
  height: 34px;
  line-height: 34px;
  position: relative;
  border-bottom: 1px solid #eee;
  color: #666;
  padding-bottom: 10px;
  margin: 0 20px;
  font-size: 18px;
}
.cp_com_list span {
  padding: 3px 10px;
  background: #eee;
  cursor: pointer;
  color: #999;
  margin-right: 10px;
  border-radius: 2px;
}
.cp_com_list span:hover {
  background: #ddd;
}
.cp_com_list span.current {
  background: #ff3232;
  color: #fff;
  cursor: default;
}
/* 讨论区 */
.new_com {
  width: 930px;
  padding: 30px 30px 0px;
}
.new_com ul li.com_li {
  padding-top: 20px;
  border-bottom: 1px solid #eee;
}
.new_com ul li.com_li a.avatar {
  float: left;
  width: 80px;
  height: 112px;
}
.new_com ul li a.avatar img {
  width: 80px;
}
.new_com ul li a.avatar h5 {
  height: 32px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  line-height: 32px;
  text-align: center;
}
.new_com ul li div.c {
  float: left;
  width: 810px;
  margin-left: 40px;
}
.new_com ul li div.c p {
  font-size: 20px;
  color: #666;
  line-height: 34px;
}
.new_com ul li div.c p strong {
  color: #ff3232;
  padding-right: 20px;
}
.new_com ul li div.info {
  position: relative;
  height: 40px;
  line-height: 40px;
  color: #999;
  font-size: 18px;
}
.new_com ul li div.info span > a {
  color: #ff3232;
  padding-left: 8px;
}
.new_com ul li div.info span > a:hover {
  text-decoration: underline;
}
.new_com ul li div.info > a {
  float: right;
  color: #999;
}
.new_com ul li div.info > a:hover {
  color: #ff3232;
}
.new_com ul li div.info span.zan {
  float: right;
  cursor: pointer;
  padding-right: 10px;
}
.new_com ul li div.info span.zan:hover em {
  background-position: 0px -18px;
}
.new_com ul li div.info span.zan:hover {
  color: #ff3232;
}
.new_com ul li div.info span.zan em {
  display: inline-block;
  vertical-align: top;
  width: 18px;
  height: 18px;
  background: url(http://127.1:5050/images/content/con_com_zan_icon.png) 0px 0px
    no-repeat;
  background-size: 100%;
  margin-top: 9px;
}
</style>