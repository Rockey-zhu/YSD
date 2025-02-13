//数组解构赋值
{
    //以前，为变量赋值，只能直接指定值。

    let a = 1;
    let b = 2;
    let c = 3;
    //ES6 允许写成下面这样。

    let [a1, b1, c1] = [1, 2, 3];

}

{
    let [a, [b], d] = [1, [2, 3], 4];
    a // 1
    b // 2
    d // 4
}

//默认值
//解构赋值允许指定默认值。
{
    let [foo = true] = [];
    foo // true

    let [x, y = 'b'] = ['a']; // x='a', y='b'
    let [x1, y1 = 'b'] = ['a', undefined]; // x='a', y='b'
}


//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。只有当一个数组成员严格等于undefined，默认值才会生效。
{
    let [x1 = 1] = [undefined];
    x1 // 1
    //null不严格等于undefined
    let [x3 = 1] = [null];
    x3 // null
}


{
    let [x = 1, y = x] = []; // x=1; y=1
    let [x1 = 1, y1 = x] = [2]; // x=2; y=2
    let [x2 = 1, y2 = x] = [1, 2]; // x=1; y=2
    // let [x = y, y = 1] = []; // ReferenceError: y is not defined

}

//对象的解构赋值 § ⇧
{
    let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
    foo // "aaa"
    bar // "bbb"

    let { bazz } = { foo: 'aaa', bar: 'bbb' };
    bazz // undefined

    //如果变量名与属性名不一致，必须写成下面这样
    let { foo: baz1 } = { foo: 'aaa', bar: 'bbb' };
    baz1 // "aaa"
}

//嵌套
{
    let obj = {};
    let arr = [];

    //({......})  这样写是为了防止把{} 当成代码块
    ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

    obj // {prop:123}
    arr // [true]
}

//字符串的解构赋值
{
    const [a, b, c, d, e] = 'hello';
    a // "h"
    b // "e"
    c // "l"
    d // "l"
    e // "o"
    //  类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
    let { length: len } = 'hello';
    len // 5
}

//可以使用圆括号的情况 
{
    [(b)] = [3]; // 正确
    ({ p: (d) } = {}); // 正确
    [(parseInt.prop)] = [3]; // 正确
}


//用途
//（1）交换变量的值
{
    let x = 1;
    let y = 2;

    [x, y] = [y, x];
}
//（2）从函数返回多个值
{
    // 返回一个数组

    function example1() {
        return [1, 2, 3];
    }
    let [a, b, c] = example1();

    // 返回一个对象

    function example2() {
        return {
            foo: 1,
            bar: 2
        };
    }
    let { foo, bar } = example2();
}
//(3)函数参数的定义
{
    // 参数是一组有次序的值
    function f1([x, y, z]) {}
    f1([1, 2, 3]);

    // 参数是一组无次序的值
    function f2({ x, y, z }) {}
    f2({ z: 3, y: 2, x: 1 });
}
//（4）提取 JSON 数据
{
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number); // 42, "OK", [867, 5309]
}
//（5）函数参数的默认值
{

}
//（6）遍历 Map 结构
{
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }
    // first is hello
    // second is world
}

//（7）输入模块的指定方法