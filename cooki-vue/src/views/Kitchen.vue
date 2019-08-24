<template>
  <div>
    <top></top>
    <div class="main_w">
      <div class="main">
        <!-- part1 -->
        <div class="listnav">
          <!-- 列表项 -->
          <ul class="listnav_ul">
            <li>
              <a class="link" href="javascript:;">我的美食属性(未开放)</a>
            </li>
            <li class="current">
              <h1>
                <a class="link" href="javascript:;">菜谱大全</a>
              </h1>
            </li>
            <li>
              <a class="link" href="javascript:;">中华菜系</a>
            </li>
            <li>
              <a class="link" href="javascript:;">各地小吃</a>
            </li>
            <li>
              <a class="link" href="javascript:;">外国菜谱</a>
            </li>
            <li>
              <a class="link" href="javascript:;">烘焙</a>
            </li>
            <li>
              <a class="link" href="javascript:;">厨房百科</a>
            </li>
            <li>
              <a class="link" href="javascript:;">食材百科</a>
            </li>
          </ul>
          <!-- 列表项内容 -->
          <div class="listnav_con">
            <dl class="listnav_dl bb1 w100">
              <dt>
                <a href="javascript:;">家常菜谱</a>
              </dt>
              <dd>
                <a href="javascript:;">家常菜</a>
              </dd>
              <dd>
                <a href="javascript:;">私家菜</a>
              </dd>
              <dd>
                <a href="javascript:;">凉菜</a>
              </dd>
              <dd>
                <a href="javascript:;">海鲜</a>
              </dd>
              <dd>
                <a href="javascript:;">热菜</a>
              </dd>
              <dd>
                <a href="javascript:;">汤粥</a>
              </dd>
              <dd>
                <a href="javascript:;">素食</a>
              </dd>
              <dd>
                <a href="javascript:;">酱料蘸料</a>
              </dd>
              <dd>
                <a href="javascript:;">火锅底料</a>
              </dd>
              <dd>
                <a href="javascript:;">甜品点心</a>
              </dd>
              <dd>
                <a href="javascript:;">糕点主食</a>
              </dd>
              <dd>
                <a href="javascript:;">干果制作</a>
              </dd>
              <dd>
                <a href="javascript:;">卤酱</a>
              </dd>
              <dd>
                <a href="javascript:;">时尚饮品</a>
              </dd>
            </dl>
            <dl class="listnav_dl br1">
              <dt>
                <a href="javascript:;">每日三餐</a>
              </dt>
              <dd>
                <a href="javascript:;">早餐</a>
              </dd>
              <dd>
                <a href="javascript:;">午餐</a>
              </dd>
              <dd>
                <a href="javascript:;">晚餐</a>
              </dd>
              <dd>
                <a href="javascript:;">下午茶</a>
              </dd>
              <dd>
                <a href="javascript:;">夜宵</a>
              </dd>
            </dl>
            <dl class="listnav_dl br1">
              <dt>
                <a href="javascript:;">人群</a>
              </dt>
              <dd>
                <a href="javascript:;">老年人</a>
              </dd>
              <dd>
                <a href="javascript:;">产妇</a>
              </dd>
              <dd>
                <a href="javascript:;">青少年</a>
              </dd>
              <dd>
                <a href="javascript:;">宝宝食谱-婴儿食谱</a>
              </dd>
            </dl>
            <dl class="listnav_dl">
              <dt>
                <a href="javascript:;">功效</a>
              </dt>
              <dd>
                <a href="javascript:;">疾病调理</a>
              </dd>
              <dd>
                <a href="javascript:;">功能性调理</a>
              </dd>
              <dd>
                <a href="javascript:;">人群膳食</a>
              </dd>
            </dl>
          </div>
        </div>
        <!-- part2 -->
        <div class="ttitles">
          印象中那些妈妈的味道
          <span class="more">
            <a class="current" href="javasript:;">最新</a>|
            <a href="javasript:;">最热</a>
          </span>
        </div>
        <div class="liststyle">
          <!-- 左侧筛选区 -->
          <div class="filterlist" id="filterlist">
            <ul class="tab">
              <li class="li1" po="1">
                <a href="javascript:;">普通筛选</a>
              </li>
              <li class="li2 current" po="2">
                <a href="javascript:;">食材筛选</a>
                <span class="new_function"></span>
              </li>
            </ul>
            <div class="tabcon" po="1" style="display: none">
              <dl>
                <dt>选择难度</dt>
                <dd class>
                  <a href="javascript:;">新手尝试</a>
                  <a href="javascript:;">初级尝试</a>
                  <a href="javascript:;">初级水平</a>
                  <a href="javascript:;">中级掌勺</a>
                  <a href="javascript:;">高级厨师</a>
                  <a href="javascript:;">厨神级</a>
                </dd>
              </dl>
              <dl>
                <dt>选择工艺</dt>
                <dd>
                  <a href="javascript:;">炒</a>
                  <a href="javascript:;">蒸</a>
                  <a href="javascript:;">煮</a>
                  <a href="javascript:;">炖</a>
                  <a href="javascript:;">拌</a>
                  <a href="javascript:;">烧</a>
                  <a href="javascript:;">煎</a>
                  <a href="javascript:;">炸</a>
                  <a href="javascript:;">烘焙</a>
                  <a href="javascript:;">微波</a>
                  <!-- <a href="javascript:;">烤</a>
                <a href="javascript:;">煲</a>
                <a href="javascript:;">焖</a>
                <a href="javascript:;">冻</a>
                <a href="javascript:;">烙</a>
                <a href="javascript:;">砂锅</a>
                <a href="javascript:;">腌</a>
                <a href="javascript:;">卤</a>
                <a href="javascript:;">酱</a>
                  <a href="javascript:;">烩</a>-->
                </dd>
                <dd class="long">展开全部 >></dd>
              </dl>
              <dl>
                <dt>选择口味</dt>
                <dd>
                  <a href="javascript:;">家常味</a>
                  <a href="javascript:;">香辣味</a>
                  <a href="javascript:;">咸鲜味</a>
                  <a href="javascript:;">甜味</a>
                  <a href="javascript:;">酸甜味</a>
                  <a href="javascript:;">酸辣味</a>
                  <a href="javascript:;">麻辣味</a>
                  <a href="javascript:;">酱香味</a>
                  <a href="javascript:;">奶香味</a>
                  <a href="javascript:;">蒜香味</a>
                </dd>
                <dd class="long">展开全部 >></dd>
              </dl>
              <dl>
                <dt>选择时间</dt>
                <dd>
                  <a href="javascript:;">&lt;5分钟</a>
                  <a href="javascript:;">&lt;10分钟</a>
                  <a href="javascript:;">&lt;15分钟</a>
                  <a href="javascript:;">&lt;30分钟</a>
                  <a href="javascript:;">&lt;60分钟</a>
                  <a href="javascript:;">&lt;90分钟</a>
                  <a href="javascript:;">&lt;2小时</a>
                  <a href="javascript:;">&lt;数小时</a>
                  <a href="javascript:;">&lt;一天</a>
                  <a href="javascript:;">&lt;数天</a>
                </dd>
              </dl>
            </div>
            <div class="tabcon" po="2">
              <div class="tabcon_search">
                <div class="w">
                  <input type="text" class="text" placeholder="请输入您想查找的食材" />
                  <input type="button" class="submit" />
                </div>
              </div>
              <dl class="on">
                <dt>按数量排序</dt>
                <dd class="row2">
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>黄瓜</strong>
                    <em>1709</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>牛肉</strong>
                    <em>1206</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>虾</strong>
                    <em>1206</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>南瓜</strong>
                    <em>1121</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>土豆</strong>
                    <em>1031</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>鸡腿</strong>
                    <em>987</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>西红柿</strong>
                    <em>864</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>藕</strong>
                    <em>649</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>白萝卜</strong>
                    <em>648</em>
                  </a>
                  <a href="javascript:;">
                    <span class="season">应季</span>
                    <strong>冬瓜</strong>
                    <em>603</em>
                  </a>
                </dd>
                <dd class="long">展开全部 >></dd>
              </dl>
            </div>
          </div>
          <!-- 主要菜谱区 -->
          <div class="listyle">
            <div class="listyle1_list">
              <!-- 图1 -->
              <div class="listyle1">
                <a href="javascript:;" title="小米山药粥" class="big">
                  <img
                    class="img"
                    alt="小米山药粥"
                    src="http://127.0.0.1:5050/images/chufang/a5120456_148076132206435.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>小米山药粥</strong>
                        <span>26 评论 2769 人气</span>
                        <em>elsa飞雪</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">6步 / 大概30分钟</li>
                          <li class="li2">煮 / 家常味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图2 -->
              <div class="listyle1">
                <a href="javascript:;" title="奥尔良烧烤味肉饼" class="big">
                  <img
                    class="img"
                    alt="奥尔良烧烤味肉饼"
                    src="http://127.0.0.1:5050/images/chufang/a4420184_156272768313812.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>奥尔良烧烤味肉饼</strong>
                        <span>25评论 446 人气</span>
                        <em>寓言</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">5步 / 大概15分钟</li>
                          <li class="li2">烙 / 其他口味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图3 -->
              <div class="listyle1">
                <a href="javascript:;" title="红豆薏米甜酒酿" class="big">
                  <img
                    class="img"
                    alt="红豆薏米甜酒酿"
                    src="http://127.0.0.1:5050/images/chufang/a5140155_156207913612379.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>红豆薏米甜酒酿</strong>
                        <span>4 评论 292 人气</span>
                        <em>跳舞的苹果</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">6步 / 大概2小时</li>
                          <li class="li2">煮 / 甜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图4 -->
              <div class="listyle1">
                <a href="javascript:;" title="牛油果香蕉思慕雪" class="big">
                  <img
                    class="img"
                    alt="牛油果香蕉思慕雪"
                    src="http://127.0.0.1:5050/images/chufang/a5140155_155196688335045.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>牛油果香蕉思慕雪</strong>
                        <span>4 评论 242 人气</span>
                        <em>脂肪肝</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">8步 / 大概10分钟</li>
                          <li class="li2">其它工艺 / 甜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图5 -->
              <div class="listyle1">
                <a href="javascript:;" title="香肠飞饼卷" class="big">
                  <img
                    class="img"
                    alt="香肠飞饼卷"
                    src="http://127.0.0.1:5050/images/chufang/a5140155_155196394270704.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>香肠飞饼卷</strong>
                        <span>8 评论 339 人气</span>
                        <em>归家小厨</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">9步 / 大概30分钟</li>
                          <li class="li2">烤 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图6 -->
              <div class="listyle1">
                <a href="javascript:;" title="驴打滚" class="big">
                  <img
                    class="img"
                    alt="驴打滚"
                    src="http://127.0.0.1:5050/images/chufang/a13410386_155196477266046.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>驴打滚</strong>
                        <span>5 评论 304 人气</span>
                        <em>小马美食厨房</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">10步 / 大概30分钟</li>
                          <li class="li2">煮 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图7 -->
              <div class="listyle1">
                <a href="javascript:;" title="花开富贵香肠菇" class="big">
                  <img
                    class="img"
                    alt="花开富贵香肠菇"
                    src="http://127.0.0.1:5050/images/chufang/a430336_155194389396290.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>花开富贵香肠菇</strong>
                        <span>30 评论 299 人气</span>
                        <em>Smile湘雨</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">16步 / 大概15分钟</li>
                          <li class="li2">蒸 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图8 -->
              <div class="listyle1">
                <a href="javascript:;" title="牛油果香蕉思慕雪" class="big">
                  <img
                    class="img"
                    alt="牛油果香蕉思慕雪"
                    src="http://127.0.0.1:5050/images/chufang/a5140155_155196688335045.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>牛油果香蕉思慕雪</strong>
                        <span>4 评论 242 人气</span>
                        <em>脂肪肝</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">8步 / 大概10分钟</li>
                          <li class="li2">其它工艺 / 甜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图9 -->
              <div class="listyle1">
                <a href="javascript:;" title="香肠飞饼卷" class="big">
                  <img
                    class="img"
                    alt="香肠飞饼卷"
                    src="http://127.0.0.1:5050/images/chufang/a5140155_155196394270704.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>香肠飞饼卷</strong>
                        <span>8 评论 339 人气</span>
                        <em>归家小厨</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">9步 / 大概30分钟</li>
                          <li class="li2">烤 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图10 -->
              <div class="listyle1">
                <a href="javascript:;" title="驴打滚" class="big">
                  <img
                    class="img"
                    alt="驴打滚"
                    src="http://127.0.0.1:5050/images/chufang/a13410386_155196477266046.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>驴打滚</strong>
                        <span>5 评论 304 人气</span>
                        <em>小马美食厨房</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">10步 / 大概30分钟</li>
                          <li class="li2">煮 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图11 -->
              <div class="listyle1">
                <a href="javascript:;" title="花开富贵香肠菇" class="big">
                  <img
                    class="img"
                    alt="花开富贵香肠菇"
                    src="http://127.0.0.1:5050/images/chufang/a430336_155194389396290.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>花开富贵香肠菇</strong>
                        <span>30 评论 299 人气</span>
                        <em>Smile湘雨</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">16步 / 大概15分钟</li>
                          <li class="li2">蒸 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图12 -->
              <div class="listyle1">
                <a href="javascript:;" title="牛油果香蕉思慕雪" class="big">
                  <img
                    class="img"
                    alt="牛油果香蕉思慕雪"
                    src="http://127.0.0.1:5050/images/chufang/a5140155_155196688335045.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>牛油果香蕉思慕雪</strong>
                        <span>4 评论 242 人气</span>
                        <em>脂肪肝</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">8步 / 大概10分钟</li>
                          <li class="li2">其它工艺 / 甜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图13 -->
              <div class="listyle1">
                <a href="javascript:;" title="香肠飞饼卷" class="big">
                  <img
                    class="img"
                    alt="香肠飞饼卷"
                    src="http://127.0.0.1:5050/images/chufang/a5140155_155196394270704.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>香肠飞饼卷</strong>
                        <span>8 评论 339 人气</span>
                        <em>归家小厨</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">9步 / 大概30分钟</li>
                          <li class="li2">烤 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图14 -->
              <div class="listyle1">
                <a href="javascript:;" title="驴打滚" class="big">
                  <img
                    class="img"
                    alt="驴打滚"
                    src="http://127.0.0.1:5050/images/chufang/a13410386_155196477266046.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>驴打滚</strong>
                        <span>5 评论 304 人气</span>
                        <em>小马美食厨房</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">10步 / 大概30分钟</li>
                          <li class="li2">煮 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- 图15 -->
              <div class="listyle1">
                <a href="javascript:;" title="花开富贵香肠菇" class="big">
                  <img
                    class="img"
                    alt="花开富贵香肠菇"
                    src="http://127.0.0.1:5050/images/chufang/a430336_155194389396290.jpg"
                  />
                  <div class="i_w">
                    <div class="i">
                      <div class="c1">
                        <strong>花开富贵香肠菇</strong>
                        <span>30 评论 299 人气</span>
                        <em>Smile湘雨</em>
                      </div>
                      <div class="c2">
                        <ul>
                          <li class="li1">16步 / 大概15分钟</li>
                          <li class="li2">蒸 / 咸鲜味</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="listyle1_page">
              <div class="listyle1_page_con">
                <a href="javascript:;" class="current">1</a>
                <a href="javascript:;">2</a>
                <a href="javascript:;">3</a>
                <a href="javascript:;">4</a>
                <a href="javascript:;">5</a>
                <span>...</span>
                <a href="javascript:;" class="next">下一页</a>
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
    $(".liststyle .tab li").click(function() {
      var po = $(this).attr("po");
      if (!$(this).hasClass("current")) {
        $(this)
          .addClass("current")
          .siblings()
          .removeClass("current");
      }
      $(".liststyle .tabcon").each(function() {
        if ($(this).attr("po") == po) {
          $(this)
            .show()
            .siblings(".tabcon")
            .hide();
        }
      });
    });
    // $(".liststyle dl").click(function(){
    //   $(this).siblings().removeClass("on");
    //   $(this).addClass("on");
    // })

    // 筛选区域
    $(".liststyle dt").click(function() {
      // var _this = $(this);
      if (
        !$(this)
          .parent()
          .hasClass("on")
      ) {
        $(this)
          .parents(".tabcon")
          .find("dl.on")
          .find("dd")
          .slideUp();
        $(this)
          .parents(".tabcon")
          .find("dl.on")
          .removeClass("on");
        $(this)
          .next()
          .slideDown(function() {
            $(this)
              .parent()
              .find(".long")
              .slideDown();
          });
        $(this)
          .parent()
          .addClass("on");
      } else {
        $(this)
          .parents(".tabcon")
          .find("dl.on")
          .find("dd")
          .slideDown();
        $(this)
          .next()
          .slideUp(function() {
            $(this)
              .parent()
              .find(".long")
              .slideUp();
          });
        $(this)
          .parent()
          .removeClass("on");
      }
    });
    // 菜谱列表
    $(".listyle1").mouseenter(function() {
      $(this)
        .find("div.i")
        .stop()
        .animate({ marginTop: "-100px" }, 400);
    });
    $(".listyle1").mouseleave(function() {
      $(this)
        .find("div.i")
        .stop()
        .animate({ marginTop: "0px" }, 400);
    });
  }
};
</script>
<style scoped>
/* 列表项 */
.listnav{
  margin: 0 auto;
  width: 990px;
  position: relative;
  margin-top: 20px;
}
.listnav_ul{
  width: 990px; height: 50px;
  background:rgba(255,255,255,.5)
}
.listnav_ul li{
  display: inline-block;
  vertical-align: top;
  height:50px;
  line-height: 50px;
  font-size: 14px;
  /* float: left; */
}
.listnav_ul li a.link{
  height:50px;
  color:#333;
  font-weight: 700;
  position: relative;
  padding: 0 24px;
  display: inline-block;
}
.listnav_ul li a.link:hover{
  color: #ff3232;
  background: rgba(255,255,255,.3);
}
.listnav_ul li.current{
  background: #fff;
}
.listnav_ul li h1{
  display: inline-block;
}
.listnav_ul li.current a.link{
  color: #ff3232;
}
/* 列表项内容 */
.listnav_con{
  width: 990px;
  background:#fff;
}
/* 设置边框 */
.listnav_con .bb1{
  border-bottom: 1px solid #eee;
}
.listnav_con .br1{
  border-right: 1px solid #eee;
}
.listnav_con .w100{
  width: 100%;
}
.listnav_dl{
  padding: 10px 16px 14px;
  display: inline-block;
}
.listnav_dl dt{
  display: block;
  height: 42px;
  line-height: 42px;
  position: relative;
}
.listnav_dl dt a{
  color: #333;
  font-size: 24px;
}
.listnav_dl dd{
  display: inline-block;
  height: 28px;
}
.listnav_dl dd a{
  color:#666;
  display: inline-block;
  font-size: 14px;
  padding: 0 8px;
  height: 28px;
  line-height: 28px;
}
.listnav_dl dd a:hover{
  color:#fff;
  background: #ff3232;
}

