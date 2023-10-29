let arr = [
	function(){return 1},
	function(){return 2},
	function(){return 3}
	];
    for (let i = 0; i < arr.length; i++){
        document.write(i + '-й элемент массива = ' + arr[i]() + '<br>');
        }