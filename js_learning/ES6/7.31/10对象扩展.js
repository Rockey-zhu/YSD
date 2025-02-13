//3.方法的name属性
{
    const person = {
        sayName() {
            console.log('hello!');
        },
    };

    person.sayName.name // "sayName"
}
//如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面
{
    const obj = {
        get foo() {},
        set foo(x) {}
    };

    //obj.foo.name// TypeError: Cannot read property 'name' of undefined

    const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

    descriptor.get.name // "get foo"
    descriptor.set.name // "set foo"
}


//4.属性的可枚举性和遍历

//可枚举性
//描述对象（Descriptor），用来控制该属性的行为。
//Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
//描述对象的enumerable属性，称为“可枚举性”，
{

}
//属性的遍历 § ⇧
{

}