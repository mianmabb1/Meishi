$(function(){
  // 轮播图
  // 按钮
  $("#prev_btn").hover(
    function(){
      var now=parseInt($(".carousel_item_3").attr("c"));
      if(now==1){now=6};
      // 修改按钮背景图
      $(this).css("background-position",`0px ${6-(now-1)*74}px`);
    },function(){
        $(this).css("background-position","0 6px");
      }
  );
  $("#next_btn").hover(function(){
    var now=parseInt($(".carousel_item_3").attr("c"));
    if(now==5){now=0};
    $(this).css("background-position",`-174px ${6-(now+1)*74}px`);
  },function(){
    $(this).css("background-position","-174px 6px");
  });
  // 点击prev按钮
  $("#carousel .prev_btn").click(function(){
    // 当前标题隐藏
    $(".carousel_item_3 h3").hide();
    $("#carousel_main").animate({left:"-990px"},"600",function(){ //整体向左移990px
      // 在当前头部追加一个carousel_main
      $("#carousel_main .carousel_item").prependTo($("#carousel_main"));
      // 遍历每个item
      $.each($("#carousel_main .carousel_item"),function(){
        var item=$(this);
        var po=parseInt(item.attr("po"));
        if(po==5){po=0};
        item.removeClass().addClass("carousel_item").addClass(`carousel_item_${po+1}`).attr("po",String(po+1));
        // 触发一次按钮的鼠标滑动事件
        $("#prev_btn").trigger("hover");
      });
      // 同步时间刻度
      var i = $("#time_scale span.mtime_current");
      if(i.prev().length>0){
        i.removeClass("mtime_current").prev().addClass("mtime_current");
      }else{
        i.removeClass("mtime_current");
        $("#time_scale span.mtime").last().addClass("mtime_current");
      }
      $("#carousel_main").mouseenter();
      $(".carousel_item h3").hide();
      $(".carousel_item_3 h3").fadeIn(); //仅设置当前标题显示
      $("#carousel_main").css("left","-1980px")
    })
  });
  // 点击next按钮
  $("#carousel .next_btn").click(function(){
    // 当前标题隐藏
    $(".carousel_item_3 h3").hide();
    $("#carousel_main").animate({left:"-2970px"},"600",function(){ //整体向左移990px
      // 在当前末尾追加一个carousel_main
      $("#carousel_main .carousel_item").appendTo($("#carousel_main"));
      // 遍历每个item
      $.each($("#carousel_main .carousel_item"),function(){
        var item=$(this);
        var po=parseInt(item.attr("po"));
        if(po==1){po=6};
        item.removeClass().addClass("carousel_item").addClass(`carousel_item_${po-1}`).attr("po",String(po-1));
        $("#next_btn").trigger("mouseenter");
      });
      // 同步时间刻度
      var i = $("#time_scale span.mtime_current");
      if (i.next().length > 0) {
        i.removeClass("mtime_current").next().addClass("mtime_current");
      } else {
        i.removeClass("mtime_current");
        $("#time_scale span.mtime").first().addClass("mtime_current");
      }
      $("#carousel_main").mouseenter();
      $(".carousel_item h3").hide();
      $(".carousel_item_3 h3").fadeIn(); //仅设置当前标题显示
      $("#carousel_main").css("left","-1980px")
    })
  });
  $("#carousel_main").mouseenter(function(){
    $("#prev_btn").mouseenter();
    $("#next_btn").mouseenter();
  });
  // 食材列表
  $(".index_sc_item").hover(function(){
    $(this).siblings().removeClass("index_sc_item_current");
    $(this).addClass("index_sc_item_current");
  });
  // 健康新闻
  $(".health_item li").hover(function(){
    $(this).siblings().removeClass("current");
    $(this).addClass("current");
  })
  // 菜谱列表
  $(".listyle1").mouseenter(function(){
    $(this).find("div.i").stop().animate({marginTop:"-100px"},400);
  })
  $(".listyle1").mouseleave(function(){
    $(this).find("div.i").stop().animate({marginTop:"0px"},400);
  })
})