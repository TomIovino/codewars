// 11/26/2022
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalStr = "";
    
    for(let i=0; i<alphabet.length; i++){
      if(s1.includes(alphabet[i]) || s2.includes(alphabet[i]))
        finalStr += alphabet[i];
    }
  
    return finalStr;
  }