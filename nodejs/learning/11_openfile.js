// 打开大文件操作
const fs = require("fs");
const path = require("path")

// open
fs.open(path.resolve('test.txt'),'r',(err,fd) =>{
    console.log(fd)
    // open -> close
    fs.close(fd,err=>{
        console.log('关闭成功')
    })
})


