//Iterator 作用
//一是为各种数据结构，提供一个统一的、简便的访问接口；
//二是使得数据结构的成员能够按某种次序排列；
//三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
//next()方法  ，返回一个对象

//Array  Map   Set  String   arguments  Nodelist 都有iterator接口

{
    //iterator内部实现代码
    let arr = ['a', 'b', 'c']
    let it = makeIterator(arr);

    function makeIterator(arr) {
        let nextIndex = 0;
        return {
            next: function() {
                return nextIndex < arr.length ? {
                    value: arr[nextIndex++],
                    done: false
                } : {
                    value: undefined,
                    done: true
                }
            }
        }
    }

    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
}
console.log("-----------------------");

//调用
{
    let arr = ['a', 'b', 'c'];
    let it = arr[Symbol.iterator](); // 调用iterator接口， Array内部已经实现了该接口，所以可以直接调用
    console.log(it.next()); //{ value: 'a', done: false }
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
}
console.log("-----------------------");

//Map 调用iterator
{
    let map = new Map();
    map.set('name', 'zhangsan')
    map.set('name2', 'lisi');
    let it = map[Symbol.iterator]();
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())

}

console.log("-----------------------");
//iterator 主要还是给  for ... of 消费的
{
    let arr = ['a', 'b', 'c'];

    function a(arr) {
        for (let v of arr) {
            console.log(v);
        }
    }
    a(arr);
}