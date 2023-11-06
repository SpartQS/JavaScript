function squareArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      squareArrayElements(arr[i]);
    } else {
      arr[i] = arr[i] * arr[i];
    }
  }
}

const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
squareArrayElements(arr);
console.log(arr); // [1, [4, 49, 64], [9, 16], [25, [36, 49]]]
