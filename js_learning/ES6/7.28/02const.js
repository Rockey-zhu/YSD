//const

//const声明一个只读的常量。一旦声明，常量的值就不能改变
{
    const PI = 3.1415;
    PI // 3.1415

    //PI = 3; //TypeError: Assignment to constant variable.

}

//const一旦声明变量，就必须立即初始化，不能留到以后赋值。
{
    //const foo;// SyntaxError: Missing initializer in const declaration
}

//const的作用域与let命令相同：只在声明所在的块级作用域内有效。
{
    if (true) {
        const MAX = 5;
    }

    // MAX // Uncaught ReferenceError: MAX is not defined
}



//顶层对象的属性
//let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
{
    var a = 1;
    // 如果在 Node 的 REPL 环境，可以写成 global.a
    // 或者采用通用方法，写成 this.a
    window.a // 1

    let b = 1;
    window.b // undefined

}