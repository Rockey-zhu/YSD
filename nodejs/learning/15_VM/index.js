//  VM 创造沙箱环境   沙箱：独立封闭的场景


const fs = require('fs');
const vm = require('vm');
let age = 33;
let content = fs.readFileSync('test.txt', 'utf-8');

//  eval(content);

let fn = new Function('age', 'return age+1');
console.log(fn(age));

// -----此处与外部信息相隔离,无法调用到本文件中的局部变量----
vm.runInThisContext(content);
console.log(ages)