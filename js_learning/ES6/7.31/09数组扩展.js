//1.扩展运算符 (...)
{
    //代替appply方法
    //es5
    console.log(Math.max.apply(null, [14, 3, 77])); //77
    //es6
    console.log(Math.max(...[14, 3, 77])); //77


    //应用
    //1.复制数组
    const a1 = [1, 2];
    ////方法一
    const a2 = [...a1];
    ////方法二
    const [...a3] = a1;
    console.log(a2);
    console.log(a3);

    //2.合并数组
    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];

    // ES5 的合并数组
    console.log(arr1.concat(arr2, arr3));
    // [ 'a', 'b', 'c', 'd', 'e' ]

    // ES6 的合并数组 浅拷贝
    console.log([...arr1, ...arr2, ...arr3]);
    // [ 'a', 'b', 'c', 'd', 'e' ]

    //3.与解构赋值结合
    const [first, ...rest] = [1, 2, 3, 4, 5];
    console.log(first); // 1
    console.log(rest); // [2, 3, 4, 5]

    //4.字符串转换成数组
    [...
        'hello'
    ] // [ "h", "e", "l", "l", "o" ]

    //
}

//2.Array.from方法用于将两类对象转为真正的数组
{
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
}
//3.Array.of方法用于将一组值，转换为数组。
//弥补Array的不足   
{
    //Array只有当参数不少于二的时候才会返回新数组
    Array() // []
    Array(3) // [, , ,]
    Array(3, 11, 8) // [3, 11, 8]

    Array.of(3, 11, 8) // [3,11,8]
    Array.of(3) // [3]
    Array.of(3).length // 1
}

//4.copyWithin()方法
//在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
/*
三个参数
target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
*/
{
    let arr1 = [1, 2, 3, 4, 5, 6];
    arr2 = arr1.copyWithin(0, 3); //[ 4, 5, 6, 4, 5, 6 ]
    console.log(arr2);

    // 将3号位复制到0号位
    [1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]
}

//5.find 和 findIndex
//find 返回查找的数据   findIndex返回数据下标
{
    [1, 4, -5, 10].find((n) => n < 0) // -5

    let a = [1, 4, -5, 10].findIndex((n) => n < 0); //2
    //console.log(a);
}


//6.fill方法使用给定值，填充一个数组。
{
    let arr1 = [1, 2, 3, 4, 5];
    console.log(arr1.fill(7)); //[ 7, 7, 7, 7, 7 ]
}

//7.entries()，keys()和values() 都返回一个遍历器对象
//entries() 对键值对的遍历
//keys() 对键名的遍历 
//values() 对键值的遍历
{
    let arr1 = [1, 2, 3, 4, 5, 6];
    for (let idnex of arr1.values()) {
        //keys()  0   1   2   3   4   5
        //entries() [0,1] [ 1, 2 ]  [ 2, 3 ]  [ 3, 4 ]  [ 4, 5 ]  [ 5, 6 ]
        //values()   1  2  3  4  5   6   
        //console.log(idnex);
    }
}


//8.Array.prototype.includes
//返回一个布尔值，表示某个数组是否包含给定的值
{
    [1, 2, 3].includes(2); // true
    [1, 2, 3].includes(4); // false
    [1, 2, NaN].includes(NaN); // true
}

//9.flat()，flatMap()
//Array.prototype.flat()用于将嵌套的数组“拉平”,变成一维的数组
//flatMap()方法对原数组的每个成员执行一个函数,然后对返回值组成的数组执行flat()方法
{
    //flat()方法的参数,表示想要拉平的层数，默认为1
    [1, 2, [3, [4, 5]]].flat(); // [1, 2, 3, [4, 5]]

    [1, 2, [3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]

    //flat()方法会跳过空位
    [1, 2, , 4, 5].flat(); // [1, 2, 4, 5]

    //
    // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
    [2, 3, 4].flatMap((x) => [x, x * 2]);
    // [2, 4, 3, 6, 4, 8]
}


//10.数组的空位
//数组的空位指，数组的某一个位置没有任何值
{

}


//11.Array.prototype.sort() 的排序稳定性
{
    const arr = [
        'peach',
        'straw',
        'apple',
        'spork'
    ];

    const stableSorting = (s1, s2) => {
        return s1[0] < s2[0] ? -1 : 1;
    };

    console.log(arr.sort(stableSorting)); // ["apple", "peach", "straw", "spork"]
}