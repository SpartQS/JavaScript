let arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = arr[0];
let week = arr[1];

for (let i = 2; i <= arr.length-1; i++) {

week += ' ' + arr[i] + ' ';

}

document.write('<i>' + day + ' ' + '</i>' + week );