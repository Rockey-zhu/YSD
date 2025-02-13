// [1 ,2 ,3 ,4 ,5]
//两数和为 6
//返回数组下标


function TwoSum(arr,sum){
    const map = new Map();
    for(let i = 0 ; i < arr.length; i++){
        const complement = sum - arr[i];
        console.log(map,"___",complement)
        if(map.has(complement)){
            return [map.get(complement), i]
        }else{
            map.set(arr[i],i)
        }
    }
    return [];
}

console.log(TwoSum([1,2,3,4,5],6));