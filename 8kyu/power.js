// 7/27/2023

// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power) {
  if (power === 0) {
    return 1; // Any number raised to the power of 0 is 1.
  } else if (power < 0) {
    throw new Error("Power must be a non-negative integer.");
  }

  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= number;
  }
  return result;
}