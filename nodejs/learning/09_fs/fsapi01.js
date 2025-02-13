// 基本操作类
const fs = require('fs');
const path = require('path');

//node fs  有错误优先的思想

// readFile
// fs.readFile(path.resolve('../test.txt'),"utf-8",(err,data)=>{
//     if(!err){
//         console.log(data);
//     }
// })

// writeFile  文件路径不存在会创建
// fs.writeFile(path.resolve("../test.txt"),"hello Node",(err)=>{
//     if(!err){
//         fs.readFile(path.resolve('../test.txt'),"utf-8",(err,data)=>{
//             if(!err){
//                 console.log(data);
//             }
//         })
//     }
// })

// fs.writeFile("../test.txt","hello Node11123",{
//     mode:438,
//     flag:'r+',
//     encoding:"utf-8",
// },(err)=>{
//     if(!err){
//         fs.readFile('../test.txt',"utf-8",(err,data)=>{
//             if(!err){
//                 console.log(data);
//             }
//         })
//     }
// })

// appendFile 在结尾写
fs.appendFile("../test.txt"," hello world ", (err)=>{
    console.log("success")
})

// copyFile 数据拷贝 数据是暂存内存的，不适合大文件操作
fs.copyFile("../test.txt","copy.txt",()=>[
    console.log("copy success")
])

// watchFile 监听文件
// curr 修改后文件数据 ; prev修改前数据
fs.watchFile("copy.txt",{interval:20},(curr,prev)=>{
    if(curr.mtime != prev.mtime){
        console.log("修改了")
        // 取消监听
        // fs.unwatchFile("copy.txt")
    }
})