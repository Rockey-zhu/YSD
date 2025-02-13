//找出所有 a+b+c =0 
// 结果返回 [[-1,0,1],[-1,-1,2]]  不能重复

/**
 * 1 给数组排序
 * 2 遍历数组 0遍历到length-2
 * 3  注意去重
 */

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => {
        return a - b;
    })

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let start = i + 1,
                end = nums.length - 1;
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] === 0) {
                    result.push([nums[i],nums[start],nums[end]])
                    start++;
                    end--;
                    while(start<end && nums[start] === nums[start -1]){
                        start ++
                    }
                    while(start<end && nums[end] === nums[end + 1]){
                        end ++
                    }
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    start ++;

                } else if (nums[i] + nums[start] + nums[end] > 0) {
                    end -- ;
                }
            }
        }
    }
}