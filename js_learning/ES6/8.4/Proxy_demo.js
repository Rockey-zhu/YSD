//demo 年龄大于100报错
{
    let obj = { name: "zhangsan", age: 20 };
    let objProxy = new Proxy(obj, {
        get: (target, key) => {
            return obj[key];
        },
        set: (target, key, value) => {
            //增加赋值拦截
            if (key === "age") {
                if (value >= 0 && value < 100) {
                    console.log(key, value)
                } else {
                    console.log("年龄太大!")
                        //throw new RangeError("年龄太大！无效！");
                }
            }
            //赋值拦截去除空格
            if (typeof value === "string") {
                value = value.trim();
            }
            target[key] = value;
        }
    })
    console.log(objProxy.name);
    objProxy.age = 120;
    objProxy.name = '   lisi';
    console.log(objProxy.name);
}