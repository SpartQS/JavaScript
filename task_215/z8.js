function isPositive(num) {
    let arr = num.split('');
    let sum = 0;
    for (let elem of arr) {
        sum += Number(elem);
    }
    return sum;
}

let num = '123';

console.log(isPositive(num));