let arr = [1, 2, 3, 4, 5];

let result = arr.some(function(elem, index) {
	if (elem * index > 30) {
		return true;
	} else {
		return false;
	}
});

console.log(result);