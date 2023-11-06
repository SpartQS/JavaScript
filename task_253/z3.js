// Создаем функцию each
function each(arr, callback) {
    // Проходим по каждому элементу массива
    for (var i = 0; i < arr.length; i++) {
      // Применяем функцию-коллбэк к текущему элементу массива
      arr[i] = callback(arr[i]);
    }
    // Возвращаем измененный массив
    return arr;
  }
  
  // Создаем массив со строками
  var stringsArray = ["hello", "world", "javascript"];
  
  // Создаем функцию-коллбэк, которая делает заглавным первый символ строки
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Вызываем функцию each и передаем ей массив со строками и функцию-коллбэк
  var resultArray = each(stringsArray, capitalizeFirstLetter);
  
  // Выводим результат
  console.log(resultArray); // ["Hello", "World", "Javascript"]