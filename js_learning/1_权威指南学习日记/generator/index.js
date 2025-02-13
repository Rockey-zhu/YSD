//而 Generator 可以按需一个接一个地返回（“yield”）多个值。
//它们可与 iterable 完美配合使用，从而可以轻松地创建数据流。
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
let a =generateSequence()
console.log(a)


  //一个 generator 的主要方法就是 next(),这样才会执行内容
//   console.log(a.next())
//   console.log(a.next())
//   console.log(a.next())

for(let value of a)  {
    console.log(value)
}  
