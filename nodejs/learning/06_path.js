const path = require('path');

console.log(__filename)
// 1.获取路径中的基础名称
/**
 * 01 返回接受路径当中最后一部份
 * 02 第二个参数表示扩展名，如果没有设置则返回完整的文件名带后缀
 * 03 第二个参数为后缀是，如果没有在当前路径被匹配到，就会被忽略
 * 04 出路目录路径的时候，结尾处有路径分隔符也会被忽略掉
 */
console.log(path.basename(__filename))
console.log(path.basename(__filename,'.js'))
console.log(path.basename(__filename,'.css'))
console.log(path.basename("/a/b/c"))
console.log(path.basename("/a/b/c/"))


// 2.获取目录名 
console.log(path.dirname(__filename))