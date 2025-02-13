
let animal ={
    eat:true
}

function Rabbit(name){
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit_white = new Rabbit("white");
let rabbit_black = new Rabbit("black");

rabbit_black.eat = false;
console.log("Rabbit.prototype---",Rabbit.prototype)
console.log("rabbit_white.eat--",rabbit_white.eat)
console.log("rabbit_black.eat--",rabbit_black.eat)
console.log("rabbit_black.__proto__--",rabbit_black.__proto__)
console.log("rabbit_black.__proto__--",rabbit_black.__proto__.eat)

//constructor
console.log("rabbit_black.constructor------",rabbit_black.constructor)

/*
F.prototype 属性（不要把它与 [[Prototype]] 弄混了）在 new F 被调用时为新对象的 [[Prototype]] 赋值。

F.prototype 的值要么是一个对象，要么就是 null：其他值都不起作用。

"prototype" 属性仅在设置了一个构造函数（constructor function），
并通过 new 调用时，才具有这种特殊的影响。
*/