// 8 Kyu

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero

function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    return Math.max(n,m) % Math.min(n,m)
  }


  // 8 Kyu

//   We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    // Return a string of the number here!
    return num.toString();
  }

// 8 Kyu

// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

items = []
items.push({a: "b", c: "d"})