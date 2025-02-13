function  father(){}

father.prototype.name = "父级"
father.prototype.Func = function(){
    console.log(this.name)
}


let children1 = new father;
let children2 = new father;
children2.name = "子集2";

console.log(`1:`);
children1.Func()
console.log(`2:`);
children2.Func()