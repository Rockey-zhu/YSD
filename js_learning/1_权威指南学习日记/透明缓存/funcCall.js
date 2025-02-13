//call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

let worker = {
    someMethod() {
        return 2;
    },

    slow(x) {
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // 现在 "this" 被正确地传递了
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存

console.log(worker.slow(2)); // 工作正常
console.log(worker.slow(2)); // 工作正常，没有调用原始函数（使用的缓存）

//-----------------多参数----------------------------------------------------

