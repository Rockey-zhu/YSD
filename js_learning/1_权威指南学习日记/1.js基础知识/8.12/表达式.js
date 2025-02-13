//in 运算符
//in左侧最好为字符串或者可转化为字符串的操作符
//in右侧最好
//如果右侧对想拥有一个左侧操作数值的属性名返回true
{
    let point = { x: 1, y: 1 }
    console.log("y" in point) //true
}

//instanceof 运算符
//左侧最好是一个对象
//右侧最好是对象的类
//左侧是右侧的实例，返回true
{
    let dd = new Date();
    console.log(dd instanceof Date); //true
}

//eval()