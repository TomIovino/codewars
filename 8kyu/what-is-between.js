// 11/9/2022
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//P take in 2 numbers (a,b) a will be < b, will always numbers
//R array of numbers starting with a, ending with b and including every number in between a,b

const between = (a,b) => {
    let arr = [];

    for(let i=a; i<=b; i++)
        arr.push(i);

    return arr;
};

//E a=3, b=7   [3,4,5,6,7]