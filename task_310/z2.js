function func(options) {
    const {width, height, color} = options; 
    console.log(width);
    console.log(height);
    console.log(color);
    if (options.color !== undefined) { 
        color = options.color; 
    } else {
        color = 'black';
    }
    }
    
    func( {color: 'red', width: 400, height: 500} );