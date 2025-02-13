//在指定的事件目标上注册用于处理指定类型事件的处理程序函数
//注意：这个方法注册的事件处理程序无法被删除，因为传递给了attachEvent()的包装函数没有保留下来传递给detachEvent()
function addEvent(target,type,handler){
    if(target.addEventListener){
        target.addEventListener(type,handler,false)
    }else{
        target.attachEvent("on" +type,(event)=>{
            return handler.call(target,event)
        })
    }
}

