$(function(){
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