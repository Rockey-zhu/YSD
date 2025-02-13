//通常，如果发生错误，脚本就会“死亡”（立即停止），并在控制台将错误打印出来。
//但是有一种语法结构 try..catch，它使我们可以“捕获（catch）”错误，因此脚本可以执行更合理的操作，而不是死掉。

/*
try {

}catch(err){

}
*/

//如果在“计划的（scheduled）”代码中发生异常，例如在 setTimeout 中，则 try..catch 不会捕获到异常：
//如果使用setTimeout需要在内部再加一个try catch

/**
name
Error 名称。例如，对于一个未定义的变量，名称是 "ReferenceError"。
message
关于 error 的详细文字描述。
还有其他非标准的属性在大多数环境中可用。其中被最广泛使用和支持的是：

stack
当前的调用栈：用于调试目的的一个字符串，其中包含有关导致 error 的嵌套调用序列的信息。

*/
let json = "{ bad json }";

try {
  let user = JSON.parse(json); // <-- 当出现一个 error 时...
  alert( user.name ); // 不工作

} catch (e) {
  // ...执行会跳转到这里并继续执行
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( e.name );
  console.log( e.message );
}

//----------------
try {
    //... 尝试执行的代码 ...
 } catch(e) {
   // ... 处理 error ...
 } finally {
  //  ... 总是会执行的代码 ...
 }
