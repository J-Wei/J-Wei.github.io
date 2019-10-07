$(function(){
	var selectSrc=$('.small-pic li img');
	var ulLeft=$('.small-pic ul').css('left').replace(/[^0-9]/ig,"");
	$('.small-pic li img').each(function(i){
		$(this).click(function(){
			$(this).attr('class','on');
			$('.small-pic li img').not($(this)).removeAttr('class');
			$('.big-pic img').attr('src',selectSrc[i].src);
		});
	});
	$('#left-move').click(function() {
		if(ulLeft<0){
			$('.small-pic ul').css('left',ulLeft+=81);
		}
	});
	$('#right-move img').click(function() {
		if(ulLeft>(-81*($('.small-pic li').length-3))){
			$('.small-pic ul').css('left',ulLeft-=81);
		}
	});
});
$(function(){
	var listLeft=$('.list-h').css('left').replace(/[^0-9]/ig,"");
	$('#spec-left').click(function() {
		if(listLeft<0){
			$('.list-h').css('left',listLeft+=110);
		}
	});
	$('#spec-right').click(function() {
		console.dir(listLeft);
		if(listLeft>(-110*($('.list-h li').length-3))){
			$('.list-h').css('left',listLeft-=110);
		}
	});
});