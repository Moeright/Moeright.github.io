/*
	首页
*/
require(['../config'],function(){
	require(['jquery','bootstrap','layer',"template","xuanxiangka","sfq","jquery.cookie"],function($,bt,layer,template,xuanxiangka,sfq){
		layer.config({
		  path: 'js/plug/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
		});
		// 轮播
		$(document).ready(function(){
	  $('#carousel-ad').carousel({interval:5000});//每隔5秒自动轮播
	  });
		// 国内
		var tab_con2 = $(".tab-con2");
		// 一排
		var tab_con_item2 = $(".tab-con-item2");
		// 单个
		var jsonitem = $(".jsonitem");
		$.ajax({
			type:"get",
			url:'../json/guonei-data.json',
			dataType:"json",
			success:function (data) {
				var result = data;
				console.log(result);
				$(".tab-con-item2").each(function (i) {
					$(this).find(jsonitem);
					console.log();
					var dd =  `
						 <div class="innercon">
							<div class="mask"> <img src="${result[i][0].pic}" alt="" />
							 <span class="span1">${result[i][0].span1}</span>
							</div>
							 <p class="p1">${result[i][0].des}</p>

							</div>
							<div class="innercon">
									<div class="mask">	<img src="${result[i][1].pic}" alt="" />
										<span class="span1">${result[i][1].span1}</span></div>
									<p class="p1">${result[i][1].des}</p>

							</div>
							<div class="innercon">
											<div class="mask"><img src="${result[i][2].pic}" alt="" />
											<span class="span1">${result[i][2].span1}</span></div>
										<p class="p1">${result[i][2].des}</p>

							</div>
							<div class="innercon">
											<div class="mask">	<img src="${result[i][3].pic}" alt="" />
												<span class="span1">${result[i][3].span1}</span></div>
											<p class="p1">${result[i][3].des}</p>

							</div>
				`
				$(this).find(jsonitem).html(dd);
				});
			}
		});
		$(function(){
		  var allCon2 = $('.tab2 .tab-con2 .tab-con-item2');
		  $('.tab2 .tab-nav2  .tab-nav-item2').click(function(){
		    //处理选中状态
		    $(this).addClass('active2').siblings().removeClass('active2');
		    allCon2.eq( $(this).index() ).show().siblings().hide();
		  });
		});
		//haiwai
		var tab_con3 = $(".tab-con3");
		// 一排
		var tab_con_item3 = $(".tab-con-item3");
		// 单个
		var jsonitem3 = $(".jsonitem3");
		$.ajax({
			type:"get",
			url:'../json/haiwai-data.json',
			dataType:"json",
			success:function (data) {
				var result = data;
				console.log(result);
				$(".tab-con-item3").each(function (j) {
					$(this).find(jsonitem3);

					var rr =  `
						 <div class="innercon3">
							<div class="mask3"> <img src="${result[j][0].pic}" alt="" />
							 <span class="span3">${result[j][0].span3}</span>
							</div>
							 <p class="p3">${result[j][0].des}</p>

							</div>
							<div class="innercon3">
									<div class="mask3">	<img src="${result[j][1].pic}" alt="" />
										<span class="span3">${result[j][1].span3}</span></div>
									<p class="p3">${result[j][1].des}</p>

							</div>
							<div class="innercon3">
											<div class="mask3"><img src="${result[j][2].pic}" alt="" />
											<span class="span3">${result[j][2].span3}</span></div>
										<p class="p3">${result[j][2].des}</p>

							</div>
							<div class="innercon3">
											<div class="mask3">	<img src="${result[j][3].pic}" alt="" />
												<span class="span3">${result[j][3].span3}</span></div>
											<p class="p3">${result[j][3].des}</p>

							</div>
				`
				$(this).find(jsonitem3).html(rr);
				});
			}
		});
		$(function(){
			var allCon3 = $('.tab3 .tab-con3 .tab-con-item3');
			$('.tab3 .tab-nav3  .tab-nav-item3').click(function(){
				//处理选中状态
				$(this).addClass('active3').siblings().removeClass('active3');
				allCon3.eq( $(this).index() ).show().siblings().hide();
			});
		});
		// 机票

		var tab_con4 = $(".tab-con4");
		// 一排
		var tab_con_item4 = $(".tab-con-item4");
		// 单个
		// var jsonitem3 = $(".jsonitem3");
		$.ajax({
			type:"get",
			url:'../json/jipiao-data.json',
			dataType:"json",
			success:function (data) {
				var result = data;
				console.log(result);
				$(".tab-con-item4").each(function (j) {
					var rr =  `
							<div class="innercon4">
							<a href=""  class="lu4">
							<span class="span41">${result[j][0].start}</span>
							<span class="span42"></span>
							<span class="span43">${result[j][0].end}</span>
							</a>
							<a href=""  class="jiage4">
							<span class="span44">${result[j][0].time}</span>
							<span class="span45">${result[j][0].discount}</span>
							<span class="span46">${result[j][0].price}</span>
							</a>
							</div>
							<div class="innercon4">
							<a href=""  class="lu4">
							<span class="span41">${result[j][1].start}</span>
							<span class="span42"></span>
							<span class="span43">${result[j][1].end}</span>
							</a>
							<a href=""  class="jiage4">
							<span class="span44">${result[j][1].time}</span>
							<span class="span45">${result[j][1].discount}</span>
							<span class="span46">${result[j][1].price}</span>
							</a>
							</div>
							<div class="innercon4">
							<a href=""  class="lu4">
							<span class="span41">${result[j][2].start}</span>
							<span class="span42"></span>
							<span class="span43">${result[j][2].end}</span>
							</a>
							<a href=""  class="jiage4">
							<span class="span44">${result[j][2].time}</span>
							<span class="span45">${result[j][2].discount}</span>
							<span class="span46">${result[j][2].price}</span>
							</a>
							</div>
							<div class="innercon4">
							<a href=""  class="lu4">
							<span class="span41">${result[j][3].start}</span>
							<span class="span42"></span>
							<span class="span43">${result[j][3].end}</span>
							</a>
							<a href=""  class="jiage4">
							<span class="span44">${result[j][3].time}</span>
							<span class="span45">${result[j][3].discount}</span>
							<span class="span46">${result[j][3].price}</span>
							</a>
							</div>
							<div class="innercon4">
							<a href=""  class="lu4">
							<span class="span41">${result[j][4].start}</span>
							<span class="span42"></span>
							<span class="span43">${result[j][4].end}</span>
							</a>
							<a href=""  class="jiage4">
							<span class="span44">${result[j][4].time}</span>
							<span class="span45">${result[j][4].discount}</span>
							<span class="span46">${result[j][4].price}</span>
							</a>
							</div>
							<div class="innercon4">
							<a href=""  class="lu4">
							<span class="span41">${result[j][5].start}</span>
							<span class="span42"></span>
							<span class="span43">${result[j][5].end}</span>
							</a>
							<a href=""  class="jiage4">
							<span class="span44">${result[j][5].time}</span>
							<span class="span45">${result[j][5].discount}</span>
							<span class="span46">${result[j][5].price}</span>
							</a>
							</div>
				`
				$(this).html(rr);
				});
			}
		});
		$(function(){
			var allCon4 = $('.tab4 .tab-con4 .tab-con-item4');
			$('.tab4 .tab-nav4  .tab-nav-item4').click(function(){
				//处理选中状态
				$(this).addClass('active4').siblings().removeClass('active4');
				allCon4.eq( $(this).index() ).show().siblings().hide();
			});
		});
	// huochepiao
	var tab_con5 = $(".tab-con5");
	// 一排
	var tab_con_item5 = $(".tab-con-item5");
	// 单个
	// var jsonitem3 = $(".jsonitem3");
	$.ajax({
		type:"get",
		url:'../json/huochepiao-data.json',
		dataType:"json",
		success:function (data) {
			var result = data;
			console.log(result);
			$(".tab-con-item5").each(function (j) {
				var rr =  `
						<div class="innercon5">
						<a href=""  class="lu25">
						<span class="span51">${result[j][0].start}</span>
						<span class="span52"></span>
						<span class="span53">${result[j][0].end}</span>
						</a>
						<a href=""  class="jiage5">
						<span class="span54">${result[j][0].time}</span>
						<span class="span55">${result[j][0].discount}</span>
						<span class="span56">${result[j][0].price}</span>
						</a>
						</div>
						<div class="innercon5">
						<a href=""  class="lu25">
						<span class="span51">${result[j][1].start}</span>
						<span class="span52"></span>
						<span class="span53">${result[j][1].end}</span>
						</a>
						<a href=""  class="jiage5">
						<span class="span54">${result[j][1].time}</span>
						<span class="span55">${result[j][1].discount}</span>
						<span class="span56">${result[j][1].price}</span>
						</a>
						</div>
						<div class="innercon5">
						<a href=""  class="lu25">
						<span class="span51">${result[j][2].start}</span>
						<span class="span52"></span>
						<span class="span53">${result[j][2].end}</span>
						</a>
						<a href=""  class="jiage5">
						<span class="span54">${result[j][2].time}</span>
						<span class="span55">${result[j][2].discount}</span>
						<span class="span56">${result[j][2].price}</span>
						</a>
						</div>
						<div class="innercon5">
						<a href=""  class="lu25">
						<span class="span51">${result[j][3].start}</span>
						<span class="span52"></span>
						<span class="span53">${result[j][3].end}</span>
						</a>
						<a href=""  class="jiage5">
						<span class="span54">${result[j][3].time}</span>
						<span class="span55">${result[j][3].discount}</span>
						<span class="span56">${result[j][3].price}</span>
						</a>
						</div>
						<div class="innercon5">
						<a href=""  class="lu25">
						<span class="span51">${result[j][4].start}</span>
						<span class="span52"></span>
						<span class="span53">${result[j][4].end}</span>
						</a>
						<a href=""  class="jiage5">
						<span class="span54">${result[j][4].time}</span>
						<span class="span55">${result[j][4].discount}</span>
						<span class="span56">${result[j][4].price}</span>
						</a>
						</div>
						<div class="innercon5">
						<a href=""  class="lu25">
						<span class="span51">${result[j][5].start}</span>
						<span class="span52"></span>
						<span class="span53">${result[j][5].end}</span>
						</a>
						<a href=""  class="jiage5">
						<span class="span54">${result[j][5].time}</span>
						<span class="span55">${result[j][5].discount}</span>
						<span class="span56">${result[j][5].price}</span>
						</a>
						</div>
			`
			$(this).html(rr);
			});
		}
	});
	$(function(){
		var allCon5 = $('.tab5 .tab-con5 .tab-con-item5');
		$('.tab5 .tab-nav5 .tab-nav-item5').click(function(){
			//处理选中状态
			$(this).addClass('active5').siblings().removeClass('active5');
			allCon5.eq( $(this).index() ).show().siblings().hide();
		});
	});
// denglu
// 读取cookie，判断用户是否登录，填充信息
var userinfo = $.cookie('userinfo');

//如果有用户信息
if(userinfo){
	//将json字符串转化为json对象
	userinfo = JSON.parse(userinfo);
	//用户处于登录状态,更改信息
	if(userinfo.login_status){
		$('.gaideng').html( userinfo.account + '，<a href="javascript:;" class="logout">退出</a>' );
		$('.gaice').html('');
		$('.xian').html('');
	}else{
		$('.gaideng').html( userinfo.account + '，<a href="../login.html">请登录</a>,<a href="../register.html">免费注册</a>' );
			// $('.gaice').html('');
	}
}
console.log(userinfo);
//退出
$('.logout').click(function(){
	var info = {
		account: userinfo.account,
		login_status: 0
	};
	$.cookie('userinfo',JSON.stringify(info),{expires: 60,path: '/'});
	location.href = "../login.html";
});
// fengexian
	});
});
