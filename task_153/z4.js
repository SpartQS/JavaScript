for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let str1 = String(i+1); 
    if ((Number(str[0]) + Number(str1[0])) == 5) {
        console.log(str, str1);
    }
}