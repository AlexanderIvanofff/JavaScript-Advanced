function solve(numbers) {
    totalNum = []
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] < 0) {
            totalNum.unshift(numbers[i])    
        } else {
            totalNum.push(numbers[i])
        }
    }
    for (let i = 0; i < totalNum.length; i++) {
        console.log(totalNum[i])
    }
    
}

solve([3, -2, 0, -1])