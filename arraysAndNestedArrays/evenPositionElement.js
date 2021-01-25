function solve(numbers) {
    totalEven = [];
    for (let i = 0; i < numbers.length; i ++) {
        
        if (i % 2 === 0) {
            
            totalEven.push(numbers[i])

        }

    }

    console.log(totalEven.join(' '))
}

solve(['20', '30', '40']);