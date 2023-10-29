function func1() {
    return 3;
   }
   console.log(func1());
   let func2 = func1;
   func1(); 
   func2(); 
   console.log(func1() + func2()); 