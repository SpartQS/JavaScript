let arr = [1, 2, 3, 4, 0, 5];

for (let elem of arr) {
    if (elem == 0) {
        break;
    }
    console.log(elem);
}