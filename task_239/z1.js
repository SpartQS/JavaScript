let arr = [1, 2, 3];
let math = {
summa: function (arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++){
sum += arr[i];
}
return sum;
},
square: function (arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++){
sum += arr[i] * arr[i];
}
return sum;
},
cube: function (arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++){
sum += arr[i] * arr[i] * arr[i];
}
return sum;
},
};

alert(math.summa(arr));
alert(math.square(arr));
alert(math.cube(arr));