require(['../config'],function () {
  require(['jquery',"jquery.cookie","template","layer"],function ($,cookie,template,layer) {
    layer.config({
      path:"js/plug/layer/"
    });
	var cart = {
		cart: {},
		data: {},
		cartMain: $('.cart-main-content'),
		init: function(){
			var _this = this;
			this.readCookie();
			$.getJSON('json/detail-data.json',function(data){
				_this.data = data;
				var result = {
					cart:_this.cart,
					data: data
				};
				var list = template('cart-list',result);
				_this.cartMain.html( list );
			});
			this.increase();
			this.decrease();
			this.input();
			this.delete();
			this.deleteSelect();
			this.select();
			this.selectAll();
		},
		increase: function(){
			var _this = this;
			this.cartMain.on('click','.amount-increase',function(){
				var amount = parseInt(  $(this).prev().val() );
				var stock = $(this).parent().data('stock');
				if(amount >= stock) return;
				amount++;
				_this.handleMoney( $(this), amount );
			});
		},
		decrease: function(){
			var _this = this;
			this.cartMain.on('click','.amount-decrease',function(){
				var amount = parseInt( $(this).next().val() );
				if(amount <= 1) return;
				amount--;
				_this.handleMoney( $(this), amount );
			});
		},
		input: function(){
			var _this = this;
			this.cartMain.on('input','.amount-input',function(){
				var amount = parseInt( $(this).val() );
				_this.handleMoney( $(this), amount );
			});
		},
		handleMoney: function(obj,amount){
			var money = amount * obj.parents('.cart-goods-item')
					.find('.goods-price').html();

			obj.parents('.cart-goods-item')
				.find('.goods-money').html( money.toFixed(2) );

			obj.parent().find('.amount-input').val(amount);
			var id = obj.parents('.cart-goods-item').data('id');
			this.cart[id].amount = amount;
			this.setCookie();

			this.handleInfo();
		},
		delete: function(){
			var _this = this;
			this.cartMain.on('click','.delete',function(){
				var that = this;
				layer.confirm('确定删除吗？',function(){
					layer.closeAll();
					$(that).parents('.cart-goods-item').remove();
					var id = $(that).parents('.cart-goods-item').data('id');
					delete _this.cart[id];
					_this.setCookie();
				});
			});
		},
		deleteSelect: function(){
			var _this = this;
			$('.cart-option .delete').click(function(){
				var allChecked = _this.cartMain.find('input[type=checkbox]:checked');
				if(allChecked.length <= 0){
					layer.alert('请选择商品');
					return;
				}
				layer.confirm('确认删除选中的商品吗？',function(){
					allChecked.each(function(){
						layer.closeAll();
						$(this).parents('.cart-goods-item').remove();
						var id = $(this).parents('.cart-goods-item').data('id');
						delete _this.cart[id];
						_this.setCookie();
						_this.handleInfo();
						$('input.select-all-btn').prop('checked',false);
					});
				});
			});
		},
		select: function(){
			var _this = this;
			this.cartMain.on('change','input[type=checkbox]',function(){
				_this.handleInfo();
				var allChecked = _this.cartMain.find('input[type=checkbox]:checked');
				var allCheckBox = _this.cartMain.find('input[type=checkbox]');
				if(allChecked.length === allCheckBox.length){
					$('input.select-all-btn').prop('checked',true);
				}else{
					$('input.select-all-btn').prop('checked',false);
				}
			});
		},
		selectAll: function(){
			var _this = this;
			$('input.select-all-btn').click(function(){
				var status = $(this).prop('checked');
				_this.cartMain.find('input').prop('checked',status);
				_this.cartMain.find('input').change();
				$('input.select-all-btn').prop('checked',status);
			});
		},
		handleInfo: function(){
			var allChecked = this.cartMain.find('input[type=checkbox]:checked');
			var totalNum = 0;
			var totalMoney = 0;
			allChecked.each(function(){
				totalNum++;
				var m = $(this).parents('.cart-goods-item').find('.goods-money').html();
				totalMoney += parseFloat( m );
			});
			if(totalNum > 0){
				$('.go-pay').addClass('can-pay');
			}else{
				$('.go-pay').removeClass('can-pay');
			}
			$('.user-goods-amount').html( totalNum );
			$('.user-goods-money').html( totalMoney.toFixed(2) );
		},
		readCookie: function(){
			this.cart = $.cookie('tm-cart') || '{}';
			this.cart = JSON.parse( this.cart );
		},
		setCookie: function(){
			$.cookie('tm-cart',JSON.stringify(this.cart),{expires: 60,path: '/'});
		}
	};
	cart.init();
        // 分隔线
  });
});
