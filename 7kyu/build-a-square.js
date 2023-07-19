// 7/19/2023

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
    const row = '+'.repeat(integer); // Create a row of '+' characters
    const shape = (row + '\n').repeat(integer); // Repeat the row to create the shape
    return shape.trim(); // Remove any extra whitespace at the beginning or end
  }