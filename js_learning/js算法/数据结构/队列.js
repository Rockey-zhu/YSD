module.exports = class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // 添加元素
  enqueue(params) {
    this.items[this.count] = params;
    this.count++;
  }
  // 移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  //查看头元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 检查是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  //有多少元素
  size() {
    return this.count - this.lowestCount;
  }
  //清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  // toString
  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
