const fs = require('fs')

/**
 * 
 * access: 判断文件或者目录是否具有操作权限
 * stat：获取目录及文件信息
 * mkdir：创建目录
 * rmdir：删除目录
 * readdir：读取目录内容
 * unlink：删除指定文件
 * 
 */

// access 可用于判断文件是否存在  （不推荐）
fs.access("../test.txt", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("有权限")
    }
})

// stat
fs.stat('../test.txt',(err,statObj)=>{
    console.log(statObj);
    console.log(statObj.isFile());
    console.log(statObj.isDirectory());
})

console.log("-----------------------------------------");

// mkdir
fs.mkdir('a/b',(err)=>{
    if(!err){
        console.log("创建成功")
    }else{
        console.log(err)
    }
})

// rmdir 默认情况下只能删除空目录  {recursive:true}属性可删除非空
fs.rmdir('a/b',{recursive:true},(err)=>{
    if(!err){
        console.log("删除成功")
    }else{
        console.log(err)
    }
})

// readdir
fs.readdir('a',(err,files) =>{
    console.log(files)
})


// unlink
fs.unlink('a/z.txt',(err)=>{
    if(!err){
        console.log("删除成功")
    }
})