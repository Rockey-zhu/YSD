// 通过  B.prototype = new A  的方式继承 会导致A内的引用类型值，在实例化是B1修改
// 会影响到B2


// 为解决这种情况 可以使用call()
// es6 中 这种形式 会被 class 代替
function A (name){
    this.bufs = ["a"];
    this.age = name
}

function B(name){
    A.call(this,name)
}

let b1 = new B("b1")
let b2 = new B("b2")

b1.bufs.push("B")

console.log(b1)

console.log(b2)