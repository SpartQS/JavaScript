let arr = ['watermelon', 'one', 'two', 'three'];

let result = arr.filter(function(elem){
    if (elem.length > 5){
        return true;
    } else {
        return false;
    };
});

console.log(result)