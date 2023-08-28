output = [];
var count = 1;

function fizzBuzz(){

    var number = output.push(count);
    

    if (number % 3 === 0 && number % 5 === 0) {
        output.pop(number);
        output.push("FizzBuzz");
    }
    
    else if (number % 3 === 0 ){
        output.pop(number);
        output.push("Fizz");
    }
    else if (number % 5 === 0 ){
        output.pop(number);
        output.push("Buzz");
    }
    
    console.log(output);
    count++;
}
fizzBuzz();
