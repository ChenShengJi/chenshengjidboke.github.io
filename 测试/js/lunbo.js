window.onload=function(){
	function lunBo(){
		var oDiv=document.getElementById('LunBo');
		var oOther=document.getElementById('Other');
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var oLi=oUl.getElementsByTagName('li');
		var oPoint =oDiv.getElementsByTagName('span');
		
		var time=0;
		var speed=-oLi[0].offsetWidth;
		function move(){
			oUl.style.left =oUl.offsetLeft + speed + 'px';
			if(oUl.offsetLeft <=-oLi[0].offsetWidth * oLi.length){
				  oUl.style.left ='0px';
			}
			if(oUl.offsetLeft>=oLi[0].offsetWidth){
				 oUl.style.left=-oLi[0].offsetWidth * (oLi.length-1)+'px';
			}
			point();
		}
		time=setInterval(move,1000);
		oDiv.onmouseover = function(){
			clearInterval(time);
		}
		oDiv.onmouseout= function(){
			time=setInterval(move,1000);
		}
		oOther.style.display='block';
		function point(){
			var flag=-oUl.offsetLeft/oLi[0].offsetWidth;
			 for (var i = 0; i <oPoint.length; i++){
			 	oPoint[i].className ='';
			 }
			   oPoint[flag].className ='yellow';
		}
		 var oDiv1=document.getElementById('Other');
		 var oA=oDiv1.getElementsByTagName('a');
		 oA[0].onclick=function(){
		 	speed=oLi[0].offsetWidth;
		 	setTimeout(move,0);
		 	console.log(oUl.offsetLeft);
		 	point();
		 }
		  oA[1].onclick=function(){
		  	speed=-oLi[0].offsetWidth;
		 	setTimeout(move,0);
		 	point();
		  }
		  for(var i=0;i<oPoint.length;i++){
		  	 oPoint[i].index = i;
		  	 oPoint[i].onclick =function (){
		  	 	for (var i = 0; i <oPoint.length; i++){
		  	 		oPoint[i].className= '';
		  	 	}
		  	 	this.className ='yellow';
                oUl.style.left =-oLi[0].offsetWidth * this.index + 'px';
		  	 }
		  }
	}
	lunBo();
}