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

{
    let cout = 1;
    let fun = (a, c) => {
        return a + cout;
    }
    console.log(fun(3, 5));

    function fun2(a, c) {
        return a + cout;
    }
    console.log(fun2(3, 5));
}