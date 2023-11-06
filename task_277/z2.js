function flattenArray(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        result += arr[i];
      } else if (Array.isArray(arr[i])) {
        result += flattenArray(arr[i]);
      }
    }
    return result;
  }
  
  const array = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
  const flattenedString = flattenArray(array);
  console.log(flattenedString); // Output: 'abcdefgjk'
  