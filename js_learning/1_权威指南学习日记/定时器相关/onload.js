//需要在web环境执行

function onload(f) {
    if (onload.loaded) { //已经加载完成
        window.setTimeout(f, 0); //将f放入异步队列
    } else if (window.addEventListener) { //注册事件
        window.addEventListener("load", f, false)

    } else if (window.attachEvent) { //ie8前的事件注册方法
        window.attachEvent("onload", f)
    }
}

onload.loaded = false;

function attach() {
    onload.loaded = true;
    console.log("---我已经加载完成了！--")
}

onload(attach())