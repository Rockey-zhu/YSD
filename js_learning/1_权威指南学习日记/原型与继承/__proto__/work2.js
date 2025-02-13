//关于 原型链的this指向  指向调用它的obj

let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

  //rabbit 会接收到full属性