//1.RegExp构造函数
//ES6中，RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。
//返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符
{
    var regex = new RegExp(/abc/ig, 'i').flags; //i
    console.log(regex);
}

//2.字符串的正则方法
//四种方法可使用正则表达式：
//match()、replace()、search()和split()
{
    // String.prototype.match 调用 RegExp.prototype[Symbol.match]
    // String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
    // String.prototype.search 调用 RegExp.prototype[Symbol.search]
    // String.prototype.split 调用 RegExp.prototype[Symbol.split]
}


//3.u修饰符
//用来正确处理大于\uFFFF的 Unicode 字符
{

}


//4.unicode
//正则实例对象新增unicode属性，表示是否设置了u修饰符。
{
    const r1 = /hello/;
    const r2 = /hello/u;

    console.log(r1.unicode); // false
    console.log(r2.unicode); // true
}


//5.y修饰符
//“粘连”（sticky）修饰符。
//重点再看

//6.stick
//表示是否设置了y修饰符
{
    var r = /hello\d/y;
    console.log(r.sticky); // true
}

//7.flags属性
//会返回正则表达式的修饰符
{
    // ES5 的 source 属性
    // 返回正则表达式的正文
    console.log(/abc/ig.source); // "abc"

    // ES6 的 flags 属性
    // 返回正则表达式的修饰符
    console.log(/abc/ig.flags); // 'gi'
}


//8.s修饰符
//正则表达式中，点（.）是一个特殊字符，代表任意的单个字符
//s修饰符，使得.可以匹配任意单个字符。

//9.后行断言


//10.Unicode
//引入了一种新的类的写法\p{...}和\P{...}，允许正则表达式匹配符合 Unicode 某种属性的所有字符。
{
    const regexGreekSymbol = /\p{Script=Greek}/u;
    console.log(regexGreekSymbol.test('π')); // true

    //例子

    // 匹配所有空格
    /\p{ White_Space }/

    // 匹配 Emoji

    // 匹配所有的箭头字符
    //const regexArrows = /^\p{Block=Arrows}+$/u;
    //regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩') // true
}


//11.具名组匹配
//具名组匹配（Named Capture Groups），允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用
//“具名组匹配”在圆括号内部，模式的头部添加“问号 + 尖括号 + 组名”
//就可以在exec方法返回结果的groups属性上引用该组名。同时，数字序号（matchObj[1]）依然有效
{
    //未具名组匹配
    {
        const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

        const matchObj = RE_DATE.exec('1999-12-31');
        const year = matchObj[1]; // 1999
        const month = matchObj[2]; // 12
        const day = matchObj[3]; // 31
    }
    //具名组匹配
    {
        const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

        const matchObj = RE_DATE.exec('1999-12-31');
        const year = matchObj.groups.year; // 1999
        const month = matchObj.groups.month; // 12
        const day = matchObj.groups.day; // 31
    }
}

//12.正则匹配索引
//为exec()方法的返回结果加上indices属性，在这个属性上面可以拿到匹配的开始位置和结束位置。
{
    const text = 'zabbcdef';
    const re = /ab/;
    const result = re.exec(text);

    console.log(result.index); // 1
    console.log(result.indices); // [ [1, 3] ]
}

//13.matchAll()
{
    const string = 'test1test2test3';
    const regex = /t(e)(st(\d?))/g;

    for (const match of string.matchAll(regex)) {
        console.log(match);
    }
}