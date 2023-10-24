let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
let str = String(elem);
if (str[0] == 1 || str[0] == 2 || str[0] == 5)
console.log(str);
}