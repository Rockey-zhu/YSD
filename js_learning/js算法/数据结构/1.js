let LPList = require("./循环链表")
let newNode = new LPList();
newNode.insert("apple","head")
newNode.insert("banana","apple")
newNode.insert("orange","banana")
// newNode.remove("orange")
// console.log(newNode.display());
newNode.display()