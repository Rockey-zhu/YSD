// 合并区间
//  [[1,3],[2,6],[7,9]]
//首先进行排序 ： 区间起始位置要从小到大排序
function merge(intervals){
    if(intervals.length < 2){
        return intervals;
    }
    intervals.sort(function(a,b){
        return a[0] - b[0];
    })

    let curr = intervals[0];
    result = []
    for(let interval of intervals){
        if(curr[1] >= interval[0]){
            curr[1] = Math.max(curr[1],interval[1])
        }else{
            result.push(curr);
            curr = interval
        }
    }

    if(curr.length !== 0){
        result.push(curr)
    }

    return result;
}