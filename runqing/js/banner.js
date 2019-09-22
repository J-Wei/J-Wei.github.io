$(function(){
    var i=0;
    var timer=null;
    //让图片框架li得到.banner的宽度
    $('body').css({'overflow-x':'hidden'});
    $('.banner').width($(document.body).width());
    $('.pic li').width($(".banner").width());
    //添加点轮播的li
    for(var j=0;j<$(".pic li").length;j++){
        $('.hd').append('<li></li>');
    }
    //给点轮播的第一个li添加默认样式
    $('.hd li').first().addClass('active');
    //将第一张图片复制并添加到队列的最后一个
    var firstImg=$('.pic li').first().clone();
    $('.pic').append(firstImg).width($('.pic li').length*$('.pic li').width());
    //下一张图效果
    $(".next").click(function(){
        i++;
        if(i==$('.pic li').length){
            i=1;
            $('.pic').css({left:0});
        }
        $(".pic").stop().animate({left:-i*$('.pic li').width()},300);

        if(i==$('.pic li').length-1){
            $(".hd li").eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $(".hd li").eq(i).addClass('active').siblings().removeClass('active');
        }
    })
    //上一张图效果
    $(".prev").click(function(){
        i--;
        if (i==-1) {
            i=$('.pic li').length-2;
            $('.pic').css({left:-($('.pic li').length-1)*$('.pic li').width()});
        }

        $('.pic').stop().animate({left:-i*$('.pic li').width()},300);
        $('.hd li').eq(i).addClass('active').siblings().removeClass('active');
    })

    //点轮播效果
    $(".hd li").mouseover(function(){
        $('.pic').stop().animate({left:-$(this).index()*$('.pic li').width()},150);
        $('.hd li').eq($(this).index()).addClass('active').siblings().removeClass('active');
        i=$(this).index();
    })
    //自动播放效果
        $(".banner").hover(function(){
              clearInterval(timer);
        },function(){
              timer=setInterval(function(){
                  i++;
                  if(i==$('.pic li').length){
                      i=1;
                      $('.pic').css({left:0});
                  }
                  $(".pic").stop().animate({left:-i*$('.pic li').width()},300);

                  if(i==$('.pic li').length-1){
                      $(".hd li").eq(0).addClass('active').siblings().removeClass('active');
                  }else{
                      $(".hd li").eq(i).addClass('active').siblings().removeClass('active');
                  }
              },1000)
        })
})