//发布者（商店）
class Dep {
  constructor(shopMoney, shopName) {
    this.shopMoney = shopMoney;
    this.shopName = shopName;
    this.observers = [];
  }

  setState(state) {
    //状态改变，通知订阅
    this.shopMoney = state;
    this.noticy();
  }
  addObserver(ob) {
    //添加订阅者
    this.observers.push({
      name: ob.name,
      constructor: ob,
    });
  }

  noticy() {
    //状态改变，发布
    this.observers.forEach((ob) => {
      ob.constructor.update(
        `${ob.name}你好${this.shopName}价格更新了，价格为${this.shopMoney}`
      );
    });
  }
}
