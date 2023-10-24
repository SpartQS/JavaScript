// через substr
let str = 'я учу javascript!';
let word1 = str.substr(2, 3); // вырезаем 'учу'
let word2 = str.substr(6); // вырезаем 'javascript'
console.log(word1, word2); // 'учу', 'javascript!'

// через substring
let str2 = 'я учу javascript!';
let word7 = str.substring(2, 5); // вырезаем 'учу'
let word3 = str.substring(6); // вырезаем 'javascript'
console.log(word7, word3); // 'учу', 'javascript!'

// через slice
let str3 = 'я учу javascript!';
let word4 = str.slice(2, 5); // вырезаем 'учу'
let word5 = str.slice(6); // вырезаем 'javascript'
console.log(word4, word5); // 'учу', 'javascript!'
