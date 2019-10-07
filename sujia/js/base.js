$(function(){
	$('.nav .assort>h1').mouseenter(function(){
		$('.nav .assort>ul').css('display','block');
	});
	$('.nav .assort').mouseleave(function(){
		$('.nav .assort>ul').css('display','none');
	});
});
$(function(){
	var current=0;
	var Timer=null;
	$('.banner>ol>li').each(function(i){
		$(this).mouseover(function(){
			$(this).attr('class','on').siblings().removeAttr('class');
			$('.banner>ul>li').stop(true,true).eq(i).fadeIn('slow').siblings().css('display','none');
			current=i;
		});
	});
	Timer=setInterval(function(){
		if (current==$('.banner>ol>li').length-1) {
			current=-1
		}
		current++;
		$('.banner>ol>li').eq(current).trigger('mouseover');
	},3000);
	$('.banner>ul').hover(function(){
		clearInterval(Timer);
		console.log(1);
	},function(){
		Timer=setInterval(function(){
			if (current==$('.banner>ol>li').length-1) {
				current=-1
			}
			current++;
			$('.banner>ol>li').eq(current).trigger('mouseover');
		},3000);
	});
});
$(function(){
	var focus=0;
	var Timers=null;
	$('.hot>div>ol>li').each(function(i){
		$(this).mouseover(function(){
			$(this).attr('class','on').siblings().removeAttr('class');
			$('.hot>div>ul>li').stop(true,true).eq(i).fadeIn('slow').siblings().css('display','none');
			focus=i;
		});
	});
	Timers=setInterval(function(){
		if (focus==$('.hot>div>ol>li').length-1) {
			focus=-1
		}
		focus++;
		$('.hot>div>ol>li').eq(focus).trigger('mouseover');
	},3000);
	$('.hot>div>ul').hover(function(){
		clearInterval(Timers);
	},function(){
		Timers=setInterval(function(){
			if (focus==$('.hot>div>ol>li').length-1) {
				focus=-1
			}
			focus++;
			$('.hot>div>ol>li').eq(focus).trigger('mouseover');
		},3000);
	});
});
$(function(){
	var focus=0;
	var Timers=null;
	$('.recommend>div>ol>li').each(function(i){
		$(this).mouseover(function(){
			$(this).attr('class','on').siblings().removeAttr('class');
			$('.recommend>div>ul>li').stop(true,true).eq(i).fadeIn('slow').siblings().css('display','none');
			focus=i;
		});
	});
	Timers=setInterval(function(){
		if (focus==$('.recommend>div>ol>li').length-1) {
			focus=-1
		}
		focus++;
		$('.recommend>div>ol>li').eq(focus).trigger('mouseover');
	},3000);
	$('.recommend>div>ul').hover(function(){
		clearInterval(Timers);
	},function(){
		Timers=setInterval(function(){
			if (focus==$('.recommend>div>ol>li').length-1) {
				focus=-1
			}
			focus++;
			$('.recommend>div>ol>li').eq(focus).trigger('mouseover');
		},3000);
	});
});
$(function(){
	$('.stars>li').each(function(){
		$(this).click(function () {
			if ($(this).index()==0) {
				if ($(this).attr('class')=='on') {
					$(this).removeAttr('class');
					$(this).nextAll().removeAttr('class');
				} else{
					$(this).attr('class','on');
				}
			} else{
				$(this).prevAll().attr('class','on');
				$(this).attr('class','on');
				$(this).nextAll().removeAttr('class');
			}
		});
	});
});
$(function(){
	$('.center>.address>div>ul>li').each(function(){
		$(this).click(function () {
			$(this).attr('class','on').siblings().removeAttr('class');
		});
	});
});
$(function(){
	$('.center>.submit>form>.order-infor>.invoice>label').each(function(){
		$(this).click(function () {
			$(this).attr('class','on').siblings().removeAttr('class');
		});
	});
});
$(function(){
	$('.center>div>form>.agree>label').click(function(){
		if ($(this).attr('class')=='on') {
			$(this).removeAttr('class');
		} else{
			$(this).attr('class','on');
		}
	});
	$('.center>div>form>.agree>p').click(function(){
		$('.center>div>form>.agree>label').trigger('click');
	});
});















