//对象的类型注解，对对象结构进行约束
//设计对象的结构
let person: {
	name: string;
	age: number;
	sayHi: () => void;//sayHi方法没有参数，没有返回值
	sum: (num1: number, num2: number ) => number;//有两个数值参数和一个数值返回值
}

//对象，赋值
//赋值时如果缺失了某一个变量或者函数，会报错！
person = {
	name: "张三",
	age: 18,
	sayHi:()=>{
		console.log("hello world!")
	},
	sum:(num1: number, num2: number) =>{
		console.log(num1+num2);
		return num1+num2;
	}
}
person.sayHi();
person.sum(1,2);

//对象类型注解缺点
//1.代码结构不简洁
//2.无法复用类型注释

//接口：为对象类型注解命名，为代码建立契约约束对象结构
//接口名称以 I 开头比较规范
interface IUser {
	//对象类型注解
	name: string;
	age: number;
}

let person1: IUser = {
	name: "张三",
	age: 18,
}
let person2: IUser = {
	name: "李四",
	age: 21
}







