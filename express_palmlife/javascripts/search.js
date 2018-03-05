  //第一步让所以得panel，display为none，
  //获取对应的下标eq(iIndex)，让他的display为block。
  //第三部 让#menu li标的中的class名改变，
  //先去除里面所以得class名，然后再给对应的加class名
  $('#menu li').bind('click', function () {
    let iIndex = $(this).index();//用来获取下标在所有panel中排行第几，this指的是#menu li，
    $('#menu li').removeClass('activeLi').eq(iIndex).addClass('activeLi');
    $('.panel').css('display', 'none').eq(iIndex).css({display: 'block'});
});
// var iIndex = 0;//设一个全局的index，让下标默认为0，
// setInterval(function(){
//   iIndex++;//让index每次加加
//     if(iIndex >= 6) {
//         iIndex = 0;
//     }
//     $('#menu li').removeClass('activeLi').eq(iIndex).addClass('activeLi');
//     $('.panel').css('display', 'none').eq(iIndex).css({display: 'block'});
// },1000);