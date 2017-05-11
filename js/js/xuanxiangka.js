'use strict';
$(function(){
  var allCon = $('.tab .tab-con-item');
  $('.tab .tab-nav-item').click(function(){
    //处理选中状态
    $(this).addClass('active').siblings().removeClass('active');
    allCon.eq( $(this).index('span') ).show().siblings().hide();
  });
});
$(function(){
  var allCon = $('.visit .visit-con-item');
  $('.visit .visit-nav-item').mouseenter(function(){
    //处理选中状态
    $(this).addClass('active').siblings().removeClass('active');
    allCon.eq( $(this).index() ).show().siblings().hide();
  });
});
