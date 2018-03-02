//new的一个对象，目的是让carousel_indes.js中的constructor执行，并且要传入一个el属性，el值为就是让哪个元素做轮播图传谁，通过class获取
new Carousel ({
	el:document.getElementsByClassName('carousel')[0],
});

// new Carousel ({
// 	el:document.getElementsByClassName('carousel')[1],
// 	interval:1000 //外面传定时器间隔事件
// });

// new Carousel ({
// 	el:document.getElementsByClassName('carousel')[2],
// 	interval:2000
// });