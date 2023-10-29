function func(num) {
    var i = 0;
    for (; num > 10; i++) {
      num /= 2;
    }
  
    return i;
  }
  console.log(func(200));