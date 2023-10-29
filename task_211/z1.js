function isPositive(arr) {
    for (let elem of arr) {
        if (elem % 2 == 0) {
            return true;
        } else return false;
    }
}

let mas = [2, 4, 6];
console.log(isPositive(mas));