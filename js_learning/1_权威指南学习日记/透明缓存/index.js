/*
    对于会执行很多次的函数，在传参经常相同的情况下，可以对计算出来的值进行缓存

    如：slow（x）的计算过程十分复杂，则在二次调用他时，获取缓存数据
*/


function slow(x) {
    // 这里可能会有重负载的 CPU 密集型工作
    console.log(`未被缓存 ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {    // 如果缓存中有对应的结果
        console.log("--读取缓存结果---",cache.get(x))
        return cache.get(x); // 从缓存中读取结果
      }
      console.log("--正常执行传参函数--")
      let result = func(x);  // 否则就调用 func
  
      cache.set(x, result);  // 然后将结果缓存（记住）下来
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  slow(1); // slow(1) 被缓存下来了
  slow(1); // 一样的
  
  slow(2); // slow(2) 被缓存下来了
  slow(2); // 和前面一行结果相同
  
  slow(1);