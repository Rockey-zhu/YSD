//arguments.length
//arguments.callee.length
function check(args) {
	var actual = args.length;			//实参的真实个数
	var expected = args.callee.length;	//期望的实参个数
	if(actual !== expected)				//不同则抛出异常
		throw Error("Expected" + expected + "args; got" + actual);
}

function f(x,y,z){
	check(arguments);
	return x+y+z;
}
console.log(f(1,2,3));