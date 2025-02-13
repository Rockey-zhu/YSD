let user = {
    id:0,
    name:"ryder",
}

Object.defineProperty(user,`name`,{
    configurable:false,//能否被删除
    enumerable:false,//能否通过for in 循环访问
    set:function(newVal){
        console.log("__监听事件__",newVal );
    }
})




user.name = "ryder001"

Object.defineProperties(student,{
    name:{
        writable:false,
        value:"lisi"
    },
    age : {
        writable:true,
        value : 16,
    },
    sex:{
        get(){
            return '男';
        },
        set(v){
            user.sex = v
        }
    }
})
