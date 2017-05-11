'use strict';
$(function () {
  var allItem = $('.sfq .sitem');
  allItem.mouseenter(function () {
    $(this).stop(true).animate({width:400}).siblings().stop(true).animate({width:133});
    $(this).find('.cover').hide();
    $(this).mouseleave(function () {
          $(this).find('.cover').show();
    });
    $('.sfq').mouseenter(function () {
      allItem.stop(true).animate({width:171});
    });
  });
});
