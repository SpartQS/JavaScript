let num = 3;
if (num == 0 || num > 1 && num < 5 ) {
	console.log('+++');
} else {
	console.log('---');
}
// так как 3 < 5, будет +++ (приоритет &&) 