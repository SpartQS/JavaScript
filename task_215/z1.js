function isPositive(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}

let mas = [2, 4, 6];

console.log(isPositive(mas));