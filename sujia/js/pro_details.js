$(function(){
	$('#add').click(function(){
		var num=$('#count-input').val();
		if (num<20) {
			$('#count-input').val(++num);
		}
	});
	$('#minus').click(function(){
		var num=$('#count-input').val();
		if (num>1) {
			$('#count-input').val(--num);
		}
	});
	var oldNum=$('#count-input').val();
	$('#count-input').change(function(){
		if(/^\d+$/.test(this.value) && this.value>=1){
			if(parseInt(this.value)>=20){
				$(this).val(20);
			}
		}else{
			$(this).val(oldNum);
		}
	});
});
$(function(){
	$('.center>.pro-top>.details>h4>span').each(function(){
		$(this).click(function(){
			$(this).attr('class','on').siblings().removeAttr('class');
			$(this).attr('id','weight').siblings().removeAttr('id');
		})
	});
});
$(function(){
	$('.addcart').click(function () {
		alert('加入购物车成功！');
        add();
    });
});
$(function(){
	$('.center>.pro-right>.head>div>a').each(function(i){
		$(this).click(function(){
			$(this).attr('class','on').siblings().removeAttr('class');
			$('.center>.pro-right>#pro-cor>div').eq(i).css('display','block');
			$('.center>.pro-right>#pro-cor>div').eq(i).siblings().css('display','none');
		});
	});
	$('.center>.pro-right>#pro-cor>.con-det>.core>ul>li').click(function(){
		$(this).attr('class','on').siblings().removeAttr('class')
	});
});

function add(){
	//获取数据
	var numVal = document.getElementById('count-input').value;
	var proName = document.getElementById('name').innerHTML;
	var oldPrice = document.getElementById('oldPrice').innerHTML;
	var newPrice = document.getElementById('newPrice').innerHTML;
	var shopImg = document.getElementById('shopImg').src;
	var proWeight = document.getElementById('weight').innerHTML;
	var maxNum = document.getElementById('maxNum').innerHTML;
	var minTotal=0.00;
	minTotal=(numVal*newPrice).toFixed(2);
	var key=localStorage.length;
	var str="<li class='clearfix' data-key='"+key+"'>"+"<div class='click-box'>"+"<div>"+"</div>"+"<input class='check-one check' type='checkbox' />"+"</div>"+"<div class='pic-box'>"
					+"<a href='pro_details.html'>"+"<img src='"+shopImg+"' alt='index10.jpg' class='price'/>"+"</a>"
				+"</div>"
				+"<div class='name-box'>"
					+"<p class='name'>"+"<a href='pro_details.html'>"+proName+"</a>"+"</p>"
					+"<p>重量："+"<span class='weight'>"+proWeight+"</span>"+"</p>"
				+"</div>"
				+"<div class='price-box'>"
					+"<p>￥"+"<span class='price'>"+newPrice+"</span>"+"</p>"
					+"<p>￥"+"<span class='old'>"+oldPrice+"</span>"+"</p>"
				+"</div>"
				+"<div class='num-box'>"
					+"<span class='reduce'>-</span>"
					+"<input type='text' value='"+numVal+"' class='num'/>"
					+"<span class='add'>+</span>"
				+"</div>"
				+"<div class='subtotal-box'>￥"+"<span class='subtotal'>"+minTotal+"</span>"+"</div>"
				+"<div class='operation'>"
					+"<p class='collec'>收藏</p>"
					+"<p class='delete'>删除</p>"
					+"<input type='' name='' id='' value='"+maxNum+"' class='max-count'/>"
				+"</div>"
			+"</li>"
	localStorage.setItem(key,str);
}











