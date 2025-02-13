// 手写promise

class Promise_Y {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的数组
    this.onResolvedCallBacks = [];
    // 存放失败的数组
    this.onRejectedCallBacks = [];

    let resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        console.log("__value__", this.value);
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      console.log("__运行函数__");
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
    }
    if (this.state === "rejected") {
      onRejected(this.value);
    }
    // 对待setTimeout 异步调用
    if (this.state === "pending") {
      // onFulfilled传入到成功数组
      this.onResolvedCallbacks = [];
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      // onRejected传入到失败数组
      this.onRejectedCallbacks = [];
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
  catch(fn) {
    return this.then(null, fn);
  }
}

new Promise_Y((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
  }, 2000);
}).then((res) => {
  console.log("__我是回调函数_-", res);
});
