//var , let , const区别


//let所声明的变量，只在let命令所在的代码块内有效
{
    let a = 10;
    var b = 10;
    console.log("代码块内部" + a, b);
}
//console.log("代码块外部" + a);  a is not defined
console.log("代码块外部" + b);

//所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值
var c = [];
for (var i = 0; i < 6; i++) {
    c[i] = function() {
        console.log(i);
    }
}
c[1](); //6
c[2](); //6

//如果使用let，声明的变量仅在块级作用域内有效
var ac = [];
for (let i = 0; i < 6; i++) {
    ac[i] = function() {
        console.log(i);
    };
}
ac[2](); // 2
ac[3](); // 3



//var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
//console.log(bar); // 报错ReferenceError
//let bar = 2;


//暂时性死区,（temporal dead zone，简称 TDZ）
var tmp = 123;

if (true) {
    //tmp = 'abc'; // ReferenceError
    //console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123


}


{

    //typeof x; // ReferenceError
    let x;
    //如果一个变量根本没有被声明，使用typeof反而不会报错。
    typeof undeclared_variable // "undefined"
}

//隐秘的“死区”
{
    function bar1(x = y, y = 2) { //y没声明
        return [x, y];
    }

    //ba1r(); // 报错

    function bar(x = 2, y = x) {
        return [x, y];
    }
    bar(); // [2, 2]

}


//let不允许在相同作用域内，重复声明同一个变量。



//块级作用域
//为什么需要块级作用域
//1.内层变量可能会覆盖外层变量。
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // undefined

//2.用来计数的循环变量泄露为全局变量
//例子：for循环内的i

//let实际上为 JavaScript 新增了块级作用域。
{
    function f1() {
        let n = 5;
        if (true) {
            let n = 10;
        }
        console.log(n); // 5
    }
    f1();
}



//ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。