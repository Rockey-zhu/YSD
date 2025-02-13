function bubbleSort(arr) {
  let i = arr.length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
        console.log("__pos__",pos,"__i__",i,"__j__",j,"___arr[j]_",arr[j],"___arr[j + 1]__",arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        pos = j; //记录交换的位置
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        
      }
    }
    i = pos;
  }
  return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr));
