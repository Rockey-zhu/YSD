function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > key) {
        // array[j] = array[j + 1];
        array[j + 1] = array[j];
        array[j] = key;
      }
    }
  }
  return array;
}

function binaryInsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let left = 0;
    let right = i - 1;
    while (left <= right) {
      let middle = parseInt((left + right) / 2);
      if (key < array[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    for (let j = i - 1; j >= left; j--) {
      array[j + 1] = array[j];
    }
    array[left] = key;
  }
  return array;
}

console.log(insertionSort([3, 5, 9, 1, 4]));
