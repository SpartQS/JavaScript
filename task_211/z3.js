function zzz(arr){
 
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            return arr[i] + ' ' + 'есть';
        }
    }
    return 'нет';
}
 
console.log(zzz([2, 4, 5, 7, 7, 5, 1, 7]));