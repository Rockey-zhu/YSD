
function b(s){
    let a ={}

    s.split("").map(ele=>{
        console.log(ele);
     
        if(a[ele] === undefined){
            a[ele] = 1;
        }else{
            a[ele] += 1;
        }
    })
    console.log(a);
    let MAX = 0
    for(let i in a){
        console.log("a---",i,'----',a[i])
        MAX = MAX < a[i] ? a[i] : MAX;
    }
    return MAX;
}

console.log(b('aaaaaaaaaaassssssssssssdaaaaaaaaaaaaaaaadddddddddddaaaaaaaaaaaa'))

//console.log("abcdefgfedcbabcdefgfedcbabcdefgfedcbabcdefgfedcbabcdefgfedcbabcdefgfedcba".length)