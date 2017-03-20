$(function() {
  $(window).resize(function() {
      if ($(window).width() < 767) {
        $('nav').addClass("closed");
        $('nav').click(function() {
          $(this).toggleClass("open closed");
        });
      }
    })
    .resize();
});

$(function() {
  $('main').css('background-position', '0' + -$(document).scrollTop() / 2 + 'px');
  $(document).scroll(function() {
    $('main').css('background-position', '0' + -$(document).scrollTop() / 2 + 'px');
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = $(this.hash).length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('nav').addClass("closed");
        return false;
      }
    }
  });
});

$(function() {
  var wheight = $(window).height() - $('nav ul').height();

  $(function() {
    $(window).resize(function() {
      wheight = $(window).height() - $('nav ul').height();
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('nav').css('background-color', '#323232').fadeIn(500);
      } else {
        $('nav').css('background-color', 'transparent').fadeIn(500);
      }
    });
  });
});
