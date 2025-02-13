// 单线程处理cpu问题 阻塞现象

const http = require("http");

function sleepTime(time){
    const sleep = Date.now() + time * 1000
    while(Date.now() < sleep){}
    return 
}
// 休眠4s
sleepTime(4);

const server = http.createServer((req,res)=>{
    res.end('server starting....');
})

server.listen(8081,()=>{
    console.log("服务启动")
})
