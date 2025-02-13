// 防抖技术即是可以把多个顺序地调用合并成一次，也就是在一定时间内，规定事件被触发的次数。

// 简单的防抖函数
function debounce(func,wait,immediate){
    let timeout
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(func,wait);
    }
}

// 实际想绑定的函数
function realFunc(){
    console.log("___触发_")
}

// // 使用防抖
// let dom = document.getElementById('demo1');
// // 500ms只能触发一次
// dom.Onclick = debounce(realFunc(),500);

// 更好的封装
function debounceBetter(func,wait,immediate){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args)
        }

        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }   
}
let demo = debounceBetter(function(){
    console.log("__触发__")
},500)