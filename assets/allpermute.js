export default {
    /**
     * 输入：nums = [1,2,3]
     * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
     * 
     */
    permute: function (nums) {
        const res = [],
            path = [];
        const used = new Array(nums.length).fill(false);
        const dfs = () => {
            if (path.length === nums.length) { // 递归出口：当path的长度等于length
                res.push(path.slice()); // 把path的一份拷贝加入到最后的结果res中，然后返回
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue; // 如果之前已经出现过了，直接跳过
                path.push(nums[i]);
                used[i] = true; // 表示这个位置已经用过了
                dfs(); // 递归 回溯
                path.pop(); // 回溯的过程中，将当前的节点从 path 中删除
                used[i] = false;
            } 
        }
        dfs();
        return res;
    },
    
    //实现fn([[a,b], [n,m], [0,1]]) => [‘an0’, ‘am0’, ‘an1’, ‘am1’, ‘bn0’, ‘bm0’, ‘bn1’, ‘bm0’]
    translateString: function (nums) {
        let res = [],
            path = [];
        const dfs = (curr) => {
            if (path.length === nums.length) {
                res.push(path.join(''));
                return;
            }
            for (let i = 0; i < nums[curr].length; i++) {
                path.push(nums[curr][i]);
                dfs(curr + 1);
                path.pop();
            }
        }
        dfs(0);
        return res;
    }
}

