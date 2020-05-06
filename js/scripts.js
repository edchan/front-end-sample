$(document).ready(function() {
  var window_width = $(window).width();
  var a = 'a';
  var b = 'b';
  var menu_img = $('.below-main-image .menu img');

  var replace_img = function(display) {
    // Desktop view.
    menu_img.each(function(i, e){
      // Get desktop image.
      var img = $(e).attr('data-' + display + '-img');
      // Replace the image source.
      if (img !== undefined) {
        $(e).attr('src', 'images/' + img);
      }
    });
  }

  var swap_image = function(window_width) {
    if (window_width > 751) {
      replace_img('desktop');
    } else {
      replace_img('mobile');
    }
  }

  swap_image(window_width);

  $(window).resize(function(){
    var window_width = $(window).width();
    swap_image(window_width);
  });
});