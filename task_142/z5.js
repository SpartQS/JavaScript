let num = 123033;
let x = String(num)

let sum1 = Number(x[0]) + Number(x[1]) + Number(x[2]);
let sum2 = Number(x[3]) + Number(x[4]) + Number(x[5]);

if (sum1 == sum2) {
	console.log('да');
} else {
	console.log('нет');
}