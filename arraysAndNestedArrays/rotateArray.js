// Write a JS function that rotates an array. The array should be rotated to the right side, 
// meaning that the last element should become the first, upon rotation. 
// The input comes as two parameters – an array of strings and a number. The second parameter is the amount of rotation you need to perform.
// The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.



function solve(array, numebr) {
    let currentNumber = Number(numebr) 

    while (currentNumber > 0) {
        let lastElement = array.pop();
        array.unshift(lastElement)
        currentNumber --;
        
    }
    console.log(array.join(' '))
}


solve(['1', '2', '3', '4'], '2')
