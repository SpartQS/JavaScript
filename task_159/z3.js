let arr = [-1,2,-4,3,4,5,-222,11,11];
let arr1 = [];

for (elem of arr) {
    if (elem > 0) {
        arr1.push(elem);
    }
}
console.log(arr1)