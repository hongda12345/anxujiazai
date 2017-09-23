/*
* @Author: 宏达
* @Date:   2017-09-23 11:34:48
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-23 17:52:20
*/
window.onload=function(){
	let ch=innerHeight;
	let floor=document.querySelectorAll('.floor');
	let floorArr=[];
	let flag=true;

	floor.forEach(element=>{
		floorArr.push(element.offsetTop);
	})
	window.onscroll=function(){
		if(!flag){
			return;
		}
		let scrolltop=document.documentElement.scrollTop;
		floorArr.forEach((value, index)=>{
			if(scrolltop+ch>=value+150){
				let imgs=floor[index].getElementsByTagName('img');
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].getAttribute('imgPath');
				}
			}
		})
	}
	onscroll();
	let color=['red','blue','orange','green','yellow'];
	let aside=document.querySelectorAll('.aside>ul>li');
	aside.forEach((element,index)=>{
		element.onclick=function(){
			for(let i=0;i<aside.length;i++){
				aside[i].style.background='none';
			 }
			 flag=false;
			 element.style.background=color[index];	
             document.documentElement.scrollTop=floorArr[index];
             animate(document.body,{scrollTop:floorArr[index]},function(){flag=true});
		}
	})
	
}