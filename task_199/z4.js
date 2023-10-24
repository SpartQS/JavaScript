let num = 12345;
let arr = num.toString().split('');

let sum = 0;
for (let digit of arr) {
sum += parseInt(digit);
}

console.log(sum);