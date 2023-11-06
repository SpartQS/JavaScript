function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
  let flattened = flattenArray(arr);
  console.log(flattened); // [1, 2, 7, 8, 3, 4, 5, 6, 7]
  