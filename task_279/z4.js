let arr = ['123', '456', '789'];

arr = arr.map(item => item.split('').map(Number));

console.log(arr);
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

