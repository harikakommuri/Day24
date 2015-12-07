var imagearray = ["ubuntu-wallpaper_-11.jpg","before.png","ubuntu.jpeg"];
/*function image1() {
  var image = $('<img src="'+ imagearray[0]+'" height = 100% width = 100% alt = this is image1>');
  $("#scrollImages").html(image);
  window.setTimeout(image2,3000);
}
function image2() {
  var image = $("<img src='loginimage3.jpeg' height = 100% width = 100% alt = 'this is image3'>");
  $("#scrollImages").html(image);
  window.setTimeout(image3,3000);
}
function image3() {
  var image = $("<img src='loginimage2.jpeg' height = 100% width = 100% alt = 'this is image2'>");
  $("#scrollImages").html(image);
  //window.setTimeout(image1,3000);
} */
function image(k) {
  var backgroundimage = $('<img src="'+ imagearray[k]+'" height = 100% width = 100% alt = "this is image'+ k +'">');
  $('#body').css('backgroundImage','url(' + imagearray[k] + ')');
 window.setTimeout(function() { ++k;increment(k); },3000);
}
function increment(i) {
  var count = imagearray.length;
  i = (i + count) % count;
  image(i);
}
