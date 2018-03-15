
(function($){
    $.noConflict();
    function rollOne(){  
        $(".picBox").animate({marginTop:-198},0,"linear",function(){  
            $(this).css({marginTop:0});  
            $(this).children("li").first().remove().clone(true).appendTo(".picBox");  
        });  
    }  
    var startRollOne=setInterval(rollOne,2000);  
    $(".box").hover(function () {  
        clearInterval(startRollOne);  
    }, function () {  
        startRollOne=setInterval(rollOne,2000);  //此时要是写rollone（），只能调用一次
    });  
    

})(jQuery);

 
// 李航轮播图手机代码 ，-
// $('.sliderList').append('<li>');
// $('.sliderList li').last().html($('.sliderList li').first().html());
// var length = $('.sliderList').children().length;
// var iIndex = 0;
// function RightMove(){
//     iIndex++;
//     if(iIndex >= length){
//         iIndex = 1;
//         $('.sliderList').css('left',0)
//     }
//     var left = -iIndex * $(window).width();
//     $('.sliderList').stop(true).animate({'left':left},500);
//     if(iIndex > length -2){
//         $('.point span').removeClass('sliderActive').eq(0).addClass('sliderActive');
//     }else{
//         $('.point span').removeClass('sliderActive').eq(iIndex).addClass('sliderActive');
//     }
// }
// function autoMove(){
//     iTimer = setInterval(function(){
//         RightMove();
//     },2000)
// }
// autoMove();




