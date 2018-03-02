/*
轮播图构造函数插件 面向对象的方式
el:指定有轮播图效果的元素是谁，将el元素挂载在Carousel上
 */

class Carousel{
	constructor({el,interval=2000}){
       this.el = el;//将el元素挂载在Carousel上,方便其他方法里面去用
       this.interval = interval;
       this.index = 0;//当前底下a按钮的下标默认为0。

       //获取carousel_control元素节点,让直接挂载在this身上吗，也就Carousel身上
        this.oControl = this.el.getElementsByClassName('carousel_control')[0];
  
       //添加鼠标进入事件
       this.el.addEventListener('mouseenter',() =>{
       	   clearInterval(this.itimer);
           this.oControl.style.display = 'block';
       });

       //添加鼠标移除事件
        this.el.addEventListener('mouseleave',() =>{
        	this.autoMove();
           this.oControl.style.display = 'none';
       });

       //获取img图片
       this.carousel_img = this.el.getElementsByClassName('carousel_img')[0];
       this.iAimgs = Array.from(this.carousel_img.getElementsByTagName('a'));
       // console.log(this.imgs);
       
       //获取按钮列表盒子oCarousel_btn
       this.createBtns();
       this.oCarousel_btn = this.el.getElementsByClassName('carousel_btn')[0];
       //获取oCarousel_btn底下所有的按钮a,获得出来是个a类似数组集合的对象，Array.from转正真正的数组
       this.btns = Array.from(this.oCarousel_btn.getElementsByTagName('a'));

       
       this.btns.forEach((v, k)=> {
       	   v.addEventListener('mouseenter',() =>{
       	   		if(this.index !== k){
       	   		   this.index = k;
       	   	       this.move();
       	   		}       	   	   
       	   })      	   
       });
	//获取左右按钮
	this.prev = this.el.getElementsByClassName('control_prev')[0];
	this.next = this.el.getElementsByClassName('control_next')[0];

	this.next.addEventListener('click',() =>{
		this.rightMove();
	}); 

	this.prev.addEventListener('click',() =>{
		this.leftMove();
	}); 
	this.autoMove();  
   
   };

  createBtns() {
     let Obtn = document.createElement('div');
     Obtn.className = 'carousel_btn';
     this.el.appendChild(Obtn);
     this.iAimgs.forEach((v,k) =>{
     	 let oA = document.createElement('a');
     	 if( k === 0){
     	 	oA.className = 'active';     	 	   	 	
     	 }
     	 Obtn.appendChild(oA);
     })
  }



    rightMove(){
    	this.index++;
		if(this.index >= this.btns.length - 1){
			this.index = 0;
		}
		this.move();
    }
    leftMove(){
    	this.index--;
		if(this.index < 0 ){
			this.index = this.iAimgs.length -1;
		}
		this.move();
    }
    
    autoMove(){
    	this.itimer = setInterval(() =>{
    		this.rightMove();
    	},this.interval);
     //自动轮播   
    }
      
	//添加一个移动的方法
	move(){
        //改变图片位置
         this.iAimgs.forEach((v) =>{
        	bufferMove(v,{opacity:0},() =>{
        		v.style.display = 'none';
        	})
        })
         this.iAimgs[this.index].style.display = 'block';
         bufferMove( this.iAimgs[this.index],{opacity:100});
		//改变按钮下标
		this.btns.forEach((v,k) =>{
			v.className = '';
			this.btns[this.index].className = 'active';
		})		
	}
}

