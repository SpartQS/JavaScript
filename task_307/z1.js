let options = {
	width:  400,
	height: 500,
};

if (options.c !== undefined) {
	c = options.color;
} else {
	c = 'black';
}

let {width:w, height:h} = options;

console.log(c);  
console.log(w); 
console.log(h);  