let arr = [
    [
        [1, 2], [3, 4]
    ], 
    [
        [5, 6], [7, 8]
    ]
];
let summ = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let x = 0; x < arr[i].length; x++) {
            summ += arr[i][j][x];
        }
    }
}
console.log(summ);