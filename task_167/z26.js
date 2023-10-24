let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
    };
    let arr = [];
    for (let key in obj) {
        let value = String(obj[key]);
        if (value[0] == 1 || value [0] == 2) {
        arr.push(Number(value)); }
    }
    console.log(arr);