//它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键；
//Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，

//类似于集合 ，列表  
{
    //第一个是键，第二个是值
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    //为map新增属性（传值）.““键”的范围不限于字符串“体现
    map.set(555, '18');

    //传入多个值
    map.set(666, '19')
        .set(777, '20');

    console.log(map); //Map(3) { 'name' => '张三', 'title' => 'Author', 555 => '18' }
    console.log(map.get(555)); //18
    //获取长度
    console.log(map.size); // 5
    console.log(map.has('name')); // true
    map.get('name') // "张三"
    map.has('title'); // true
    map.get('title'); // "Author"

    //删除某个元素
    map.delete(777);
    console.log(map.size); //4

    //清空
    /*map.clear();
    console.log(map.size); //0
    */

    //获取所有的键赋给k
    for (let k of map.keys()) {
        console.log(k); //name    title   555   666
    }

    //获取所有的值赋给v
    for (let v of map.values()) {
        console.log(v); //张三   Author   18  19
    }

    //获取所有的键值
    for (let kv of map.entries()) {
        console.log(kv[0] + "---" + kv[1]); //name---张三 ........
    }

    //解构赋值 --- 获取所有的键值
    for (let [k, v] of map.entries()) {
        console.log(k + "---" + v); //name---张三 ........
    }
}
//Map构造函数接受数组作为参数
{
    const items = [
        ['name', '张三'],
        ['title', 'Author']
    ];

    const map = new Map();

    items.forEach(
        ([key, value]) => map.set(key, value)
    );
}