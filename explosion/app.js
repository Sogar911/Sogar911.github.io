
function monk() {    
  var myWindow = window.open("", "_self");
  myWindow.document.write("");
  setTimeout (function() {myWindow.close();},1000);
}

var x = 0;
$(".scr6-Tbig2").click(function() {
  if (x % 2 == 0) {
    $(".scr6-block").css("display","table") 
  }
  else {
    $(".scr6-block").css("display","none") 
  }
  x++;
});

