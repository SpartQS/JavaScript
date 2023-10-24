let arr = [10, 20, 30, 40, 21, 32, 51];

let summ = 0
for(let i=0; i<=arr.length-1;i++){
    let num = String(arr[i]) //переделали массив в строку
    let char= num[0] 
    if(char=="1" || char=="2"){
        summ += arr[i]
    }
}
console.log(summ);