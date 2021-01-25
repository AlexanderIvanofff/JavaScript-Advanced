function solve(change) {
    coins = 0;
    let currentChange = Math.trunc(change * 100)
    while (currentChange > 0) {
         if (currentChange - 200 >= 0) {
            currentChange -= 200

        } else if (currentChange - 100 >= 0) {
            currentChange -= 100

        } else if (currentChange - 50 >= 0) {
            currentChange -= 50

        } else if (currentChange - 20 >= 0) {
            currentChange -= 20

        } else if (currentChange - 10 >= 0) {
            currentChange -= 10

        } else if (currentChange - 5 >= 0) {
            currentChange -= 5

        } else if (currentChange - 2 >= 0) {
            currentChange -= 2

        } else if (currentChange - 1 >= 0) {
            currentChange -= 1

        }
        coins += 1
        
    }
    
    
    console.log(coins)
    
}

solve(0.56)