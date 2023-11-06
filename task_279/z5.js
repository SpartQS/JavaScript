// Исходный массив
let numbers = [1, 2, 3, 4, 5];

// Используем метод map для создания нового массива
let multipliedNumbers = numbers.map(function(number, index) {
   return number * (index + 1);
});

console.log(multipliedNumbers); // [1, 4, 9, 16, 25]
