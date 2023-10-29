function isPositive(num) {
    let item = num[Math.floor(Math.random()*num.length)];
    return item;
}

let num = [1, 2, 3, 4, 5];

console.log(isPositive(num));