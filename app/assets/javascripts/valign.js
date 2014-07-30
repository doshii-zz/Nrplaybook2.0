(function($){
  $.fn.vAlign = function() {
    return this.each(function(i){
      var $elem = $(this);
      var elemH = $elem.height();
      var parentH = $elem.parent().height();
      var margin = Math.ceil((parentH-elemH) / 2);
      $elem.css('margin-top', margin);
    });
  };
})(jQuery);
