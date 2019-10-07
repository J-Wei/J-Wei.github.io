$(function(){
	$('.collection').click(function () {
        add();
    });
    
    
    
    
    
    var storage=window.localStorage;
    for(var i = 0;i<storage.length;i++){
    	var key=storage.key(i);
    	var value=storage.getItem(key);
    	$('#shop-center').append(value);
    }
    
    
    
    $('.delete').each(function () {
        $(this).click(function () {
            var a = $(this).index();
            	localStorage.removeItem(a);
        });
    });
});




function local(){
    var localStorage=window.localStorage;
    if(localStorage.length==0){
        $('#shop-center').html('');
    }
}





function add(){
	//获取数据
	var numVal = document.getElementById('num').value;
	var proName = document.getElementById('pro-name').innerHTML;
	var priceVal = document.getElementById('price').innerHTML;
	var shopImg = document.getElementById('shopImg').src;
	var minTotal=0.00;
	minTotal=(numVal*priceVal).toFixed(2);
	var key=localStorage.length;
	var str="<li class='clearfix'>"
			+"<div class='myCheckbox pull-left'>"
			+"<img src='img/shop_list3.jpg' alt='shop_list3.jpg'/>"
			+"<input class='check-one check' type='checkbox' />"
			+"</div>"
			+"<div class='goods pull-left'>"
			+"<a href='pro_details.html'>"+"<img src='"+shopImg+"' alt='shop_list1.jpg'/>"+"</a>"
			+"</div>"
			+"<div class='intro pull-left'>"+"<a href='pro_details.html'>"+proName+"</a>"+"</div>"
			+"<div class='pull-left'>"+"￥"+"<b class='price'>"+priceVal+"</b>"+"</div>"
			+"<div class='count pull-left'>"
			+"<span class='reduce'>"+"－"+"</span>"
			+"<input class='count-input' type='text' value='"+numVal+"' />"
			+"<span class='add'>"+"＋"+"</span>"
			+"</div>"
			+"<div class='pull-left'>"+""+"<b class='subtotal'>"+minTotal+"</b>"+"</div>"
			+"<div class='operation pull-left'>"
			+"<span class='delete'>"+"删除"+"</span>"
			+"<input type='hidden'  class='max-count' value='8'>"
			+"</div>"
			+"</li>";
	localStorage.setItem(key,str);
}