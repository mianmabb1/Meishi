$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    // dataType:"text",
    success:function(result){
      $(result).replaceAll("#header");
      $(`<link rel="stylesheet" href="../CSS/header.css">`).appendTo("head");
      $(`<script src="../JS/header.js"></script>`).appendTo("head");
    }
  })
  // $('#header').load('header.html',function() {
  //   console.log(1);
  // })
  $.ajax({
    url:"footer.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#footer");
      $(`<link rel="stylesheet" href="../CSS/footer.css">`).appendTo("head");
    }
  })
})