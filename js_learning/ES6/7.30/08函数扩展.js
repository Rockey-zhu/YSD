//1.函数参数的默认值
//ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
{
    function log(x, y = 'World') {
        console.log(x, y);
    }


    //函数的length属性 
    //返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真
}

//2.rest参数（形式为...变量名）
/*
用于获取函数的多余参数;
rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
函数的length属性，不包括 rest 参数。
*/
{
    function add(...values) {
        let sum = 0;

        for (var val of values) {
            sum += val;
        }

        return sum;
    }
    let b = add(2, 5, 3); // 10
    console.log(b);

    //
    function push(array, ...items) {
        items.forEach(function(item) {
            array.push(item);
            console.log(item);
        });
    }

    var a = [];
    push(a, 1, 2, 3);
}


//3.严格模式
//'use strict';
{

}

//4.name
//返回该函数的函数名


//5.箭头函数
//箭头函数，都没有自己的this,不能用call()、apply()、bind()
/*
注意点:
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
（3）不可以使用arguments对象
（4）不可以使用yield命令
*/
{
    var f1 = v => v;
    // 等同于
    var f2 = (v) => {
        return v;
    };

    //不需要参数的
    var a1 = () => 5;
    // 等同于
    var a2 = function() { return 5 };

    //代码块部分多于一条语句，就要使用大括号将它们括起来
    var sum = (num1, num2) => { return num1 + num2; }

    // 如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
    let getTempItem = id => ({ id: id, name: "Temp" });
}
//疑问代码区域
{

    const cat = {
        lives: 9,
        jumps: () => {
            return this.lives--;
        }
    }
    console.log(cat.jumps());
}


//6.尾调用优化
//尾调用某个函数的最后一步是调用另一个函数
{
    //尾调用不一定出现在函数尾部， 只要是最后一步操作即可。
    function f(x) {
        if (x > 0) {
            return m(x)
        }
        return n(x);
    }
}
//尾递归,函数尾调用自身
{

}


//7.ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。

//8.对函数实例的toString()方法做出了修改
//回函数代码本身,不会省略空格和注释
{
    function foo(value1) {
        return value1 = 2;
    }
    console.log(foo.toString());

}


//9.catch命令参数省略
{
    try {
        // ...
    } catch (err) {
        // 处理错误
    }

    //ES6
    try {
        // ...
    } catch {
        // ...
    }
}