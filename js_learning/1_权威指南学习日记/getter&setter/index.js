/*
访问器属性由 “getter” 和 “setter” 方法表示。
*/

//设置对象属性为只读
let user={
    get Name(){
        return "YSD"
    }
}

console.log("------",user.Name);
user.Name = "yyds";
console.log("------",user.Name);
