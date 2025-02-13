// 动态规划

/**
 * 只能向下和向右移动
 * [
 *  [0,1,2,3,4,5],
 *  [0,1,2,3,4,5],
 *  [0,1,2,3,4,5],
 * ]
 * 
 * 从[0][0]  到[2][6]  有多少种路径
 */

function uniquePaths(m,n){
    const memo = [];
    for(let i =0 ; i<n; i++){
        memo.push([]);
    }
    for(let row=0;row<n;row++){
        memo[row][0] = 1;
    }
    for(let col=0;col<m;col++){
        memo[0][col] =1;
    }

    for(let row =1 ; row<n ; row++){
        for(let col =1 ;col < m ;col++){
            memo[row][col] = memo[row-1][col] + memo[row][col-1];
        }
    }

    return memo[n-1][m-1];
}
console.log(uniquePaths(3,7))