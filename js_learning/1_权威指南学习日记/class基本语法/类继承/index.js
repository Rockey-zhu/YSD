//箭头函数没有 super

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} 跑步速度为 ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} 停在那了.`);
    }
}

class Rabbit extends Animal { //继承
    //重写constructor
    constructor(name,age){
        //继承类的 constructor 必须调用 super(...)，并且 (!) 一定要在使用 this 之前调用。
        super(name);
        this.age = age;
    }

    hide() {
        console.log(`我是一只${this.name} 我现在${this.age}岁`);
    }
    run(speed) { //重写 - 多态
        this.speed = speed;
        console.log(`${this.name} 跑步速度只有一半为 ${this.speed/2}.`);
    }

    //如果不希望完全替换父类功能
    stop() {
        super.stop();
        console.log("并且吃了口草")
    }
}

let animal = new Animal("animal")
let rabbit = new Rabbit("White Rabbit",4);


animal.run(5);
animal.stop();

rabbit.hide(); // White Rabbit hides!
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop()