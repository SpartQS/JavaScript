let arr = [1, 2, 3, 4, 5];
for (let i in arr) {
  arr[i] = arr[i] ** 2;
}

console.log(arr);