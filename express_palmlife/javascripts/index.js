
(function($){
    $.noConflict();

    console.log("1");
    //轮播图 自由获取高度
    //$('.carousel_img').height($('.carousel_imgIMg').height());
    $(window).resize(function(){
        $('.carousel_imgIMg').height($('.carousel_imgIMg').height());
    });

    // tab
    console.log("2");
    console.log($('.first_menu'));
    $('.first_menu').hover(function(){
        console.log("2");
        var index = $('.first_menu').index($(this));
        $('.head_list_back').eq(index).show().addClass("show");
    },function(){
        var index = $('.first_menu').index($(this));
        $('.head_list_back').eq(index).hide().removeClass("show");
    })



})(jQuery);



