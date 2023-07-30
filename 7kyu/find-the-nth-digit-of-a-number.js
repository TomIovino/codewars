// 7/30/2023

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

var findDigit = function(num, nth) {
    // Handle non-positive nth value
    if (nth <= 0) {
      return -1;
    }
  
    // Convert the number to a positive string (ignoring the sign)
    const numStr = Math.abs(num).toString();
  
    // Handle the case when nth is greater than the number of digits in the number
    if (nth > numStr.length) {
      return 0;
    }
  
    // Find the nth digit from the right (counting from 1)
    return parseInt(numStr[numStr.length - nth], 10);
  };
  