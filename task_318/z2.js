let now = new Date();
let birthDate = new Date(2004, 5, 25); 

let yearsDiff = now.getFullYear() - birthDate.getFullYear();
let monthsDiff = now.getMonth() - birthDate.getMonth();
let totalMonthsDiff = (yearsDiff * 12) + monthsDiff;

console.log(totalMonthsDiff); 