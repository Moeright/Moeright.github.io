
require(['../config'],function(){
	require(['jquery','jquery.cookie'],function($){

		$('.btn-login').click(function(){
			var account = $('.account').val();
			var psw = $('.password').val();
			if(account=='' || psw == ''){
				alert('用户名或者密码不能为空');
				return;
			}
			$.ajax({
				type: 'post',
				url: 'http://10.9.151.199/PC-Project-Admin/login.php',
				data: {
					account: account,
					password: psw
				},
				dataType: 'jsonp',
				success: function(result){
					if(result.status) {
						alert('登录成功!!!');
							var userinfo = {
								account: account,
								login_status: 1
							};
							$.cookie('userinfo',JSON.stringify(userinfo),{expires: 60,path: '/'});
						location.href = 'index.html';
					}else{
						alert('登录失败');
					}
				}
			});
		});
	});
});
