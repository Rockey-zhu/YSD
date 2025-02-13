/**
执行到 resolve()这个方法的时候，就改变promise的状态为resolved，当状态为 resolved的时候就可以执行.then()

当执行到 reject() 这个方法的时候，就改变 promise的状态为 reject，当promise为reject就可以.catch()这个promise了

 */

//做饭
function cook() {
    console.log('开始做饭。');
    let p = new Promise(function(resolve, reject) { //做一些异步操作
        console.log('做饭完毕！');
        resolve('鸡蛋炒饭'); //promise resolve
    });
    return p;
}

//吃饭
function eat(data) {
    console.log('开始吃饭：' + data);
    let p = new Promise(function(resolve, reject) { //做一些异步操作
        console.log('吃饭完毕!');
        resolve('一块碗和一双筷子');
    });
    return p;
}

function wash(data) {
    console.log('开始洗碗：' + data);
    let p = new Promise(function(resolve, reject) { //做一些异步操作
        console.log('洗碗完毕!');
        resolve('干净的碗筷');
    });
    return p;
}

//使用then的核心在于 Promise resolve return;这三点，缺一不可。
cook().then(res=>{
    eat(res).then(resq =>{
        wash(resq).then(resp =>{
            console.log(resp)
        })
    })
})

//简化版本
// cook().then(eat).then(wash).then(function(data) {
//     console.log(data);
// });