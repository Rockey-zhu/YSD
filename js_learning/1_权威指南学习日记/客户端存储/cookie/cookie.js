/**
 * web少量存储数据
 * 
 * HTTP协议的扩展实现
 * 
 * cookie数据会在web浏览器和服务器之间传输
 * 
 * js中的cookie是非安全的，不加密的
 * 
 * 但通过https协议传输cookie是安全的，但只和https有关
 * 
 * API兼容性好
 * 
 * 只能储蓄在WEB浏览器的绘画期间，一旦用户关闭浏览器，cookie丢失
 * 除非设置准确的有效期，单位：s
 * 
 * cookie 名\值 不允许包含分号 逗号 和 空白符
 * 
 * 删除一个cookie需要将这个cookie的名和值都相同，将max-age设置成0即可
 * 
 * document.cookie读取cookie返回值为string，
 * 
 * 
 */