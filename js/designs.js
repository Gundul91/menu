$(".dashboard, .comments").mouseover(function (){
  $(this).css("color","red");
});

$(".dashboard, .comments").mouseleave(function (){
  $(this).css("color","rgb(42, 201, 60)");
});

$(".menu").mouseover(function(){
  $(".user a").text("MARCO GONDOLO")
});

$(".menu").mouseleave(function(){
  $(".user a").text("MENU")
});
