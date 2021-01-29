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