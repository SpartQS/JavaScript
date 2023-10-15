let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length; i++) {
    if (i == arr.length - 1) {
        break;
    }
    console.log(arr[i]);
}