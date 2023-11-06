function printArr(arr, i = 0) {
    console.log(arr[i]);
    if (i < arr.length - 1) {
      printArr(arr, i + 1);
    }
  }
  
  let arr = [1, 2, 3, 4, 5];
  printArr(arr); // выводит элементы массива в консоль: 1 2 3 4 5