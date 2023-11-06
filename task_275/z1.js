function sumSquares(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let lastNum = arr.pop();
    return sumSquares(arr) + lastNum * lastNum;
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(sumSquares(arr)); // 55