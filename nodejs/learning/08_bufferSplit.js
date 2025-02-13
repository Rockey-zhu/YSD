// buffer没有 split 自定义split
Buffer.prototype.splits = function(spl){//spl分隔符

    let arr=[];//定义数组接收分隔出来的内容
    let cur=0;//表示当前遍历的位置
    let n=0;//用来接收spl分隔符索引到的位置

    while((n=this.indexOf(spl,cur))!=-1){
    //如果索引值存在，即不为-1, 同时将索引到的位置赋值给n。
    
        arr.push(this.slice(cur,n).toString());//切割从当前位置到索引位置，再将该段字符串存到数组中
        cur=n+spl.length;//当前位置向后进行遍历，寻找下一个分隔符
    }
    return arr;

}

let buf = Buffer.from("abc吃饭,吃面条,吃炸鸡,吃");
let bufArr = buf.splits(",")
console.log(bufArr);
// console.log(bufArr.map(array => array.toString()));//将二进制数据转化为字符串
