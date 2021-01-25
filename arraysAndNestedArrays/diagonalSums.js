function solve(matrix) {
    const length = matrix.length;
    primaryDiagonalSum = 0, secondDiagonalsum = 0;
    
    for (let i = 0; i < length; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondDiagonalsum += matrix[length -1 -i][i];

    }
    console.log(primaryDiagonalSum, secondDiagonalsum);

}

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])