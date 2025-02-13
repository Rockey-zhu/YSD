//订阅者（顾客）
class Observer {
  constructor(name, dep) {
    this.name = name;
    this.dep = dep;
    this.dep.forEach((d) => {
      d.addObserver(this);
    });
  }
  update(val) {
    console.log(val);
  }
}
