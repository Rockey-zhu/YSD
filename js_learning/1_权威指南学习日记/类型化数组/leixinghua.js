//  Int8Array()   Uint8Array()  
//  Int16Array()  Uint16Array()  
//  Int32Array()  Uint32Array()
//  Float32Array()  Float64Array()
// 类型化数组在执行上和内存使用上更加高效

let bytes = new Uint8Array(1024);
for(let i = 0 ; i<bytes.length; i++){
    bytes[i] = i & 0xFF;
}
console.log(bytes)

let copy = new Uint8Array(bytes);
