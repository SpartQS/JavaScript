function isPositive(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr += i + ' ';
    }
    return arr;
}

let num = 10;

console.log(isPositive(num));