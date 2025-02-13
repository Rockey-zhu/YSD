//1.String.fromCodePoint()
//ES5 提供String.fromCharCode()方法不能识别码点大于0xFFFF的字符
//ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符
{
    console.log(String.fromCodePoint(0x20BB7)); // "𠮷"
    console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'); // true
}

//2.String.raw() § ⇧
//该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串
{
    console.log(String.raw `Hi\\n`); // Hi\\n  
    console.log(String.raw `Hi\\n` === "Hi\\\\n"); //true
}

//3.实例方法：codePointAt() § ⇧
//codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。
{
    let s = '𠮷a';
    console.log(s.codePointAt(0)); // 134071
    console.log(s.codePointAt(1)); //57271
    console.log(s.codePointAt(2)); //97

    //如果想转换成十六进制的话
    console.log(s.codePointAt(0).toString(16)); // "20bb7"

}

//4.normalize()
//为了表示欧洲语言中的重音符号。两种方法
//一种是直接提供带重音符号的字符，比如Ǒ（\u01D1）
//另一种是提供合成符号，比如O（\u004F）和ˇ（\u030C）合成Ǒ（\u004F\u030C）。
//normalize()方法，用来将字符的不同表示方法统一为同样的形式
//四种参数 参考官方文档
{
    console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize()); //true
}


//5.includes(), startsWith(), endsWith()
//includes()返回布尔值，表示是否找到了参数字符串。
//tartsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
//endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
{
    let s = 'Hello world!';

    s.startsWith('Hello') // true
    s.endsWith('!') // true
    s.includes('o') // true
}

//6.repeat()
//返回一个新字符串，表示将原字符串重复n次。
{
    let x = 'ab';
    console.log(x.repeat(3)); //ababab
}

//7.padStart()，padEnd() 字符串补全长度
//如果某个字符串不够指定长度。
//padStart()用于头部补全，padEnd()用于尾部补全。
//参数：第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
{
    let x = 'ysd';
    console.log(x.padStart(5, 'ab')); //abysd
    //超出长度部分会截取补全字符串
    console.log(x.padStart(4, 'ab')); //aysd
    //最大长度参数小于原字符串，则输出原字符串
    console.log(x.padStart(2, 'ab')); //ysd
    //如果省略第二个参数，默认使用空格补全长度。
    console.log(x.padStart(5)); // '   ysd'

    console.log(x.padEnd(5, 'ab')); //ysdab
}

//8.trimStart(),trimEnd()
//它们的行为与trim()一致
//trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。
//返回的都是新字符串，不会修改原始字符串。
{
    let x = '   abc   ';
    console.log(x.trim()); // "abc"
    console.log(x.trimStart()); // "abc  "
    console.log(x.trimEnd()); // "  abc"
}


//9.matchAll()
//返回一个正则表达式在当前字符串的所有匹配
{

}