$(function(){
    $('.index_button').hammer().on('tap',function(){
        if($(".logo_list").css('display')=='none'){
            $(".logo_list").slideDown(500);
        }else {
            $(".logo_list").slideUp(500);
        }
    });
    $('.head_logo').hammer().on('tap', function(){
        window.history.back();
    });
});
