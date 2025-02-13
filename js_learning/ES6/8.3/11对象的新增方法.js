//1.Object.is()
//用来比较两个值是否严格相等,与严格比较运算符（===）的行为基本一致
{
    //排除了 === 的两个问题
    +0 === -0 //true
    NaN === NaN // false

    Object.is(+0, -0) // false
    Object.is(NaN, NaN) // true

}


//2.Object.assign() § ⇧
//用于对象的合并
//object.assign()方法实行的是浅拷贝，而不是深拷贝。
//到同名属性，Object.assign()的处理方法是替换，而不是添加。
{
    const target = { a: 1 };

    const source1 = { b: 2, c: 1 };
    const source2 = { c: 3 };

    Object.assign(target, source1, source2);
    target // {a:1, b:2, c:3}
}
//常见用途
{
    //为对象添加属性
    class Point {
        constructor(x, y) {
            Object.assign(this, { x, y });
        }
    }

    //为对象添加方法
    //克隆对象
    //合并多个对象
    //为属性指定默认值
}

//3.Object.getOwnPropertyDescriptors()
//返回某个对象属性的描述对象
//主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
{

}


//4.原型对象的操作方法
//__proto__
//无论从语义角度还是兼容性角度，都不要使用这个属性
//用Object.setPrototypeOf()（写操作）、
//Object.getPrototypeOf()（读操作）、
//Object.create()（生成操作）代替。
{

}

//Object.setPrototypeOf()
//用来设置一个对象的原型对象（prototype），返回参数对象本身。
{
    let proto = {};
    let obj = { x: 10 };
    Object.setPrototypeOf(obj, proto);

    proto.y = 20;
    proto.z = 40;

    obj.x; // 10
    obj.y; // 20
    obj.z; // 40
}

//Object.setPrototypeOf()
//用于读取一个对象的原型对象
{
    function Rectangle() {
        // ...
    }

    const rec = new Rectangle();

    Object.getPrototypeOf(rec) === Rectangle.prototype; // true
}


//5.Object.keys()，Object.values()，Object.entries() § ⇧
//Object.keys()
//返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
{
    var obj = { foo: 'bar', baz: 42 };
    Object.keys(obj)
        // ["foo", "baz"]
}
//Object.values()
//成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
{
    const obj = { foo: 'bar', baz: 42 };
    Object.values(obj); // ["bar", 42]

    //
    const obj1 = { 100: 'a', 2: 'b', 7: 'c' };
    Object.values(obj1); // ["b", "c", "a"]
}
//Object.entries()
//返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
{
    const obj = { foo: 'bar', baz: 42 };
    Object.entries(obj); // [ ["foo", "bar"], ["baz", 42] ]
}


//6.Object.fromEntries()
//Object.entries()的逆操作，用于将一个键值对数组转为对象
{
    Object.fromEntries([
            ['foo', 'bar'],
            ['baz', 42]
        ])
        // { foo: "bar", baz: 42 }
}