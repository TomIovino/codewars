// 11/2/2022
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// ARRAYSFUNDAMENTALS

//P taking in array of strings - will only be strings, no null/undefined/numbers etc.
//R array of strings - each original string is prepended by a number, colon and space ascending from 1 ("1: a")

var number=function(array){
    //for loop iterate over initial array
    //have counter that increments for ascending numbers
    //push to a new array

    let counter = 1;
    let newArr = [];

    for(let i=0; i<array.length; i++){
        newArr.push(''+counter+': '+array[i]);'
        counter++
    }

    return newArr;
}

 // ["a", "b", "c"] --> ["1: a", "2: b", "3: c"] 