// 8/27/2023

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let sumOfNumbers = 0;
    let sumOfStrings = 0;

    for (const element of x) {
        if (typeof element === 'number') {
            sumOfNumbers += element;
        } else if (typeof element === 'string' && !isNaN(element)) {
            sumOfStrings += parseInt(element);
        }
    }

    return sumOfNumbers - sumOfStrings;
}