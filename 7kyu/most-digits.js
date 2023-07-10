// 7/10/23

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  let longestNumber = array[0];
  
  for (let i = 1; i < array.length; i++) {
    const currentNumber = array[i];
    if (getNumDigits(currentNumber) > getNumDigits(longestNumber)) {
      longestNumber = currentNumber;
    }
  }
  
  return longestNumber;
}

function getNumDigits(number) {
  return number.toString().length;
}