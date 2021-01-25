function solve(numbers) {
    
    firstNumber = Number(numbers[0])
    
    lastNumber = Number(numbers[numbers.length - 1])
    
    return firstNumber + lastNumber
}

console.log(solve(['20', '30', '40']))