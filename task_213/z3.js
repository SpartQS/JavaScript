function getSum(arr) {
	let res = 1;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}

