// 节流函数，只允许一个函数在 X 毫秒内执行一次。

// 简单节流
// 代表 mustRun 毫秒内，必然会触发一次 handler 
function throttle(func, wait, mustRun){
    let timeout;
    let startTime = new Date();

    return function(){
        let context = this,
            args= arguments,
            curTime = new Date();

        clearTimeout(timeout);

        if(curTime - startTime >= mustRun){
            func.apply(context,args);
            startTime = curTime;
        }else{
            timeout = setTimeout(func,wait);
        }
    }
}