let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
arr[i] = [];

for (let j = 0; j < 3; j++) {
    arr[i].push(k);
    k += 1;
}
}
console.log(arr);