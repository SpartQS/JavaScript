test(
    function () {return 1;},
    function () {return 2;},
    function () {return 3;}
    )
    
    function test(f1, f2, f3){
    console.log(f1() + f2() + f3());
    }