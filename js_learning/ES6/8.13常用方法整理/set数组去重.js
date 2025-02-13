//set数组去重
{
    function dedupe(array) {
        return Array.from(new Set(array));
    }

    console.log(dedupe([1, 1, 2, 3])); // [1, 2, 3]
}