// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.



function solve(first, second) {
    first = Number(first);
    second = Number(second);

    biggerNum = Math.max(first, second);
    lowerNum = Math.min(first, second);
    let output = 0

    for (let i = lowerNum; i >= 0; i--) {
        if (biggerNum % i == 0 && lowerNum % i == 0) {
            output = i;
            break;
        }
    }
    console.log(output)

}

solve('2154', '458')