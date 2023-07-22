// 7/21/2023

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

function reverse(array) {
    // Make a copy of the input array to avoid modifying the original
    const reversedArray = array.slice();
  
    // Get the start and end indices for swapping
    let start = 0;
    let end = array.length - 1;
  
    // Swap elements from start to end until the middle is reached
    while (start < end) {
      // Swap elements using a temporary variable
      const temp = reversedArray[start];
      reversedArray[start] = reversedArray[end];
      reversedArray[end] = temp;
  
      // Move towards the middle
      start++;
      end--;
    }
  
    return reversedArray;
  }