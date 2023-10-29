function isPositive(num) {
    let x;
    x = num[0].toUpperCase() + num.slice(1);
    return x;
}

let num = 'abcd';

console.log(isPositive(num));