// Set 结构不会添加重复的值。
{
    const s = new Set();
    let oldarr = [2, 3, 5, 4, 5, 2, 2];
    oldarr.forEach(x => s.add(x));

    for (let i of s) {
        console.log(i);
    }
    // 2 3 5 4
}
//set数组去重
{
    function dedupe(array) {
        return Array.from(new Set(array));
    }

    console.log(dedupe([1, 1, 2, 3])); // [1, 2, 3]
}

//Set 结构的实例
/* 
Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数。

Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
Set.prototype.clear()：清除所有成员，没有返回值。
*/
{
    const s = new Set();

    s.add(1).add(2).add(2);
    // 注意2被加入了两次

    s.size; // 2

    s.has(1); // true
    s.has(2); // true
    s.has(3); // false

    s.delete(2);
    s.has(2); // false
}

//遍历操作
/*
Set.prototype.keys()：返回键名的遍历器
Set.prototype.values()：返回键值的遍历器
Set.prototype.entries()：返回键值对的遍历器
Set.prototype.forEach()：使用回调函数遍历每个成员
*/
{
    let set = new Set(['red', 'green', 'blue']);

    for (let item of set.keys()) {
        console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.values()) {
        console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.entries()) {
        console.log(item);
    }
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]
}

//可以省略values方法，直接用for...of循环遍历 Set。
{
    let set = new Set(['red', 'green', 'blue']);

    for (let x of set) {
        console.log(x);
    }
    // red
    // green
    // blue
}
//扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。
{
    let arr = [3, 5, 2, 2, 5, 5];
    let unique = [...new Set(arr)];
    console.log(unique); // [ 3, 5, 2 ]
}

//set实现交集，并集和差集
{
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

    // 并集
    let union = new Set([...a, ...b]);
    // Set {1, 2, 3, 4}

    // 交集
    let intersect = new Set([...a].filter(x => b.has(x)));
    // set {2, 3}

    // （a 相对于 b 的）差集
    let difference = new Set([...a].filter(x => !b.has(x)));
    // Set {1}
}


//WeakSet § ⇧
//与 Set 类似
//区别:1.WeakSet 的成员只能是对象，而不能是其他类型的值
{
    //可以使用new命令，创建 WeakSet 数据结构
    const ws1 = new WeakSet();
    /*
    WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
    WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
    WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。 
    */
    const ws = new WeakSet();
    const obj = {};
    const foo = {};
    const window = {}
    ws.add(window);
    ws.add(obj);

    ws.has(window); // true
    ws.has(foo); // false

    ws.delete(window);
    ws.has(window); // false

}