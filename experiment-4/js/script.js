$(function() {

  "use strict";

  var wheight = $(window).height() - 80;

  $('.jumbotron').css('height', wheight);

  $(window).resize(function() {
    wheight = $(window).height() - 80;
    $('.jumbotron').css('height', wheight);
  });

});
