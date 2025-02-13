//事件驱动架构   发布订阅   异步操作
const EventEmitter = require("events");

const myEvent = new EventEmitter();

//订阅事件1
myEvent.on("事件1",(argument) =>{
    console.log("事件1执行了")
})
myEvent.on("事件1",(argument) =>{
    console.log("事件1-2执行了")
})

//触发事件1
myEvent.emit("事件1")