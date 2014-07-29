$(function() {
  var topHeight = $('header').height() - 40;
  var flag = $(window).scrollTop() > topHeight ? true : false;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= topHeight && !flag) {
      $(".menu-link").addClass("compact");
      flag = true;// under header
    }
    else if (scroll < topHeight && flag) {
      $(".menu-link").removeClass("compact");
      flag = false;// return up
    }
  });
});
