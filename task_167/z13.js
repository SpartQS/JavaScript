let arr = [1, 3, -5, 7, 8, 14, -15, -17];
let result = 0;
for (let elem of arr) {
if (elem >= 0) {
result += elem;
}
}
console.log(result);