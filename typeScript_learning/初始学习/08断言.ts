//值 as 类型
//或者 <类型>值
// <> 这种语法格式在 ts 中可以表示为断言也可以表示为一个泛型
// 断言尽量使用 as

//类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，
//「要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可」

interface Cat {
    name:string,
    run():void,
}

interface Fish {
    name:string,
    swim():void,
}

function swim(animal: Cat | Fish){
    (animal as Fish).swim()
    // animal.swim()
}

const tom1:Cat = {
    name:"Tom",
    run(){
        console.log("__tom run_")
    }
}

console.log("_tom1__",tom1)

swim(tom1)//虽然编译器没报错，但运行会报错因为断言隐藏了animal为cat的情况


// 断言可用于将一个父类断言 为更具体的子类

class ERROES {
    msg:String = "error"
}

class apiERRORS extends ERROES{
    code:Number = 200;
}

function isAPIError(error:ERROES){
    if(typeof(error as apiERRORS).code === `number`){
        return true;
    }else{
        return false;
    }
}

console.log("____",isAPIError({msg:"s"}))


/**
 * 需要注意的是，将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。
 * 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any。
 * 一方面不能滥用 as any，另一方面也不要完全否定它的作用，
 * 我们需要在类型的严格性和开发的便利性之间掌握平衡
 */
interface WINDOWS {
    arrs1:Array<number>;
    length:number;
};
 const windows :WINDOWS= {
    arrs1 : [1,2,3],
    length:1,
 };

 (windows as any).length = 2;

 //父类可以被断言为子类
 //因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故「子类可以被断言为父类」

 //除非迫不得已，千万别用双重断言。 cat as any as Fish