/* 标题 */
.ttitles span.more a.current{color: #ff3232;}

/* 左侧筛选区 */
.liststyle{
  width: 988px;
  margin: 0 auto 20px;
}
.liststyle::after{
  content: "";
  display: block;
  clear: both;
}
.filterlist{
  width: 232px;
  float:left;
  background: #fff;
}
.filterlist .tab{
  height: 50px;
  background: #f5f5f5;
}
.filterlist .tab li{
  float: left;
  width: 116px;
  position: relative;
}
.filterlist .tab li a{
  display: block;
  line-height: 50px;
  text-align: center;
  color:#333;
  font-weight: 700;
}
.filterlist .tab li a:hover{
  text-decoration: underline;
}
.filterlist .tab li.current{
  background: #fff;
}
.filterlist .tab li.current a{
  color: #ff3232;
}
.new_function{
  background: url(http://127.0.0.1:5050/images/chufang/littletips_new.gif);
  display: block;
  width: 52px; height: 18px;
  position: absolute;
  top: -6px;
  right: -6px;
}
/* 清除浮动 */
.filterlist .tabcon dl::after{
  content: "";
  display:block;
  clear: both;
}
.filterlist .tabcon dl dt{
  display: block;
  height: 50px;
  line-height: 50px;
  color: #333;
  font-size: 14px;
  text-indent: 14px;
  background: url(http://127.0.0.1:5050/images/chufang/liststyle1_icons.png) right -96px no-repeat;
  border-bottom: 1px solid #ddd;
  float: left;
  width: 232px;
}
.filterlist .tabcon dl.on dt{
  background-image: none;
}
.filterlist .tabcon dl dd{
  width: 214px;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
  padding: 14px 0px 6px 14px;
  float: left;
  display: none;
}
.filterlist .tabcon dl.on dd{
  display: block;
}
.filterlist .tabcon dl dd a{
  float:left;
  display: block;
  width: 96px;height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #eee;
  background: #fff;
  color:#333;
  margin: 0px 8px 8px 0px;
  font-size:12px;
}
.filterlist .tabcon dl dd a:hover{
  border-color: #999;
  background: url(http://127.0.0.1:5050/images/chufang/liststyle1_icons.png) 63px -66px no-repeat;
}
.filterlist .tabcon dl dd.long{
  color: #666;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-top:#eee;
  padding: 7px;
}
.filterlist .tabcon dl dd.long:hover{
  background: #eee;
  cursor: pointer;
}
/* 食材筛选输入框 */
.tabcon_search{
  height: 50px;width: 232px;
  float: left;
  border-bottom: 1px solid #eee;
}
.tabcon_search div.w{
  height: 28px;width: 202px;
  border: 1px solid #ddd;
  margin: 10px 14px;
  position: relative;
  overflow: hidden;
  background: #fafafa;
}
.tabcon_search div.w input.text{
  height: 20px;width: 160px;
  padding: 4px;
  line-height: 20px;
  background: none;
  color:#999;
  border:0;
}
.tabcon_search div.w input.submit{
  width: 32px;height: 28px;
  background: url(http://127.0.0.1:5050/images/chufang/searchbtn1.png)0px -6px no-repeat;
  border:0;
  cursor: pointer;
  position: absolute;
  top:0;
  right:0;
  overflow: hidden;
}
.tabcon_search div.w input.submit:hover{
  background: url(http://127.0.0.1:5050/images/chufang/searchbtn1.png)0px -46px no-repeat;
}
.liststyle .tabcon dl dd.row2 a{
  width: 202px;
  position: relative;
}
.liststyle .tabcon dl dd.row2 a:hover{
  background: url(http://127.0.0.1:5050/images/chufang/liststyle1_icons.png) 169px -66px no-repeat;
}
.liststyle .tabcon dl dd.row2 a span.season{
  color: #fff;
  background: #60A531;
  height: 20px;
  padding: 0px 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  line-height: 20px;
  display: inline-block;
}
.liststyle .tabcon dl dd.row2 a strong{
  float: left;
  padding-left: 60px;
}
.liststyle .tabcon dl dd.row2 em{
  float: right;
  padding-right: 20px;
  color: #999;
}
/* 菜谱区 */
.listyle{
  width: 756px;
  float: left;
}
/* 页码 */
.listyle1_page{
  height: 40px;
  margin: 40px auto;
  text-align: center;
}
.listyle1_page_con{
  margin: 0px auto;
  display: inline-block;
}
.listyle1_page_con a{
  display: inline-block;
  height: 40px;
  min-width: 14px;
  line-height: 40px;
  padding: 0px 13px;
  text-align: center;
  color: #666;
  font-size: 14px;
  background: #f5f5f5;
  margin-right: 1px;
}
.listyle1_page_con a.current{
  background: #ff3232;
  color:#fff;
}
.listyle1_page_con a:hover{
  background: #ff3232;
  color:#fff;
}
.listyle1_page_con span{
  display: inline-block;
  padding: 0px 10px;
  line-height: 40px;
}
.listyle1_page_con a.next{
  margin-left: 20px;
}
@import url("../assets/css/index.css");
</style>