$(function(){
  $.ajax({
    url:"../HTML/header.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#header");
      $(`<link rel="stylesheet" href="../CSS/header.css">`).appendTo("head");
      $(`<script src="JS/header.js"></script>`).appendTo("head");
    }
  })
  $.ajax({
    url:"../HTML/footer.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#footer");
      $(`<link rel="stylesheet" href="../CSS/footer.css">`).appendTo("head");
    }
  })
})