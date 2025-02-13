//---设置js对象属性为事件处理程序---
window.onload = function(){
    let elt = document.getElementById("ids");

    elt.onsubmit = function(){
        return validdata(this)
    }
}

 //---不同的click注册事件---
 //<button id="btn"></button>

 let b= document.getElementById("btn");
 b.onclick=function(){

 }
 b.addEventListener("click",function(){
     
 })