let arr = [
    [
        1, 2, 3
    ], 
    [
        4, 5
    ], 
    [
        6
    ]
];
let summ = 0;
for (let subArr of arr) {
    for (let elem of subArr) {
        summ += elem;
    }
}
console.log(summ);