/***
 * 
 * 输入： [-2,1,-3,4,-1,2,1,-5,4]
 * 
 * 输出：[4,-1,2,1] 最大和 6
 * 
 */

 function maxSubArry(nums){
    const memo = [];
    memo[0] = nums[0];
    let max = nums[0];

    for(let i = 1; i <nums.length; i++){
        memo[i] = Math.max(nums[i] + memo[i-1],nums[i])
        console.log("__memo[i]_",memo[i],)
        max = Math.max(max,memo[i])
    }
    return max;
 }

 console.log(maxSubArry([-2,1,-3,4,-1,2,1,-5,4]))
