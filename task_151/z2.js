let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    if (elem % 2 == 0) {
        res += elem;
    }
}

console.log(res);