let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [ ];
for (let elem of arr) {
if (elem % 2 != 0) {
res.push(elem);
}
}

console.log(res);