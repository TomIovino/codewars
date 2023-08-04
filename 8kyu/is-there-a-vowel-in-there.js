// 8/3/2023

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
    // Helper function to check if a given number is a lowercase vowel character code
    function isLowercaseVowelCharCode(charCode) {
      return [97, 101, 105, 111, 117].includes(charCode);
    }
  
    // Map the array elements to their corresponding vowels if applicable
    return a.map(num => {
      if (isLowercaseVowelCharCode(num)) {
        return String.fromCharCode(num);
      }
      return num;
    });
  }