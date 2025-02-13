//在 JavaScript 中，我们只能继承单个对象。

// mixin
let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };
  
  // 用法：
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // 拷贝方法
  Object.assign(User.prototype, sayHiMixin);
  
  // 现在 User 可以打招呼了
  new User("Dude").sayHi(); // Hello Dude!