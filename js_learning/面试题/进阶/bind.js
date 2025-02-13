Function.prototype.myBind = function (context) {
    if(typeof this !== `function`) {
        throw new TypeError("Error")
    }
    let _this = this;
    let args = [...arguments].slice(1)
    return function F(){
        if(this instanceof F){
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

let a = {
    value:1,
}
function getValue(name,age){
    console.log(`name:${name}, age:${age}`);
    console.log("__a_",this.value)
}


getValue.myBind(a,`ysd`,24)
// getValue.bind(a,`ysd`,24)

getValue(`Y`,25)
