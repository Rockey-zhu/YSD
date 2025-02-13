function generator(cb) {
    return (
        function(){
            let obj = {
                next : 0,
                stop: function (){}
            }
            return {
                next : function(){
                    let ret = cb(obj);
                    if(ret === undefined)
                        return {
                            value:undefined,
                            done:true
                        }
                    return {
                        value:ret,
                        done:false
                    }
                }
            }
        }
    )();
}

// let b = generator(function(){
//     console.log("222")
//     console.log("222")
//     console.log("222")
// })
// console.log(b.next())

let myDate = new Date();
