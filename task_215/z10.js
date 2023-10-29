function isPositive(num) {
    let x = Math.round(num / 86400);
    return x;
}

let num = 1000000;

console.log(isPositive(num));