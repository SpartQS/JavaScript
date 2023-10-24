let elem = '-';
let str = '1-2-3-4-5';

while (str.includes(elem)) {
	str = str.replace(elem, '.');
}

console.log(str);