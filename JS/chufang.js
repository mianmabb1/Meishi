$(function(){
  $(".liststyle .tab li").click(function(){
    var po=$(this).attr("po");
    if(!$(this).hasClass("current")){
      $(this).addClass("current")
      .siblings().removeClass("current");
      
    }
    $(".liststyle .tabcon").each(function(){
      if($(this).attr("po")==po){
        $(this).show()
        .siblings(".tabcon").hide();
      }
    })
  })
  // $(".liststyle dl").click(function(){
  //   $(this).siblings().removeClass("on");
  //   $(this).addClass("on");
  // })

  // 筛选区域
  $(".liststyle dt").click(function (){
    // var _this = $(this);
    if (!$(this).parent().hasClass("on")){
      $(this).parents(".tabcon").find("dl.on").find("dd").slideUp();
      $(this).parents(".tabcon").find("dl.on").removeClass("on");
      $(this).next().slideDown(function () {
        $(this).parent().find(".long").slideDown();
      });
      $(this).parent().addClass("on");
    }else{
      $(this).parents(".tabcon").find("dl.on").find("dd").slideDown();
      $(this).next().slideUp(function () {
        $(this).parent().find(".long").slideUp();
      });
      $(this).parent().removeClass("on");
    }
  });
})