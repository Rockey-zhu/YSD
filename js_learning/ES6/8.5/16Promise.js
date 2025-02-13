//Promise 是一个对象，从它可以获取异步操作的消息。
//异步消息：无需等待接收方返回消息



//特点：1.对象的状态不受外界影响。三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
//2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。
//Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
/*
  如何改变状态 
  1.resolve(value)  pending ====>  fulfilled
  2.reject(reason)  pending ====>  rejected
  3. 抛出异常        pending ====> rejected  
*/


//缺点：1.无法取消Promise，一旦新建它就会立即执行，无法中途取消。
//      2.如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
//      3.当处于pending状态时，无法得知目前进展到哪一个阶段


//是什么  是一个可以异步操作的方案，一个构造函数  是一个对象用来封装一个异步操作并获取结果

//为什么要用？
//1.指定回调函数更加灵活，具体指
//2.支持链式调用，解决回调地狱（不便于阅读和异常抛出）

//怎么用 
{
    //1.创建一个Promise对象
    const p = new Promise((resolve, reject) => {
        //2.执行异步操作

        setTimeout(() => {
            const time = Date.now(); //获取当前时间，如果时偶数代表成功，否则失败
            //3.1.如果成功，调用resolve(value)
            if (time % 2 == 0) {
                resolve("成功的数据,time=" + time);
            } else { //3.2.如果失败，调用reject(reason)
                reject("失败！time=" + time);
            }
        }, 1000)
    })

    //then的两个参数，一个接受成功，一个接受失败
    p.then(
        value => { //接受得到成功的value数据, onResolved
            console.log("成功," + value);
        },
        reason => { //接受失败的reason数据, onRejected  ,,throw 抛出异常也是reason
            console.log("失败," + reason);
        }
    )
}

{
    //Promise实现
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }

    timeout(2000).then((value) => {
        console.log(value);
    });
}