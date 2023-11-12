let date1 = new Date(1988, 2, 1); // 1 марта 1988 года
let date2 = new Date(2000, 0, 10); // 10 января 2000 года

let diff = date2.getTime() - date1.getTime();
let daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24)); // переводим разницу в миллисекундах в дни

console.log(daysDiff); // Выведет количество дней между указанными датами