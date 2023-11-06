const arr = ['hello', 'world', 'how', 'are', 'you'];

function each(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

each(arr, function(str, index, array) {
  array[index] = reverseString(str);
});

console.log(arr); // ['olleh', 'dlrow', 'woh', 'era', 'uoy']
