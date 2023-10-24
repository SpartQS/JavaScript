function getRandom(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
    let arr = [];
    for (i = 0; i < 10; i++){
        arr[i] = getRandom(10,100);
    }
    document.write(arr);