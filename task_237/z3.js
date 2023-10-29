let arr = [
	function(){return 1},
	function(){return 2},
	function(){return 3}
	];
    let sum = arr[0]() + arr[1]() + arr[2]();
    document.write('Сумма результатов функций = ' + sum + '<br>');