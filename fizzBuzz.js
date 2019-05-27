const fizzBuzz = (fizz, buzz) => {

    for (let i = 1; i <= 100; i++) {
        
        if (i % fizz === 0 && i % buzz === 0) {
            console.log('fizzBuzz');
        } else if (i % fizz === 0) {
            console.log('fizz');
        } else if (i % buzz === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
        
    }
};

fizzBuzz(5,3);