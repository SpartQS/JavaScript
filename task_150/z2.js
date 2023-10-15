let res = 0;

for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        res = res + i;
    }
}

console.log(res);