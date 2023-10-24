let arr = [];
for (let i = 0, k = 1; i < 1; i++) {
    arr[i] = [];
    for (let g = 0; g < 4; g++) {
        arr[g] = [];
        for (let j = 0; j < 2; j++) {
            arr[g].push(k++);
        }
    }
}
console.log(arr);