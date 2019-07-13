$(function(){
  $(".liststyle .tab li").click(function(){
    var po=$(this).attr("po");
    if(!$(this).hasClass("current")){
      $(this).siblings().removeClass("current");
      $(this).addClass("current");
    }
    $(".liststyle .tabcon").each(function(){
      if($(this).attr("po")==po){
        $(this).siblings(".tabcon").hide();
        $(this).show();
      }
    })
  })
  // $(".liststyle dl").click(function(){
  //   $(this).siblings().removeClass("on");
  //   $(this).addClass("on");
  // })

  $(".liststyle dt").click(function (){
    // var _this = $(this);
    if (!$(this).parent().hasClass("on")){
      $(this).parents(".tabcon").find("dl.on").find("dd").slideUp(function () {
      });
      $(this).parents(".tabcon").find("dl.on").removeClass("on");
      $(this).next().slideDown(function () {
        $(this).parent().find(".long").slideDown();
      });
      $(this).parent().addClass("on");
    }
  });
})