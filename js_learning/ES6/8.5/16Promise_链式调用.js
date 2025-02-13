new Promise((resolve, reject) => {
    resolve(1);
    // reject(1)
}).then(
    value => {
        console.log(value)
        return 2;
    },
    reason => {
        console.log(reason)
        return 3;
    }
).then(
    value => {
        console.log("value+" + value)
    },
    reason => {
        console.log("reason+" + reason)
    }
)