### IO异步总结
io是应用程序的瓶颈所在
异步io提高性能无采用原地等待结果返回
io操作属于操作系统级别，平台都有对应实现
Nodejs单线程配合时间驱动架构及libuv实现了异步IO



### node_modules安装包说明
express框架
types/express 兼容ts包



### 其他
<!-- ts不支持默认导入json格式文件 -->
在 json 文件中添加一行："resolveJsonModule": true,

node 中的全局对象是 global ，根本作用 : 作为全局变量的宿主

### 常见全局变量
__filename : 返回正在执行脚本文件的绝对路径
__dirname : 返回正在执行脚本所在目录
timer类函数 ： 执行顺序与事件循环间的关系
process ： 提供与当前进程互动的接口
require ： 实现模块的加载
module , exports ： 处理模块的导出


### path模块常用api
basename() 获取路径中基础名称
dirname() 获取路径中目录名称
extname() 获取路径中扩展名称
isAbsolute() 获取路径是否为绝对路径
join() 拼接多个路径片段
resolve() 返回绝对路径
pasre() 解析路径
format() 序列化路径
normalize() 规范化处理路径
