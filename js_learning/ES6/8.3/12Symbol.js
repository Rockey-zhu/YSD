//Symbol 值通过Symbol函数生成。
//保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。
{
    let a = Symbol('abc');
    console.log(a); //Symbol(abc)
    console.log(a.toString()); //Symbol(abc)
}

//2.Symbol.prototype.description § ⇧
//提供了一个实例属性description，直接返回 Symbol 的描述。
{
    const sym = Symbol('foo');

    console.log(sym.description); // "foo"
}

//3.作为属性名的 Symbol § ⇧
//由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名
{
    let mySymbol = Symbol();
    let a = {
        [mySymbol]: 'Hello!'
    };
    console.log(a[mySymbol]); // "Hello!"
}

//4.实例/消除魔术字符串
//魔术字符串: 在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值
{
    const shapeType = {
        triangle: 'Triangle'
    };

    function getArea(shape, options) {
        let area = 0;
        switch (shape) {
            case shapeType.triangle:
                area = 1 / 2 * options.width * options.height;
                break;
        }
        return area;
    }

    getArea(shapeType.triangle, { width: 100, height: 100 });
    console.log(getArea());
}


//属性名的遍历 § ⇧
//Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名
{
    const obj = {};
    let a = Symbol('a');
    let b = Symbol('b');

    obj[a] = 'Hello';
    obj[b] = 'World';

    const objectSymbols = Object.getOwnPropertySymbols(obj);

    console.log(objectSymbols); // [Symbol(a), Symbol(b)]
}

//6.我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点
{

}