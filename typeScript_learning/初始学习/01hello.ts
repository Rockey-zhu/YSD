console.log("hello typescript")

//声明变量,赋值;
//number 是类型注解,类型约束
let age: number = 18;

//age ="hello"; 报错

//基本数据类型
/*
	number
	string
	boolean
	undefined
	null
*/
/*
	undefind 和 null区别
	underfind 表示 声明变量但未赋值
	null 表示 声明且赋值，就是null
*/

//算术运算符
/*
	2 - "1"  报错
	
	+"1"(string) ==> 1(number)
	
	2 - +"1"  ===>  2 - 1 
*/


// 函数
                     //参数类型 ：函数返回值类型
function alertName1(name:number):string {
	return "hello"
}
// 传值类型不确定 （类型推断）
function alertName2(name:number | string):string {
	return "hello"
}

interface Person {
	readonly id:number, // 表示只可以构造的时候赋值，后续无法调用赋值
	uname?:string, // ? 表示可以没有这个key
	age:number,
}

let ysd: Person = {
	id:1,
	//uname:"ysd", //可不构造也不会报错
	age:22,
}