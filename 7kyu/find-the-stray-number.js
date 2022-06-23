// 10/20/2022
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//PREP

//P:array - always has valid input of numbers 1 is different
//R:return the single number that is different
//E:

function stray(numbers) {
    //find a number in numbers array that filters down to an array of 1 length
    return numbers.find((e) => numbers.filter((v) => v===e).length === 1); 
  } 

findStray([2,2,7]) // 7
findStray([19,19,19,4]) //4