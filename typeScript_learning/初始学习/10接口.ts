// 接口 interface
/**
 * interface && type
 * same:
 * 1-1:都可以描述一个对象或者函数
 * 1-2:都允许进行扩展
 * 
 * different：
 * 2-1：type声明基本类型别名 ， 联合类型 ， 元组等
 * 2-2：typeof 获取实例对象
 * 2-3：interface 可以被合并
 * 
 * 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
 * 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
*/
interface Persons {
	name:string;//必填属性
	isStudent:boolean;
	ages?:number; //可选属性
	[propName: string]: string | number | boolean | undefined;//任意属性
}

let tom: Persons = {
	name:"tom",
	isStudent:true,
	ages:16,
	birdthday:"0608",
}
console.log("___tom__",tom)