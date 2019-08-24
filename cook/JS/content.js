$(function(){
  var imgIndex=0;
  var timer=setInterval(autoPlay,3000);
  function autoPlay(){
    $(".measure_con .cp_banner img").eq(imgIndex).css("display","none");
    $(".measure_con .cp_banner ul li").eq(imgIndex).css("background","#eee");
    imgIndex = ++imgIndex == $(".measure_con .cp_banner img").length?0:imgIndex;
    $(".measure_con .cp_banner img").eq(imgIndex).css("display", "block");
    $(".measure_con .cp_banner ul li").eq(imgIndex).css("background", "#e90808");
  }
  $("ul.cp_banner_index").on("click","li",function(){
    var $li=$(this);
    imgIndex=$li.index();
  })
})