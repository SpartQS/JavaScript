let func = (function () {
    let num = 1;
    return function () {
    if (num == 5){
    document.write(num);
    num = 1;
    } else {
    document.write(num);
    num++;
    }
    }
    })();
    func();
    func();
    func();
    func();
    func();
    func();
    func();
    func();
    func();