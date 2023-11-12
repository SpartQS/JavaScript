let options = {
	width:  400,
	height: 500,
};


if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let {width, height} = options;

console.log(color);  
console.log(width); 
console.log(height);  