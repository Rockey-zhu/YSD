/*
class MyClass {
    // class 方法
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }

*/

//new 会自动调用 constructor() 方法，因此我们可以在 constructor() 中初始化对象。

class DOG {
    constructor(name){
        this.name = name;
    }

    myName(){
        console.log("DOG--this.name---",this.name)
    }
}

let wangwang = new DOG("tom");
wangwang.myName();



//--------等价于----------------------------------------------------------------
function User(name) {
    this.name = name
}
User.prototype.Name = function(){
    console.log("user--this.name---",this.name)
}

let user = new User("Kitty")
user.Name()

//----------差异----------------------------------------------------------------
/**
 * 通过 class 创建的函数具有特殊的内部属性标记 [[IsClassConstructor]]: true
 * 
 * class必须使用 new 来调用它
 * 
 * 类方法不可枚举。
 */