$(function(){
	$('.radio-box').each(function(i){
		$('.radio-box').find('img').click(function(){
			if($(this).attr('src')=='img/button2.jpg'){
				$(this).attr('src','img/button1.jpg');
				$('.radio-box').find('input').attr('checked',true);
				$('.radio-box').not($('.radio-box').eq(i)).find('img').attr('src','img/button2.jpg');
				$('.radio-box').not($('.radio-box').eq(i)).find('input').removeAttr('checked');
			};
		});
	});
	$('.delete').each(function(){
		$(this).click(function(){
			$(this).parents('li').remove();
		});
	});
});
$(function(){
	$('.quick>li').each(function(i){
		$(this).find('label').click(function(){
			$(this).css('border-color','red');
			$('.quick>li').not($('.quick>li').eq(i)).find('label').css('border-color','#d1d1d1');
			$('.bank>li>label').css('border-color','#d1d1d1');
		});
	});
	$('.bank>li').each(function(i){
		$(this).find('label').click(function(){
			$(this).css('border-color','red');
			$('.bank>li').not($('.bank>li').eq(i)).find('label').css('border-color','#d1d1d1');
			$('.quick>li>label').css('border-color','#d1d1d1');
		});
	});
});
$(function(){
	$('.reduce').click(function(){
		var num=$('.count-input').val();
		if (num>1) {
			$('.count-input').val(--num);
		};
	});
	$('.add').click(function(){
		var num=$('.count-input').val();
		if (num<8) {
			$('.count-input').val(++num);
		};
	});
	$('.count-input').change(function() {
		if(/^\d+$/.test(this.value) && this.value>=1){
			if(parseInt(this.value)>=8){
				$(this).val(8);
			}
		}else{
			$(this).val(1);
		}
	});
});
$(function(){
	$('.write').each(function(){
		var oldVal=$(this).val();
		$(this).focus(function(){
			$(this).val('');
		});
		$(this).blur(function(){
			if ($(this).val()=="") {
				$(this).val(oldVal);
			};
		});
	});
	var oldHtlm=$('textarea').html();
	$('textarea').focus(function(){
		$('textarea').html('');
		$('textarea').val('');
	});
	$('textarea').blur(function(){
		console.log($(this).html());
		if ($('textarea').val()=="") {
			$('textarea').val(oldHtlm);
		}
	});
});
$(function(){
	$('.con-pay').click(function(){
		window.location.href="pay_success.html";
	});
});
$(function(){
	var i=0;
	$('#rightShift').click(function(){
		if(i<($('.mob-core>div>ul>li').length-1)){
			i++;
			console.dir(i);
			$('.mob-core>div>ul>li').eq(i).css('display','inline-block');
			$('.mob-core>div>ul>li').eq(i).siblings().css('display','none');
			$('#count b').html(i+1)
		}
	});
	$('#leftShift').click(function(){
		if(i>0){
			i--;
			console.dir(i);
			$('.mob-core>div>ul>li').eq(i).css('display','inline-block');
			$('.mob-core>div>ul>li').eq(i).siblings().css('display','none');
			$('#count b').html(i+1)
		}
	});
});
$(function(){
	$('#choice').click(function(){
		if ($(this).attr('src')=='img/register2.jpg') {
			$(this).attr('src','img/register3.jpg')
		} else{
			$(this).attr('src','img/register2.jpg')
		}
	});
});


