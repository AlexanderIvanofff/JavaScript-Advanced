function solve(matrix) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    matrix.forEach(row => {
        let currentMaxNum = Number.MIN_SAFE_INTEGER;
        row.forEach(num => {
            if (currentMaxNum < num) {
                currentMaxNum = num;
            }
        });
        if (maxNum < currentMaxNum) {
            maxNum = currentMaxNum;
        }
    });
    console.log(maxNum);
}

solve([[20, 50, 10],
    [8, 33, 145]]
   )