/***
 * 发布订阅要素
 * 
 * 缓存队列，存放订阅者信息
 * 具有增加，删除订阅的能力
 * 状态改变时通知所有订阅者执行监听
 * 
 */

 class PubSub{
     constructor(){
         this._events = {}
     }

    //注册  订阅事件
    subscribe(event,callback){
        if(this._events[event]){
            // 如果当前event 存在，所以我们只需要往后添加当前次监听操作
            this._events[event].push(callback)
        }else{
            // 之前没有订阅过此事件
            this._events[event] = [callback]
        }
    }

    // 发布
    publish(event, ...args){
        const items = this._events[event]
        if(items && items.length){
            items.forEach(callback => {
                callback.call(this,...args)
            });
        }
    }
 }

 let ps = new PubSub();

 ps.subscribe("事件1",()=>{
     console.log("事件1执行了")
 })
 ps.subscribe("事件1",()=>{
    console.log("事件1执行了___2")
})
ps.subscribe("事件2",()=>{
    console.log("事件2执行了")
})

 ps.publish("事件1")
 ps.publish("事件2")