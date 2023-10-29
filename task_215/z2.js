function isPositive(num) {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        if (num % i == 0) {
            arr += i + ' ';
        }
    }
    return arr;
}

let num = 10;

console.log(isPositive(num));