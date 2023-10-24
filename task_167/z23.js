let arr1 = [1, 2, 3, 4, 5]; 
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i <= 4; i++) 
{
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
}
console.log(obj);