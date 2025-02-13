/**************************
 * ArrayBuffer，二进制数组
 * 
 *让我们先澄清一个可能的误区。ArrayBuffer 与 Array 没有任何共同之处：
 *它的长度是固定的，我们无法增加或减少它的长度。
 *它正好占用了内存中的那么多空间。
 *要访问单个字节，需要另一个“视图”对象，而不是 buffer[index]。
 *
 */

let buffer = new ArrayBuffer(16); // 创建一个长度为 16 的 buffer
console.log(buffer.byteLength); // 16

/**
 * 视图对象
 * 
 * Uint8Array —— 将 ArrayBuffer 中的每个字节视为 0 到 255 之间的单个数字
 * Uint16Array —— 将每 2 个字节视为一个 0 到 65535 之间的整数。
 * Uint32Array —— 将每 4 个字节视为一个 0 到 4294967295 之间的整数。
 * Float64Array —— 将每 8 个字节视为一个 5.0x10-324 到 1.8x10308 之间的浮点数。
 * 
 */