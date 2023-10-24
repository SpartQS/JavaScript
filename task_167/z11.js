let arr = [1, 5, 8, 14, 52, 48];
let result = 1;
for ( i = 0; i <= arr.length-3; i++) {
result *= arr[i];
}
console.log(result);