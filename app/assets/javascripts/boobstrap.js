var is_ipad     = navigator.userAgent.match(/iPad/i) !== null;
var is_phone    = navigator.userAgent.match(/iPhone/i) !== null;
var phones      = (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent));
var is_phones   = phones ? true : false;
var mobiles     = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));
var is_mobile   = mobiles ? true : false;
var body_height = $('body').height();
var html_height = $('html').height();


var boobstrap = {

  view_port: function() {
    var handheld_min            = 0;
    var handheld_max            = 479;
    var handheld_landscape_min  = 480;
    var handheld_landscape_max  = 767;
    var small_screen            = 768;
    var default_screen          = 980;
    var medium_screen           = 1280;
    var large_screen_min        = 1250;
    var large_screen_max        = 1800;
    var high_res_min            = 1801;
    var high_res_max            = 6000;
    var width                   = $(window).width();

    if (width <= handheld_max) {
      $('body').removeClass('h hl large tp d hr').addClass('h');
    }
    else if (width <= handheld_landscape_max && width >= handheld_landscape_min) {
      $('body').removeClass('h hl large tp d hr').addClass('hl');
    }
    else if (width <= large_screen_max && width >= large_screen_min) {
      $('body').removeClass('h hl large tp d hr').addClass('large');
    }
    else if (width <= high_res_max && width >= high_res_min) {
      $('body').removeClass('h hl large tp d hr').addClass('hr');
    }
    else if (width < default_screen && width >= small_screen) {
      $('body').removeClass('h hl large tp d hr').addClass('tp');
    }
    else if (width >= default_screen) {
      $('body').removeClass('h hl large tp d hr').addClass('d');
    }
    //window dimension
  }
};//boobstrap

$(document).ready(function() {
  boobstrap.view_port();
});//DOM

//$(window).load(function() {});

$(window).resize(function() {
  boobstrap.view_port();
  var body= $('body').attr('class');
});
