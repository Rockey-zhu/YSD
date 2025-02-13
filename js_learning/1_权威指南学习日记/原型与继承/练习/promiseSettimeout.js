function delay(ms) {
    // 你的代码
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve(0)
        }, ms);
    })
  }
  
  delay(3000).then(() => console.log('runs after 3 seconds'));
