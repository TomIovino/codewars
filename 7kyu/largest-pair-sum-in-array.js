// 7/5/23

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (sequence) {
    // Initialize the two largest numbers as the first two elements in the sequence
    let largest1 = sequence[0];
    let largest2 = sequence[1];
  
    // Iterate over the remaining elements in the sequence
    for (let i = 2; i < sequence.length; i++) {
      const currentNumber = sequence[i];
  
      // If the current number is larger than the two largest numbers,
      // update the largest numbers accordingly
      if (currentNumber > largest1) {
        largest2 = largest1;
        largest1 = currentNumber;
      } else if (currentNumber > largest2) {
        largest2 = currentNumber;
      }
    }
  
    // Return the sum of the two largest numbers
    return largest1 + largest2;
  }