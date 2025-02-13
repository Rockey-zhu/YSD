//四舍五入，填充0
var n = 23333.141592679012;
console.log(n.toFixed(0)); //2333
console.log(n.toFixed(1)); //2333.1


var a = 0.3;
var b = 0.1 + 0.2; //其实不等于0.3  而是0.300000000x
console.log(a === b) //false
console.log(a == b) //false
console.log(a == b.toFixed(1)); //true