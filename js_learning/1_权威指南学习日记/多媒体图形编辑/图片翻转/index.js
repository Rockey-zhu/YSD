function onLoad(f){
    if(onLoad.loaded){
        window.setTimeout(f,0);
    }else if(window.addEventListener){
        window.addEventListener("load",f,false);
    }else if(window.attachEvent){
        window.attachEvent("onload",f)
    }
        
}

onLoad(function (){
    //此函数是依赖于onload下的匿名函数
    for(let i = 0 ; i <document.images.length; i++){
        let img = document.images[i];
        let rollover = img.getAttribute("data-rollover");
        if(!rollover) continue;//跳过没有data-rollover属性的图片

        // 将翻转的图片缓存起来
        (new Image()).src = rollover;

        // 标识默认的图片URL
        img.setAttribute("data-rollout",img.src);

        // 注册翻转事件
        img.onmouseover = function(){
            this.src = this.getAttribute("data-rollover")
        }

        img.onmouseout = function(){
            this.src = this.getAttribute("data-rollout")
        }
    }
})