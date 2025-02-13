function Node(element) {
    this.element = element;
    this.next = element;
  }
  
  //链表类
  module.exports = class LList {
    constructor() {
      this.head = new Node("head"); //头节点
    }
  
    //   this.find = find; //查找节点
    //   this.insert = insert; //插入节点
    //   this.remove = remove; //删除节点
    //   this.findPrev = findPrev; //查找前一个节点
    //   this.display = display; //显示链表
  
    find(item) {
      let currNode = this.head;
      while (currNode.element != item) {
        currNode = currNode.next;
      }
      return currNode;
    }
    insert(newElement, item) {
      let newNode = new Node(newElement);
      let currNode = this.find(item);
      newNode.next = currNode.next;
      currNode.next = newNode;
    }
    findPrev(item) {
      let currNode = this.head;
      while (currNode.next.element != item) {
        currNode = currNode.next;
      }
      return currNode;
    }
  
    remove(item) {
      let prevNode = this.findPrev(item);
      prevNode.next = prevNode.next.next;
    }
    display() {
      let currNode = this.head;
      while (!(currNode.next == "head")) {
        console.log("currNode",currNode,);
        currNode = currNode.next;
      }
      console.log("currNode",currNode,);
    }
  }
  
  // let fruits = new LList();
  // let data1 = { Name: "apple" };
  // let data2 = { Name: "banana" };
  // let data3 = { Name: "orange" };
  
  // fruits.insert(data1, "head");
  // fruits.insert(data2, data1);
  // fruits.insert(data3, data2);
  // // fruits.remove(data2)
  // fruits.display();
  