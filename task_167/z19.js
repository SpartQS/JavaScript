let arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let week = '';

for (let i = 0; i <= arr.length-3; i++) {

week += arr[i] + ' ';

}

document.write(week + '<b>' + 'Saturday' + '</b>' + ' ' + '<b>' + 'Sunday' + '</b>');