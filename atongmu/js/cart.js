$(function(){
	$('.select-all').find('img').click(function(){
		if($(this).attr('src')=='img/shop_list2.jpg'){
			$(this).attr('src','img/shop_list3.jpg');
			$('.radio-box').find('input').removeAttr('checked');
			$('.radio-box').find('img').attr('src','img/shop_list3.jpg');
		}
		else{
			$(this).attr('src','img/shop_list2.jpg');
			$('.radio-box').find('input').attr('checked','ture');
			$('.radio-box').find('img').attr('src','img/shop_list2.jpg');
		}
	});
	$('.radio-box').each(function(v){
		$(this).find('img').click(function(){
			if($(this).attr('src')=='img/shop_list2.jpg'){
				$(this).attr('src','img/shop_list3.jpg');
				$('.radio-box').eq(v).find('input').removeAttr('checked');
			}
			else{
				$(this).attr('src','img/shop_list2.jpg');
				$('.radio-box').eq(v).find('input').attr('checked','ture');
			}
		});
	});
	$('.delete').each(function () {
        $(this).click(function () {
        	if (confirm('确定删除!')) {
        		$(this).parents('li').remove();
        	}
        	calTotal();
        });
    });
	$('.radio-box').find('img').click(function(){
		if ($('.radio-box').find('input').length==$('.radio-box').find('input').filter(':checked').length) {
			$('.select-all').find('img').attr('src','img/shop_list2.jpg');
		}else{
			$('.select-all').find('img').attr('src','img/shop_list3.jpg');
		};
		calTotal();
	});
	$('.mob-delete').click(function(){
		$(this).parents('li').remove();
	});
});
$(function(){
	$('.marquee').find('img').click(function(){
		if($(this).attr('src')=='img/shop_list2.jpg'){
			$(this).attr('src','img/shop_list3.jpg');
		}
		else{
			$(this).attr('src','img/shop_list2.jpg');
		}
	});
	$('.myCheckbox').each(function(k){
		$(this).find('img').click(function(){
			if($(this).attr('src')=='img/shop_list2.jpg'){
				$(this).attr('src','img/shop_list3.jpg');
				$('.check-one').eq(k).removeAttr('checked');
			}
			else{
				$(this).attr('src','img/shop_list2.jpg');
				$('.check-one').eq(k).attr('checked','ture');
			}
		});
	});
});
$(function(){
	$('.marquee').find('img').click(function(){
		if ($(this).attr('src')=='img/shop_list2.jpg') {
			$('.check-one').attr('checked','ture');
			$('.myCheckbox').find('img').attr('src','img/shop_list2.jpg');
		} else{
			$('.check-one').removeAttr('checked');
			$('.myCheckbox').find('img').attr('src','img/shop_list3.jpg');
		}
		calTotal();
	});
	$('.myCheckbox').find('img').click(function(){
		if ($('.check-one').length==$('.check-one').filter(':checked').length) {
			$('.marquee').find('img').attr('src','img/shop_list2.jpg');
		}else{
			$('.marquee').find('img').attr('src','img/shop_list3.jpg');
		};
		calTotal();
	});
	$('.count-input').each(function(i){
		$('.add').eq(i).click(function(){
			var num=$('.count-input').eq(i).val();
			var maxNum=$('.max-count').eq(i).val();
			if(num >=maxNum){
				return ;
			}
			$('.count-input').eq(i).val(++num);
			$('.count-input').eq(i).trigger('change');
		});
		$('.reduce').eq(i).click(function(){
			var num=$('.count-input').eq(i).val();
			if(num <=1){
				return ;
			}
			$('.count-input').eq(i).val(--num);
			$('.count-input').eq(i).trigger('change');
		});
		var oldNum=$(this).val();
		$(this).change(function(){
			var price=$('.price').eq(i).val();
			var maxCout=$('.max-count').eq(i).val();
			if(/^\d+$/.test(this.value) && this.value>=1){
				if(parseInt(this.value)>=maxCout){
					$(this).val(maxCout);
				}
			}else{
				$(this).val(oldNum);
			}
			var num=this.value;
			$('.subtotal').eq(i).html((price*num).toFixed(2));
			calTotal();
		})
	});
});
function calTotal(){
	var checkbox=$('.check-one');
	var price=$('.price');
	var num=$('.count-input');
	var minTotal=$('.subtotal');
	var sum=0.00;
	checkbox.each(function(i){
		minTotal[i].innerHTML=(price[i].innerHTML*num[i].value).toFixed(2);
		if(checkbox[i].checked==true){
			sum+=parseFloat(minTotal[i].innerHTML);
		}
	});
	var count=$('.check-one').filter(':checked').length;
	$('#selectedTotal').html(count);
	$('#priceTotal').find('b').html(sum.toFixed(2));
};