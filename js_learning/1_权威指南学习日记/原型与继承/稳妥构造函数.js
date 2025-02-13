function Persion(name){
    let o = new Object;
    o.name = name;

    o.sayName = ()=>{
        console.log(o.name)
    }

    return o;
}