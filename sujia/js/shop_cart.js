$(function(){
	var storage=window.localStorage;
    for(var i = 0;i<storage.length;i++){
    	var key=storage.key(i);
    	var value=storage.getItem(key);
    	$('.list').append(value);
    };
    $('.delete').each(function (i) {
        $(this).click(function () {
        	$(this).parents('li').remove();
            var a = $(this).parents('li').attr('data-key');
            console.log(a);
            localStorage.removeItem(a);
            calTotal();
        });
    });
});

$(function(){
	$('.shop-name>div').click(function  () {
		if ($(this).attr('class')=='on') {
			$(this).removeAttr('class');
			$('.click-box>div').removeAttr('class');
			$('.check-one').removeAttr('checked');
		} else{
			$(this).attr('class','on');
			$('.click-box>div').attr('class','on');
			$('.check-one').attr('checked','ture');
		}
		calTotal();
	});
	$('.click-box').each(function  (j) {
		$(this).find('div').click(function(){
			if ($(this).attr('class')=='on') {
				$(this).removeAttr('class');
				$('.check-one').eq(j).removeAttr('checked');
			} else{
				$(this).attr('class','on');
				$('.check-one').eq(j).attr('checked','ture');
			}
			calTotal();
		});
	});
	$('.click-box>div').click(function(){
		if ($('.check-one').length==$('.check-one').filter(':checked').length) {
			$('.shop-name>div').attr('class','on');
		} else{
			$('.shop-name>div').removeAttr('class');
		}
		calTotal();
	});
	$('.add').click(function(){
		var num=$(this).siblings('.num').val();
		var maxNum=parseInt($(this).parents('li').find('.max-count').val());
		if(num<maxNum){
			$(this).siblings('.num').val(++num);
		}
		calTotal();
	});
	$('.reduce').click(function(){
		var num=$(this).siblings('.num').val();
		if(num>1){
			$(this).siblings('.num').val(--num);
		}
		calTotal();
	});
	$('.num').each(function(j){
		var oldNum=$(this).val();
		$(this).change(function(){
			var price=$('.price').eq(j).val();
			var maxCout=parseInt($('.max-count').eq(j).val());
			if (/^\d+$/.test(this.value) && this.value>=1) {
				if(parseInt(this.value)>=maxCout){
					$(this).val(maxCout);
				}
			} else{
				$(this).val(oldNum);
			}
			var num=this.value;
			$('.subtotal').eq(j).html((price*num).toFixed(2));
			calTotal();
		});
	});
});
function calTotal(){
	var checkbox=$('.check-one');
	var price=$('.price-box .price');
	var num=$('.num');
	var minTotal=$('.subtotal');
	var sum=0.00;
	checkbox.each(function(i){
		minTotal[i].innerHTML=(price[i].innerHTML*num[i].value).toFixed(2);
		if(checkbox[i].checked==true){
			sum+=parseFloat(minTotal[i].innerHTML);
		}
	});
	$('#total').html(sum.toFixed(2));
};
//function num(){
//	$('.add').each(function(j){
//		$('.add').eq(j).click(function(){
//			var num=$('.num').eq(j).val();
//			var maxNum=parseInt($('.max-count').eq(j).val());
//			if(num<maxNum){
//				$('.num').eq(j).val(++num);
//			}
//		});
//	});
//	$('.reduce').each(function(j){
//		$('.reduce').eq(j).click(function(){
//			var num=$('.num').eq(j).val();
//			if(num>1){
//				$('.num').eq(j).val(--num);
//			}
//		});
//	});
//};



































