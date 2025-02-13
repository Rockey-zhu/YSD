const fs = require('fs')

/**
 * 01 打开a文件 ， 利用 read 将数据把偶才能到 buffer 暂存起来
 * 02 打开b文件 ， 利用write将buffer写入b
 * 
 */
let buf = Buffer.alloc(10);

// 01 open
// fs.open('test.txt', 'r', (err, rfd) => {
//     // 03 open b
//     fs.open('13copy.txt', 'w', (err2, wfd) => {
//         // 02 read
//         fs.read(rfd, buf, 0, 10, 0, (err3, readBytes, buffer) => {
//             // 04 write b
//             fs.write(wfd, buf, 0, 10, 0, (err3, writte, buffer) => {
//                 console.log("copy success")
//             })
//         })
//     })
// })

const BUFFER_SIZE = buf.length;
let readOffset = 0;
let copyNum = 0;
// 完全copy
fs.open('test.txt', 'r', (err, rfd) => {
    // 03 open b
    fs.open('13copy.txt', 'w', (err2, wfd) => {
        next(rfd, wfd)
    })
})

// rfd: 读文件流;  wfd 写入文件流
function next(rfd, wfd) {
    // 02 read
    fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err3, readBytes, buffer) => {
        if (!readBytes) {
            // 文件内容已经读取完毕 
            fs.close(rfd, () => {})
            fs.close(wfd, () => {})
            console.log("copy success!")
            return;
        }
        // 04 write b
        readOffset += readBytes
        fs.write(wfd, buf, 0, readBytes, (err3, writte, buffer) => {
            console.log("10 byte copye ,copyNum:",copyNum)
            copyNum++;
            // 回调
            next(rfd,wfd)
        })
    })
}