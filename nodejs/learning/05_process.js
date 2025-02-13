// Buffer.alloc(1000);//缓冲区

// 1. process 查看资源调度  :  内存
// console.log(process.memoryUsage())

// cpu
// console.log(process.cpuUsage())


// 2.运行环境： 运行目录 node环境 cpu架构 用户环境  系统平台
console.log(process.cwd());

console.log(process.version);
console.log(process.versions);

console.log(process.arch);
console.log(process.env.NODE_ENV);
console.log(process.env.PATH);

console.log(process.env.USERPROFILE); //windos系统;  苹果: HOME
console.log(process.platform);


// 3. 运行状态: 启动参数, PID、运行时间
console.log(process.argv)
console.log(process.argv0) // 只有argv0
console.log(process.pid) //ppid
console.log(process.uptime()) //运行时间


// 4.事件
//退出前
// process.on("beforeExit",(code)=>{
//     // 只能嵌套同步代码
//     console.log("before exit" + code)
// })
// // 退出
// process.on('exit',(code)=>{
//     // 只能嵌套同步代码
//     console.log("exit " + code);
// })


// // 直接退出
// process.exit();
// console.log("代码执行完毕")

//标准输出  输入 
const fs = require("fs")

fs.createReadStream('test.txt').pipe(process.stdout)

// process.stdin.pipe(process.stdout)

// 设置标准输入流的编码集
process.stdin.setEncoding('UTF-8');
process.stdin.on('readable',()=>{
    let chunk = process.stdin.read()
    if(chunk != null){
        process.stdout.write('data '+ chunk)
    }
})