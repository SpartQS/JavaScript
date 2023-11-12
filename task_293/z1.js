function func(...nums) {
    let sum = 0;
    let aref = 0;

    for (let num of nums) {
        sum += num;
    }
    aref = sum / (nums.length); 
    return aref;
}

let result = func(1, 2, 3);
console.log(result); 