require(['../config'],function () {
  require(['jquery',"jquery.cookie","template"],function ($,cookie,template) {
    var left = $('.left');
  	var midWrap = $('.middle');
  	var filter = $('.filter');
  	var largeWrap = $('.large');
  	var midImg = $('.middle img');
  	var largeImg = $('.large img');

    var ol = left.offset().left;
    var ot = left.offset().top;
    // console.log(ol);
    // console.log(ot);

    midWrap.on('mouseover',function (e) {
      var l = e.pageX - ol - 81;
      var t = e.pageY - ot - 81;
      // console.log(l);
      l = l<0? 0 :(l>162?162:l);
      t = t<0? 0 :(t>162?162:t);
      filter.css({"left":l,"top":t});
      largeImg.css({"left":-2*l,"top":-2*t});
      filter.show();
      largeWrap.show();

    });
    midWrap.on('mouseleave',function () {
      filter.hide();
      largeWrap.hide();
    });
      // 小图
    var imgs =$('.img-wrap img');
  	var arrowR = $('.glass-slide .arrow-right');
  	var arrowL = $('.glass-slide .arrow-left');
  	var imgWrap = $('.img-wrap');
    imgs.on('mouseover',function () {
      var src = $(this).attr('data-url');
      midImg.attr({"src":src});
      largeImg.attr({"src":src});
      $(imgs).removeClass("active");
      $(this).addClass("active");
    });
    // 左右点击
    var index = 0;
    arrowR.on("click",function () {
      index ++;
      console.log(index);
      if (index > imgs.length - 3) {
          index = imgs.length - 3;
          return;
      }
      imgWrap.stop();
      imgWrap.css({"marginLeft":-88*index});
    });
    arrowL.on("click",function () {
      index --;
      if (index <0 ) {
        index = 0;
        return;
      }
      imgWrap.stop();
      imgWrap.css({"marginLeft":-88*index});
    });
    // 右边购物车
    var detail = {
      // data = {},
      init:function () {
        var _this = this;
        $.getJSON('json/detail-data.json',function (result) {
          // 获取并保留数据
          _this.data = result;
          console.log(result);
          // 通过id获取模板代码，然后与data 数据结合，返回编译后的html代码
          var list = template('type-list',result);
          // 打印字符串按照模板到页面
          $('.color-content').html(list);
          // 设置第一个为选中状态
          var first =  $('.color-content li:first');
          first.addClass('selected');

          var id = first.data('id');
          $('.goods-price').html( 4);
           $('.stock-num').html(9);
           $('.goods-price').html( result.color[id].sale_price );
 				  $('.stock-num').html( result.color[id].stock );
        });
        this.colorSwitch();
        this.increase();
        this.decrease();
        this.input();
        this.addToCart();
      },
      colorSwitch: function(){
    var _this = this;
    $('.color-content').on('click','.tb-con-item',function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      var id = $(this).data('id');
      $('.goods-price').html( _this.data.color[id].sale_price );
      $('.stock-num').html( _this.data.color[id].stock );
    });
  },
      increase:function functionName() {
        $('.amount-increase').click(function () {
          var amount = parseInt($(this).prev().val());
          var stock = $('.stock-num').html();
          if (amount >=stock) return;
          amount++;
          $(this).prev().val(amount);
        });
      },
      decrease:function () {
          $('.amount-decrease').click(function () {
            var input = $(this).parent().find('.amount-input');
            var amount = parseInt(input.val());
            if(amount<=1) return;
            amount--;
            input.val(amount);
          });
      },
      input:function () {
        $('.amount-input').on('input',function () {
          var amount = $(this).val();
          if (amount === '') return;
          amount = parseInt(amount);
          if (isNaN(amount)) {
            amount = 1;
          }
          var stock = $('.stock-num').html();
          if (amount>=stock) {
            amount = stock;
          }
          $(this).val(amount);
        });
        $('.amount-input').blur(function () {
          var amount = $(this).val();
          if (amount === '') {
            $(this).val(1);
          }
        }
      );
    },
    addToCart:function () {
      $('.option-addCart').click(function () {
        var goods =$('.tb-con-item.selected');
        var id = goods.data('id');
        var amount = parseInt($('.amount-input').val());
        var cart = $.cookie('tm-cart') || '{}';
        cart = JSON.parse(cart);

        if (!cart[id]) {
          cart[id] = {
            id:id,
            amount:amount
          };
        }else {
          cart[id].amount +=amount;
        }

        alert('加入成功');
        $.cookie('tm-cart',JSON.stringify(cart),{expires:365,path:'/'});
        console.log(JSON.parse($.cookie('tm-cart')));
      });
    }
 };
    detail.init();

// 分隔线
  });
});
