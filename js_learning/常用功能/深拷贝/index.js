function deepClone(obj){
    let newObj = obj instanceof Array ? []:{};
    for(let item in obj){
        let temple = typeof obj[item] == "object" ? deepClone(obj[item]):obj[item];
        newObj[item] = temple
    }
    return newObj;
}