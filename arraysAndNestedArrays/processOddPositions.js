function solve(numbers) {
    let oddNumElement = numbers
        .filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ')
        console.log(oddNumElement)
}

solve([3, 0, 10, 4, 7, 3])