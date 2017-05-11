
require(['../config'],function(){

	require(['jquery'],function($){
		var  regStatus = {
			uname: false,
			psw: false,
			phone: false,
			again:false
		};
		var unameInput = $('form .account'),
			pswInput = $('form .password'),
			phoneInput = $('form .phone'),
			againInput = $('form .again'),
			regBtn = $('.btn-reg'),
			error_phone = $('.error_phone'),
			error_name = $('.error_name'),
			error_psw = $('.error_psw');
			error_again = $('.error_again');
		var regUname = /^[a-zA-Z_]\w{5,15}$/;

		unameInput.blur(function(){
			var uname = unameInput.val();
			regStatus.uname = true;
			if(!regUname.test(uname)){
				error_name.html('用户名不合法');
				regStatus.uname = false;
				return;
			}
			$.ajax({
				url: 'http://10.9.151.199/PC-Project-Admin/checkAccount.php',
				data: {
					account: uname
				},
				dataType: 'jsonp',
				success: function(result){
					if(result.status){
						error_name.html('恭喜！用户名可用');
					}else{
						error_name.html('用户名已存在');
						regStatus.uname = false;
					}
				}
			});
		});
    pswInput.on('input',function () {
      var regPsw = /^[\w!@#$%^&*_+]{6,16}$/;
  		pswInput.blur(function(){
  			var psw = pswInput.val();
				var error_psw = $('.error_psw');
  			regStatus.psw = true;
  			if(!regPsw.test(psw)){
  				error_psw.html('密码不合法');
  				regStatus.psw = false;
  				return;
  			}else {
  				error_psw.html('密码可用！');
  			}
  		});
    });
		againInput.on('input',function () {
			againInput.blur(function () {
				var content = againInput.val();
				regStatus.again = true;
				var error_again = $('.error_again');
				var psw = pswInput.val();
				if (content == psw) {
						error_again.html('密码一致');
				}else {
						error_again.html('两次密码不一致！');
						regStatus.again = false;
						return;
				}
			});
		});
    phoneInput.on('input',function () {
      var regPhone = /^1[3578]\d{9}$/;
      phoneInput.blur(function(){
        var phone = phoneInput.val();
				var error_phone = $('.error_phone');
        regStatus.phone = true;
        if(!regPhone.test(phone)){
        error_phone.html('手机号不合法');
          regStatus.phone = false;
          return;
        }else {
        	error_phone.html('恭喜！可用。');
        }
      });
    });

		regBtn.click(function(){
			for(var i in regStatus){
				if(!regStatus[i]){
					return;
				}
			}
			$.ajax({
				type: 'post',
				url: 'http://10.9.151.199/PC-Project-Admin/register.php',
				data: {
					account: unameInput.val(),
					password: pswInput.val()
				},
				dataType: 'jsonp',
				success: function(result){
					if(result.status){
						alert('注册成功');
						location.href = 'login.html';
					}else{
						alert('注册失败');
					}
				}
			});
		});
	});
});
