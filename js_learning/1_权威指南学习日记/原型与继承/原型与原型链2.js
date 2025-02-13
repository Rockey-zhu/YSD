function Persion(name,age){
    this.name = name;
    this.age = age;
    this.friends = ["A"]
}
Persion.prototype = {
    constructor:Persion,
    sayname :function(){
        console.log(this.name)
    }
}

let persion1 = new Persion("A",1);
let persion2 = new Persion("B",2);

console.log("persion1:",persion1);
persion1.sayname()
persion2.sayname()
console.log("___",persion1.sayname() == persion2.sayname());

persion1.friends.push("b");
console.log(persion1.friends)
console.log(persion2.friends)

