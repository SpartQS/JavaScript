function isPositive(num) {
    if (num % 4 == 0) {
        return 'високосный' 
    } else return 'не високосный' 
}

let num = 2005;

console.log(isPositive(num));