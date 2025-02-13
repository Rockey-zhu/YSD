let i = 3;
let obj = {
    ei:3
}
console.log("-----",i.__proto__ )
console.log("-----",obj.__proto__ )

//用 __proto__ 可以设置obj的隐藏属性 [[Prototype]]
obj.__proto__  = "admin"
console.log("--obj.__proto__---",obj.__proto__ )


//---连接两个对象---
let obj2 = {
    ad:8
}

obj.__proto__  = obj2;
console.log("obj.ad--",obj.ad)

////------这时可以说obj2是obj的原型，obj是从obj2继承而来的
///-------类似于继承和多态

let animal={
    eat:true,
    run(){
        console.log("--runing--")
    }
}

let dog = {
    __proto__:animal,
    worf : true,
}
dog.run()

let tiddy ={
    __proto__:dog,
    name:"tiddy",
}
tiddy.run()

//原型链可以很长 入上述的原型链 animal---dog----tiddy---等等

///注意事项：引用不能形成闭环，回报错  如：animal--dog---tiddy---animal 就不行
//           __proto__ 的值可以是对象，也可以是 null。而其他的类型都会被忽略

/*
__proto__ 属性有点过时了。它的存在是出于历史的原因，
现代编程语言建议我们应该使用函数 Object.getPrototypeOf/Object.setPrototypeOf 
来取代 __proto__ 去 get/set 原型。。
*/

//也可以对原型直接进行写操作
tiddy.run = ()=>{
    console.log("tiddy can run ")
}
tiddy.run()

