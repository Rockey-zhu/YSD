new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("成功");
        reject("失败");
    }, 1000);
}).then( //接受成功回调
    value => {
        console.log('onResolved()1,' + value);
    }
).catch( //接受失败回调
    reason => {
        console.log("onRejected()1," + reason)
    }
)

//Promise.resolve() § ⇧
//产生一个成功值为1的promise对象
const p1 = new Promise((resolve, reject) => {
        resolve(1);
    })
    //简单写法
const p2 = Promise.resolve(2);
p1.then(value => {
    console.log(value);
})
p2.then(value => {
    console.log(value)
})


//Promise.reject() § ⇧
const p3 = new Promise((resolve, reject) => {
        reject(3);
    })
    //简单写法
const p4 = Promise.reject(4);
p3.then(null, reason => {
    console.log(reason);
})

p4.catch(reason => {
    console.log(reason);
})


//Promise.all()§⇧
//将多个 Promise 实例，包装成一个新的 Promise 实例
const pAll = Promise.all([p1, p2, p3]);

//const pAll = Promise.all([p1, p2]);
pAll.then(
    values => {
        console.log(values) //[1,2]
    },
    reason => {
        console.log("失败的reason是" + reason)
    }
)


//Promise.race() race比赛
//将多个 Promise 实例，包装成一个新的 Promise 实例
//也是返回一个新的promise，谁先完成，就先返回谁
const pRace = Promise.race([p1, p2, p3]);
pRace.then(
    value => {
        console.log("谁先完成就是谁" + value)
    },
    reason => {
        console.log(reason)
    }
)