function averageStringLength(firstString, secondString, thridString) {
    let sumLength;
    let averageLength;
    
    let firstArgument = firstString.length;
    let secondArgument = secondString.length;
    let thridArgiment = thridString.length;

    sumLength = firstArgument + secondArgument + thridArgiment; 

    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength)
    console.log(averageLength)

}


averageStringLength('chocolate', 'ice cream', 'cake')