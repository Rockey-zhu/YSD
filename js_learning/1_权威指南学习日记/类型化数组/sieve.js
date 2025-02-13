// 埃拉托尼筛选算法,返回一个小于n的最大素数
// 用普通数组处理起来会慢2~3倍
function sieve(n){
    let a = new Int8Array(n+1);
    let max = Math.floor(Math.sqrt(n));
    let p = 2;
    while(p <= max){
        for(let i = 2*p; i<=n; i+=p)
            a[i] = 1;
        while(a[++p]){}
    }
    while(a[n]) n--;
    return n ;
}
console.log(sieve(2041))