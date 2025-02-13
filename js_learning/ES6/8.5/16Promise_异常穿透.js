new Promise((resolve, reject) => {
    //resolve(1);
    reject(1)
}).then(
    value => {
        console.log(value)
        return 2;
    }
).then(
    value => {
        console.log("value1+" + value)
    }
).then(
    value => {
        console.log("value2+" + value)
    }
).catch(reason => {
    console.log('onRejected1()', reason)
})