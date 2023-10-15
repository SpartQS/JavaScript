let arr = [1, 2, -2, 5];
let sum = 0;

for (let elem of arr) {
    if (elem < 0) {
        break;
    }
sum = sum + elem;
    console.log(elem);
}