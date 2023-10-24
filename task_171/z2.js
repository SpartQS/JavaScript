let arr = [
  [
      [1, 2], [3, 4]
  ], 
  [
      [5, 6], [7, 8]
  ]
];
let summ = 0;
for (let subArr of arr) {
  for (let x of subArr) {
      for (let elem of x)
      summ += elem;
  }
}
console.log(summ);