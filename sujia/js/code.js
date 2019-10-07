$(function(){
	$('.center>div>form>.code>span').click(function(){
		generate();
	});
	$('.center>div>form>.code>img').click(function(){
		code();
	});
	$('.center>div>form>.code>span').click(function(){
		generate();
	});
	$('.center>div>form>.code>a').click(function(){
		generate();
	});
	$('.center>.right>div>ul>li').each(function(){
		$(this).click(function(){
			$(this).find('a').css('color','#F41909');
			$(this).siblings().find('a').css('color','#333')
		});
	});
	$('.center>.right>div>div>form>input[type=text]').each(function(){
		var oldVal=$(this).val();
		$(this).focus(function(){
			if($(this).val()==oldVal){
				$(this).val('');
			}
		});
		$(this).blur(function(){
			if ($(this).val()=='') {
				$(this).val(oldVal);
			}
		});
	});
});
function code(){
	var str=['img/register1.jpg','img/code1.jpg','img/code2.jpg','img/code3.jpg','img/code4.jpg','img/code5.jpg','img/code6.jpg','img/code7.jpg','img/code8.jpg','img/code9.jpg','img/code10.jpg']
	var a=parseInt(11*Math.random());
	var codeImg=str[a];
	$('.center>div>form>.code>img').attr('src',codeImg);
};
function generate(){
	var str=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	var a=parseInt(62*Math.random());
	var b=parseInt(62*Math.random());
	var c=parseInt(62*Math.random());
	var d=parseInt(62*Math.random());
	var code=str[a]+str[b]+str[c]+str[d];
	$('.center>div>form>.code>span').html(code);
};






















