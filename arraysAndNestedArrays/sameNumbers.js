// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are same and false if not. On the next line print the sum of all digits.


function solve(number) {
    let sum = 0;
    let lastDigit = number % 10;
    let notEgualCount = 0;

    while (number / 10 > 0) {
        let digit = number % 10;
        sum += digit;


        if (digit !== lastDigit) {
            notEgualCount ++
        }

        lastDigit = digit;
        number = Math.floor(number / 10);

        
    }

    console.log(notEgualCount === 0 ? true : false)
    console.log(sum);


}

solve(2222222)