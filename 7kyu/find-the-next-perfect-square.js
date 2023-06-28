// 6/28/2023

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  // Check if the input number is a perfect square
  if (Number.isInteger(Math.sqrt(sq))) {
    // Find the next perfect square
    var nextSq = sq + 1;
    while (!Number.isInteger(Math.sqrt(nextSq))) {
      nextSq++;
    }
    return nextSq;
  } else {
    return -1; // Not a perfect square
  }
}