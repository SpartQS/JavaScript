let num = 12345;
let arr = String(num).split('');

let prod = 1; // изменить значение на 1
for (let digit of arr) {
prod *= Number(digit); // использовать Number() для преобразования в число
}

console.log(prod);