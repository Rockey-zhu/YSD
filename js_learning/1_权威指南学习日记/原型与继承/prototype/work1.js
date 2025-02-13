function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; //---加上这句呢,没影响

Rabbit.prototype.eats = false; //无影响

delete rabbit.eats;
delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ？