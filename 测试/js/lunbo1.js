window.App={};
			(function(App){
				function extend(obj1,obj2){
				for(var i in obj2){
					if(typeof obj1[i]==='undefined'){
						obj1[i]=obj2[i];
					}
				}
				return obj1;
			}
		//轮播图构造函数
        function Slider(options){
             extend(this,options);
             this.init();
             this.nav(0);
             this.autoplay();
        }

        Slider.prototype.init=function(){
        	for(var i=0;i<this.imgLength;i++){
        		this.cursor[i].addEventListener('click',function(index){
        			this.nav(index);
        			this.stop();
        			this.autoplay();
        		}.bind(this,i))
        	}
        	// this.btn[0].addEvenListern('click',function(){
                  
        	// })
        }
        //跳转到下一张图片
        Slider.prototype.next=function(){
        	     var index = (this.index+1)%this.imgLength;
                 this.nav(index);
        }

        //跳转到指定图片
        Slider.prototype.nav=function(index){
               if(this.index==index) return;
               this.last_index=this.index||0;
               this.index=index||0;
               this.fade();
               this.setCurrent();
        }

        //图片切换，改变透明度
        Slider.prototype.fade=function(){
             this.slider[this.last_index].style.opacity=0;
             this.slider[this.index].style.opacity=1;
        }
        
        //小圆点改变样式
         Slider.prototype.setCurrent=function(){
             this.cursor[this.last_index].setAttribute('class','');
             this.cursor[this.index].setAttribute('class','z-cursor');
         }
         
        //自动播放函数
         Slider.prototype.autoplay=function(){
                   this.time=setInterval(function(){
                   	this.next();
                   }.bind(this),3000);
         }

         Slider.prototype.stop=function(){
         	clearInterval(this.time);
         }

         App.Slider=Slider;

	    })(window.App)

	    var slider1=new App.Slider({
	    	cursor:document.getElementsByClassName('m-cursor')[0].getElementsByTagName('li'),
	    	slider:document.getElementsByClassName('slider_image'),
	    	imgLength:document.getElementsByClassName('slider_image').length,
	    	sliders:document.getElementsByClassName('m-slider')[0],
	    	btn:document.getElementsByClassName('banner-btn')[0].getElementsByTagName('div'),
	    })