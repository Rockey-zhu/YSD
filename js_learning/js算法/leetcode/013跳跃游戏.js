/***
 * DP动态规划算法
 * 
 * 贪心算法
 * 
 *  3最多跳三步，最少跳一步  全部能跳完 输出true 
 * 
 *  输入【3，1，0，，2，4】  //  [3,2,1,0,5,4]
 * 
 *  输出：true  
 */


// 动态规划 递归算法
 function canJump(nums){
     const totalLength = nums.length;
     const memo = Array(totalLength).fill(0);

     memo[totalLength -1] = 1;
     function jump(position){
         if(memo[position] === 1){
             return true
         }else if (memo[position] === -1){
             return false;
         }

         const MAXJump = Math.min(position + nums[position] , totalLength-1);
         for(let i = position+1;i<=MAXJump;i++){
             const jumpResult = jump(i);
             if(jumpResult === true){
                 memo[position] = 1;
                 return true
             }
         }

         memo[position] = -1;
         return false
     }

     let result = jump(0)
     return result;
 }

// 从后往前动态规划
 function boopmap(nums){
    const totalLength = nums.length;
    const memo = Array(totalLength).fill(0);
    memo[totalLength -1] = 1;

    for(let i = totalLength-2; i >=0 ; i--){
        const maxJump = Math.min(i+nums[i], totalLength-1);

        for(let j = i+1; j <= maxJump;j++){
            if(memo[j] === 1){
                memo[i] === 1;
                break;
            }
        }
    }
    if(memo[0] === 1){ 
        return true;
    }else{
        return false;
    }
 }


//  贪心算法  从后往前

function teenMap(nums){
    let maxJump = nums.length - 1;
    let maxJump = nums.length - 1;
    for(let i=nums.length -2 ; i>=0; i--){
        if(i+nums[i] >= maxJump){
            maxJump = i;
        }
    } 
    return maxJump === 0;
}