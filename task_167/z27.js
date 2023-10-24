let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
    let key = arr2[i];
    let value = arr[i];
    obj[key] = value;
}
console.log(obj);