function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

//链表类
module.exports = class LPList {
  constructor() {
    this.head = new Node("head"); //头节点
  }
  //   插入
  insert(newElement, item) {
    let newNode = new Node(newElement);
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    currentNode.next = newNode;
  }

  //   删除
  remove(item) {
    let currentNode = this.find(item);

    if (!(currentNode.next == null)) {
      currentNode.previous.next = currNode.next;
      currentNode.next.previous = currNode.previous;
      currentNode.next = null;
      currentNode.previous = null;
    } else {
      currentNode.previous.next = null;
      currentNode.next = null;
      currentNode.previous = null;
    }
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findPrev(item) {
    let currNode = this.head;
    while (!(currNode.next == null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
  //查找链表中的最后一个元素

  findLast() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  dispReverse() {
    let currNode = this.findLast();
    while (!(currNode.previous == null)) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
};
