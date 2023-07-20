// 7/15/2023

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    let b = [];
    
    x.forEach((z,i) => b.push(x[i] * 2 ));
    
    return b;
  }
  