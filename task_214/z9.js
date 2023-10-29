let num = '12345';
let res = getDigitsSum(num);

function getDigitsSum(num) {
 let arr = [];
 arr = num.split('');
 let sum = 0;
 
 for (let elem of arr) {
  sum += Number(elem);
 }
 
 return sum;
}

console.log(res);