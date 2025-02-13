//如果 obj 隶属于 Class 类（或 Class 类的衍生类），则返回 true。

class Rabbit {}
let rabbit = new Rabbit();

// rabbit 是 Rabbit class 的对象吗？
console.log( rabbit instanceof Rabbit ); // true