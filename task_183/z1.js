let affairs = {
    '2019-12-28': ['data11', 'data12', 'data13'],
    '2019-12-29': ['data21', 'data22', 'data23'],
    '2019-12-30': ['data31', 'data32', 'data33'],
}

affairs['2019-12-31'] = [];
affairs['2019-12-29'].push('data42');
affairs['2019-12-31'].push('data34', 'data35');

console.log(affairs['2019-12-29']);
console.log(affairs['2019-12-31']);