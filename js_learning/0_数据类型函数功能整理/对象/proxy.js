let user = {
    id :0,
    age:18
}


let UserPorxy = new Proxy(user,{
    set:function(targetObj,property,value,receiver){
        console.log("代理并监听user",targetObj,property,value,receiver);

        targetObj[property] = value;
    }
})


UserPorxy.age = 20;


console.log(user)