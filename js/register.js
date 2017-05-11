/*!
	注册页面  js
*/

//加载配置文件
require(['../config'],function(){

	//加载需要用到的模块
	require(['jquery'],function($){

		//注册处理

		//定义各个注册信息的状态  默认都是false
		var  regStatus = {
			uname: false,
			psw: false,
			phone: false,
			again:false
		};

		//定义需要用到的变量
		var unameInput = $('form .account'),
			pswInput = $('form .password'),
			phoneInput = $('form .phone'),
			againInput = $('form .again'),
			regBtn = $('.btn-reg'),
			error_phone = $('.error_phone'),
			error_name = $('.error_name'),
			error_psw = $('.error_psw');
			error_again = $('.error_again');


		//账号验证 (失焦验证  1、用户名是否合法  2、用户名是否已经存在)
		var regUname = /^[a-zA-Z_]\w{5,15}$/;

		unameInput.blur(function(){
			var uname = unameInput.val();
			//假设用户名正确
			regStatus.uname = true;

			//判断用户名是否合法
			if(!regUname.test(uname)){
				// alert('');
				error_name.html('用户名不合法');
				regStatus.uname = false;
				return;
			}
			//判断用户名是否已被注册
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

		//密码验证
    pswInput.on('input',function () {
      var regPsw = /^[\w!@#$%^&*_+]{6,16}$/;
  		pswInput.blur(function(){
  			var psw = pswInput.val();
				var error_psw = $('.error_psw');
  			regStatus.psw = true;
  			//密码处理...
        //判断密码是否合法
  			if(!regPsw.test(psw)){
  				error_psw.html('密码不合法');
  				regStatus.psw = false;
  				return;
  			}else {
  				error_psw.html('密码可用！');
  			}
  		});
    });

		//再次验证密码
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


		//手机号验证
    phoneInput.on('input',function () {
      var regPhone = /^1[3578]\d{9}$/;
      phoneInput.blur(function(){
        var phone = phoneInput.val();
				var error_phone = $('.error_phone');
        regStatus.phone = true;
        //手机号处理...
        //判断密码是否合法
        if(!regPhone.test(phone)){
        error_phone.html('手机号不合法');
          regStatus.phone = false;
          return;
        }else {
        	error_phone.html('恭喜！可用。');
        }
      });
    });


		//点击登录
		regBtn.click(function(){

			//判断所有的信息状态，如果有不合法的，不能注册
			for(var i in regStatus){
				//如果找到某个输入不合法，做出相应的提示并返回
				if(!regStatus[i]){
					// alert('部分数据不合法');
					return;
				}
			}

			//通过ajax提交表单数据
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
