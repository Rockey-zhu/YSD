{
    //sort英文排序
    let a = ['ant', 'Bug', 'cat', 'Dog', 'bird'];
    //sort内不加任何函数，会区分大小写
    //排序结果：[ 'Bug', 'Dog', 'ant', 'bird', 'cat' ]
    console.log(a.sort());

    //不区分大小写
    //toLowerCase()将字符串转换成小写
    let noCaseSensitive = a.sort(function(s, t) {
        let a = s.toLowerCase();
        let b = t.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    //[ 'ant', 'bird', 'Bug', 'cat', 'Dog' ]
    console.log(noCaseSensitive)
}