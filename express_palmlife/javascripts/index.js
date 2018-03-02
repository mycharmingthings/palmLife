
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



