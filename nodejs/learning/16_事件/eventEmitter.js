/***
 * eventEmitter常见api
 * 
 * on : 添加事件 被触发调用回调函数
 * emit ： 触发事件，同步调用事件监听器
 * once ： 首次触发调用回调函数
 * off: 移除监听
 * 
 * 
 */

 const EventEmitter =  require('events');

 const ev = new EventEmitter();

 ev.on('事件1', () =>{
    console.log("事件1执行了")
 })

//  emit
 ev.emit("事件1")
 ev.emit("事件1")

 ev.once('事件2',()=>{
     console.log("事件2执行了")
 })

 ev.emit("事件2")
 ev.emit("事件2")