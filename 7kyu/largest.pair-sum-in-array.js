// 10/5/2023

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.


function largestPairSum (arr) {
  const n1 = Math.max(...arr);
  
  // Find the index of the first occurrence of n1
  const index = arr.indexOf(n1);

  // Remove the first occurrence of n1
  arr.splice(index, 1);

  const n2 = Math.max(...arr);
  
  return n1 + n2;
}