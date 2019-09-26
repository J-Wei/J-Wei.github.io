var xuanxiang=document.getElementsByTagName("header")[0].getElementsByTagName("li");
var content=document.getElementsByClassName("content")[0].getBoundingClientRect().width;
var mag=document.getElementsByClassName("content")[0].getElementsByTagName("div")[0];
var i=0,j=0;
for(i=0;i<xuanxiang.length;i++){
	xuanxiang[i].onclick=function(){
		for(j=0;j<xuanxiang.length;j++){
			xuanxiang[j].setAttribute("class","");
		}
		this.setAttribute("class","new");
		mag.style.marginLeft=-i*content+"px"
		console.dir(i);
	}
}
console.dir(xuanxiang);

