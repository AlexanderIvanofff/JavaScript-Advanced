function solve(numbers) {

    return numbers
        .sort((a, b) => a - b)
        .slice(numbers.length / 2)

    console.log(numbers)

}

let biggestHalf = solve([3, 19, 14, 7, 2, 19, 6])

console.log(biggestHalf)