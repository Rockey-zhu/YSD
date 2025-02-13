const fs = require('fs')



// 缓冲区：需要放得下写入的内容 
let buf = Buffer.alloc(10);

// read : 读操作 实际上是 将文件中的数据写入内存
new Promise((reslove) => {
    fs.open('test.txt', 'r', (err, rfd) => {
        console.log(rfd);
        /**
         * fd：定位当前被打开的文件
         * buf：用于表示当前缓冲区
         * offset：表示buf从哪个位置开始写入
         * length：表示写入长度
         * position：表示当前从文件哪个位置开始读取
         */
        fs.read(rfd, buf, 0, 4, 2, (err, readBytes, data) => {
            console.log(readBytes)
            console.log(data)
            console.log(data.toString())
            reslove()
        })
    })
}).then(() => {
    console.log("_______________________________________________")
    console.log("_ buf __",buf);
    // write: 将缓冲区内容写入磁盘文件
    fs.open('write.txt','w',(err,wfd) => {
        fs.write(wfd,buf,0,4,0,(err,written,buffer) =>{
            console.log(written)
            console.log(buffer)
            console.log(buffer.toString())
        })
    })

})