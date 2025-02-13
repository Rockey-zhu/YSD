// 无需require的全局变量
// 缓冲区  让js可使用二进制数据
// io行为操作的就是二进制数据
// 大数据操作使用流操作和管道数据
// 不占据v8堆内存
// 内存使用由node空值，由V8的GC回收
// 一般配合stream流使用

// 创建buffer
// alloc 创建指定大小buffer
// allocUnsafe 创建指定大小buffer （不安全,不干净）
// from 接收数据，创建buffer。可以传buffer，会开辟新的内存空间

const b1 = Buffer.alloc(10)
const b2 = Buffer.allocUnsafe(10)
console.log(b1);
console.log(b2);

const b3 = Buffer.from([1,2,3,"中"],"utf-8");
console.log(b3);
const b4 = Buffer.from("中","utf-8");
console.log(b4.toString());

// buffer 实例方法
/**
 * fill(内容，从buffer某位置开始，到buffer某位置结束) [); 使用数据填充 buffer ,若无法填满，就会反复去填写
 * write(内容，从buffer某位置开始，length) [) : 向 buffer 中写入数据; 不会重复写
 * toString(编码格式,从buffer某位置开始，到buffer某位置结束) [) : 从 buffer 中提取数据
 * slice ： 截取buffer
 * indexOf : 在buffer中查找数据
 * copy ： 拷贝buffer中的数据
 */

//  fill
 let buf = Buffer.alloc(6);
 buf.fill("123",2,3);
 console.log(buf);
 console.log(buf.toString());


//  write
let bufWrite = Buffer.alloc(6);
bufWrite.write("123",1,3);
console.log(bufWrite);
console.log(bufWrite.toString());

// indexOf
bufIndexOf = Buffer.from('HELLO , hi , good, nice');
console.log("indexOf",bufIndexOf.indexOf("L"));

// Buffer 静态方法
/**
 * concat 
 */
let a1 = Buffer.from("hello");
let a2 = Buffer.from(" World");
console.log(Buffer.concat([a1,a2],8).toString())

/**
 * isBuffer 判断是不是 buffer
 */
