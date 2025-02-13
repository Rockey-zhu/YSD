//字符串的扩展


//1.ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
{
    //这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。
    console.log("\u0061"); // "a"
    console.log("\uD842\uDFB7"); // "𠮷"

    //将码点放入大括号，就能正确解读该字符。
    console.log("\u{20BB7}"); // "𠮷"
}

//2.字符串的遍历器接口 § ⇧
{
    for (let codePoint of 'foo') {
        console.log(codePoint)
    }
    // "f"
    // "o"
    // "o"
}

{
    /*
    JavaScript 规定有5个字符，不能在字符串里面直接使用，只能使用转义形式。
    U+005C：反斜杠（reverse solidus)
    U+000D：回车（carriage return）
    U+2028：行分隔符（line separator）
    U+2029：段分隔符（paragraph separator）
    U+000A：换行符（line feed）
    */
    //服务器输出的 JSON 被JSON.parse解析，就有可能直接报错.解决方案如下
    const PS = eval("'\u2029'");
    console.log(PS);
}
//3.模板字符串
//模板字符串中嵌入变量，需要将变量名写在${}之中
{
    //模板字符串（template string）是增强版的字符串，用反引号（`）标识。
    //     // 普通字符串
    //     `In JavaScript '\n' is a line-feed.`

    //     // 多行字符串
    //     `In JavaScript this is
    //  not legal.`

    console.log(`string text line 1
    string text line 2`);

    // 字符串中嵌入变量
    let name = "Bob",
        time = "today";
    `Hello ${name}, how are you ${time}?`

    //如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
    let greeting = `\`Yo\` World!`;
    console.log(greeting);
}


//4.模板编译   疑问
{
    let a = 5;
    let b = 10;

    function tag(s, v1, v2) {
        console.log(s[0]); // "Hello "
        console.log(s[1]); // " world "
        console.log(s[2]); // ""
        console.log(v1); // 15
        console.log(v2); // 50

        return "OK";
    }

    tag `Hello ${a + b} world ${a * b}`;
}

{
    let total = 30;
    let msg = passthru `The total is ${total} (${total * 1.05} with tax)`;

    function passthru(literals) {
        let result = '';
        let i = 0;

        while (i < literals.length) {
            result += literals[i++];
            if (i < arguments.length) {
                result += arguments[i];
            }
        }

        return result;
    }

    console.log(msg); // "The total is 30 (31.5 with tax)"
}