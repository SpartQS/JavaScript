let arr = [1, 2, 3, 4, 5];
for (let i in arr) {
  arr[i] = arr[i] - 1;
}

console.log(arr);