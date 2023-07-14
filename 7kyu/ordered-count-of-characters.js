// 7/13/2023

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  const charCount = {};
  
  // Count the occurrences of each character
  for (let char of text) {
    charCount[char] = charCount[char] + 1 || 1;
  }
  
  // Create an array of tuples in order of appearance
  const result = [];
  for (let char of text) {
    if (charCount[char] > 0) {
      result.push([char, charCount[char]]);
      charCount[char] = 0;
    }
  }
  
  return result;
}