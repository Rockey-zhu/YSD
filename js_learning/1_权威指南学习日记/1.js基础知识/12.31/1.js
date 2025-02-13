async function async1() {
    console.log("async1 start"); //2
    await async2();
    console.log("async1 end"); //5
}

async function async2() {
    console.log("async2"); //3
}

console.log("script start"); //1

setTimeout(function() {
    console.log("setTimeout"); //7
}, 0);

async1();

new Promise(function(resolve) {
    console.log("promise1"); //4
    resolve();
}).then(function() {
    console.log("promise2"); //5
});

console.log("script end"); //6