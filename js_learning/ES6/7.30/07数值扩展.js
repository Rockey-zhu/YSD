//1.二进制和八进制表示法
//二进制前缀0b（或0B）
//八进制前缀0o（或0O）
{
    console.log(0b111110111 === 503); //true
    console.log(0o767 === 503);
}

//2.Number.isFinite(), Number.isNaN() § ⇧
//Number.isFinite()用来检查一个数值是否为有限的,注意，如果参数类型不是数值，Number.isFinite一律返回false。
//Number.isNaN()用来检查一个值是否为NaN。如果参数类型不是NaN，Number.isNaN一律返回false。
{
    Number.isFinite(15); // true
    Number.isFinite(0.8); // true
    Number.isFinite(NaN); // false

    Number.isNaN(NaN) // true
    Number.isNaN(15) // false
    Number.isNaN('15') // false
}

//3.Number.parseInt(), Number.parseFloat() § ⇧
//ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
{
    // ES5的写法
    parseInt('12.34') // 12
    parseFloat('123.45#') // 123.45

    // ES6的写法
    Number.parseInt('12.34') // 12
    Number.parseFloat('123.45#') // 123.45
}

//4.Number.isInteger() § ⇧
//Number.isInteger()用来判断一个数值是否为整数。
//注意,数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位)
//如果数值的精度超过这个限度，第54位及后面的位就会被丢弃

//类似的情况还有，如果一个数值的绝对值小于Number.MIN_VALUE（5E-324）
//会被自动转为 0。
{
    Number.isInteger(3.0000000000000002) // true

    Number.isInteger(5E-324) // false
    Number.isInteger(5E-325) // true
}

//5.Number.EPSILON
//它表示 1 与大于 1 的最小浮点数之间的差。
{
    console.log(Number.EPSILON); //2.220446049250313e-16
    console.log(0.1 + 0.2 == 0.3); //false
    //umber.EPSILON的实质是一个可以接受的最小误差范围
    function withinErrorMargin(left, right) {
        return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2); //误差范围为2的-50次方
    }
    console.log(withinErrorMargin(0.1 + 0.2, 0.3)); //true
}


//6.安全整数和 Number.isSafeInteger() § ⇧
//JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）
//Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
//Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
{

}


//7.Math扩展
{
    //Math.trunc方法用于去除一个数的小数部分，返回整数部分
    Math.trunc(4.1) // 4
    Math.trunc(-4.9) // -4
    Math.trunc(-0.1234) // -0
    Math.trunc(true) //1
    Math.trunc(false) // 0
    Math.trunc(null) // 0
    Math.trunc(NaN); // NaN
    Math.trunc('foo'); // NaN
    Math.trunc(); // NaN
    Math.trunc(undefined) // NaN


    //Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
    // 参数为正数，返回 + 1；
    // 参数为负数，返回 - 1；
    // 参数为 0，返回0；
    // 参数为 - 0，返回 - 0;
    // 其他值，返回NaN。
    Math.sign(-5) // -1
    Math.sign(5) // +1

    //Math.cbrt()方法用于计算一个数的立方根。
    Math.cbrt(-1) // -1
    Math.cbrt(0) // 0
    Math.cbrt(1) // 1
    Math.cbrt(2) // 1.2599210498948732

    //Math.clz32()方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0。

    //Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。

    //Math.fround方法返回一个数的32位单精度浮点数形式。

    //Math.hypot方法返回所有参数的平方和的平方根。
    Math.hypot(3, 4); // 5
    Math.hypot(3, 4, 5); // 7.0710678118654755

    //Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。


    //Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。


    //Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。


    //Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。


    /*
    Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
    */

}

//8.指数运算符（**）
{
    let a = 2 ** 2; // 4
    let b = 2 ** 3; // 8
}

//9.BigInt 数据类型
//用来表示整数，没有位数的限制，任何位数的整数都可以精确表示
//为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。
{
    let a = 1234; // 普通整数
    //let b = 1234n; // BigInt   //有问题vs会把n和数字分离

    BigInt(123) // 123n
}