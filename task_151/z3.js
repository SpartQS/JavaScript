let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    res = res + elem * elem;
}

console.log(res);