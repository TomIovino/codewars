// 10/26/2022

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//P single string 
//R array of indexes of all capital letters in original string

function capitals(str){
    const lowerCaseStr = str.toLowerCase();
    let list = [];

    for(let i=0; i<str.length; i++){
        if(str[i] !== lowerCaseStr[i])
            list.push(i);
    }

    return list;
}


//capitals("I Live in NYC"); [0,2,9,10,11]