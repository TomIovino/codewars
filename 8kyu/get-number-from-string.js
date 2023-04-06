// 4/6/2023

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    const numbers = [ '1','2','3','4','5','6','7','8','9','0' ];
    let numberStr = '';
    
    for(let i=0; i<s.length; i++){
      if(numbers.includes(s[i]))
        numberStr += s[i];
    }
    
    return parseInt(numberStr);
  }