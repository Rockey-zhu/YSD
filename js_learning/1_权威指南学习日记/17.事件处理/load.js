//load事件：web浏览器通知文档加载完毕
//load事件会在所有文档和图片加载完毕后执行

//当文档准备就绪时调用函数

/*
*传递函数给whenReady()，当文档解析完毕且擦欧总准备就绪时，
*函数将作为文档对象的方法调用
*DOMContentLoaded ， readystatechange或者load事件发生会触发注册函数
*一旦文档准备就绪，所有函数都将被调用，任何传递给whenReady()的函数都将立即调用
*/ 
let whenReady = (function(){
    let funcs = []; //获得事件时要运行的函数
    let ready = false;//触发事件处理程序时，切换到true

    //文档准备就绪时，调用事件处理程序
    function handler(e){
        //如果已经调用了，返回
        if(ready) return;

        //如果发生readystatechage事件
        //但其状态不是"complete"的话那么文档尚未准备好
        if(e.type === "readystatechange" && document.readyState !== "complete") return;

        //运行所有注册函数
        for(let i =0 ;i <funcs.length;i++){
            funcs[i].call(document);
        }
        ready = true;
        func = null;
    }
    //为接收到的任何事件注册处理程序
    if(document.addEventListener){
        document.addEventListener("DOMContentLoaded",handler,false);
        document.addEventListener("readystatechange",handler,false);
        window.addEventListener("load",handler,false);
    }
    else if(document.attachEvent){
        document.attachEvent("onreadystatechange",handler);
        window.attachEvent("onload",handler)
    }

    //返回whenReady()函数
    return function whenReady(f){
        if(ready) f.call(document);
        else funcs.push(f);
    }
})