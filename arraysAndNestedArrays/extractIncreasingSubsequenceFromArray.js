function solve(array) {
    let maxElement = 0;
    let totalElement = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element > maxElement){
            maxElement = element;
            totalElement.push(maxElement)
        } else {
            
            continue
        }
        
    }
    console.log(totalElement.join('\n'));

}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])