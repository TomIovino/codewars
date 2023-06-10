// 6/9/2023

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
    // Trim any leading or trailing whitespace
    s = s.trim();
  
    // Check if the string is empty
    if (s === "") {
      return false;
    }
  
    // Check if the string matches the pattern for a valid number
    // Regular expression explanation:
    // ^         - Start of the string
    // [-+]?     - Optional positive or negative sign
    // \d+       - One or more digits
    // (\.\d+)?  - Optional decimal point followed by one or more digits
    // $         - End of the string
    var numberPattern = /^[-+]?(\d+(\.\d+)?|\.\d+)$/;
  
    return numberPattern.test(s);
  }