// 10/1/2022
// 7 kyu
// Count the divisors of a number
// 37312591% of 3,72414,458 of 42,293tiriana
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    let result = 0;
    
    for(let i = n; i > 0; i--){
      if(n%i == 0)
        result++
    }
    return result;
  }

// 10/2/2022
// 7 kyu
// Beginner Series #3 Sum of Numbers
// 169631988% of 13,69748,663 of 141,378Vortus1 Issue Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b,tot=0 ){
    for(let i=Math.min(a,b); i<=Math.max(a,b); i++)
      tot += i;
    
    return tot;
  }

// 10/3/2022
// 7 kyu
// The highest profit wins!
// 3319987% of 5,24521,687 of 55,983bkaes1 Issue Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// function minMax(arr){
//   let min = arr[0];
//   let max = arr[0];
  
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] > max) max = arr[i];
//     if(arr[i] < min) min = arr[i];
//   }
  
//   return [min,max];
// }

// which takes less memory?

const minMax = arr => {
  arr.sort((a,b)=>a-b);
  return [arr[0],arr[arr.length-1]];
};

// 10/9/2022
// 7 kyu
// Jaden Casing Strings
// 208830986% of 17,26554,860 of 167,839jacobb13 Issues Reported
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function (str) {
  let arr = this.split(' ');
  let newArr = [];

  arr.forEach(x=>newArr.push(x[0].toUpperCase() + x.slice(1)));

  return newArr.join(' ');
};