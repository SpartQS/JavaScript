let num = 10;
let z = 0;

while (num <= 1000) {
    if (num >= 1000) {
    break;
    }
    if (num * 3 >= 1000) {
        break;
    }
    num = num * 3;
    z++;
}
console.log(num);
console.log(z);