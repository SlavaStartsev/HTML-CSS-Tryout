$(function() {
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('nav').addClass("closed");
            $('nav').click(function() {
                $(this).toggleClass("open closed");
            });
        }
    }).resize();
});

// $(function() {
//   $(document).scroll(function() {
//     $('main').css('top', -$(document).scrollTop() * 3.5 + 'px');
//   });
// });

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);

            target = $(this.hash).length
                ? target
                : $('[name=' + this.hash.slice(1) + ']');

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
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('nav').css('background-color', '#323232').fadeIn(3000);
        } else {
            $('nav').css('background-color', 'transparent').fadeIn(3000);
        }
    });
});
