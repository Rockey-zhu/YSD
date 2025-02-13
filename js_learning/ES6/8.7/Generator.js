//一种异步编程解决方案
//一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态

//yield表达式是暂停执行的标记，而next方法可以恢复执行
{
    function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }

    var hw = helloWorldGenerator();

    console.log(hw.next()); //{ value: 'hello', done: false }
    console.log(hw.next()); //{ value: 'world', done: false }
    console.log(hw.next());
    console.log(hw.next());
}


//yield与return
//相似之处在于，都能返回紧跟在语句后面的那个表达式的值
//区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。
//yield只能在generator函数中运行


//yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
{
    function* demo() {
        //console.log('Hello' + yield); // SyntaxError
        //console.log('Hello' + yield 123); // SyntaxError

        console.log('Hello' + (yield)); // OK
        console.log('Hello' + (yield 123)); // OK
    }
}


/*
yield*表达式
用来在一个 Generator 函数里面执行另一个 Generator 函数。
*/
{
    function* inner() {
        yield 'hello!';
    }

    function* outer1() {
        yield 'open';
        yield inner();
        yield 'close';
    }

    var gen = outer1()
    gen.next().value // "open"
    gen.next().value // 返回一个遍历器对象
    gen.next().value // "close"

    function* outer2() {
        yield 'open'
        yield* inner()
        yield 'close'
    }

    var gen = outer2()
    gen.next().value // "open"
    gen.next().value // "hello!"
    gen.next().value // "close"
}


//Generator.prototype.throw() § ⇧
//一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。
{
    function* g() {
        yield 1;
        console.log('throwing an exception');
        throw new Error('generator broke!');
        //后续两行yield就不会再去执行了
        yield 2;
        yield 3;
    }

    function log(generator) {
        var v;
        console.log('starting generator');
        try {
            v = generator.next();
            console.log('第一次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        try {
            v = generator.next();
            console.log('第二次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        try {
            v = generator.next();
            console.log('第三次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        console.log('caller done');
    }

    log(g());
    // starting generator
    // 第一次运行next方法 { value: 1, done: false }
    // throwing an exception
    // 捕捉错误 { value: 1, done: false }
    // 第三次运行next方法 { value: undefined, done: true }
    // caller done
}

//Generator 修改成构造函数（能用new）
{
    function* gen() {
        this.a = 1;
        yield this.b = 2;
        yield this.c = 3;
    }

    function F() {
        return gen.call(gen.prototype);
    }

    var f = new F();

    f.next(); // Object {value: 2, done: false}
    f.next(); // Object {value: 3, done: false}
    f.next(); // Object {value: undefined, done: true}

    f.a // 1
    f.b // 2
    f.c // 3 
}

/*
Generator.prototype.return()
Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。

如果return方法调用时，不提供参数，则返回值的value属性为undefined。
*/
{
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    var g = gen();

    g.next() // { value: 1, done: false }
    g.return('foo') // { value: "foo", done: true }
    g.next() // { value: undefined, done: true }
}

/*
如果 Generator 函数内部有try...finally代码块，
且正在执行try代码块，那么return方法会导致立刻进入finally代码块，
执行完以后，整个函数才会结束。
*/
{
    function* numbers() {
        yield 1;
        try {
            yield 2;
            yield 3;
        } finally {
            yield 4;
            yield 5;
        }
        yield 6;
    }
    var g = numbers();
    g.next() // { value: 1, done: false }
    g.next() // { value: 2, done: false }
    g.return(7) // { value: 4, done: false }
    g.next() // { value: 5, done: false }
    g.next() // { value: 7, done: true }
}