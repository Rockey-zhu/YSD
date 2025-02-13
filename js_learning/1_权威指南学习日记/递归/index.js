// 递归会堆栈，内存占用率较大

let number = 2;
let index = 3;
function pow(x,n){
    if(n == 1){
        return x;
    }else{
        return x*pow(x,n-1);
    }
}
pow(number,index)
console.log("---pow(number,index)-----",pow(number,index))