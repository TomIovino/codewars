// 1/26/2023

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    const vowels = 'aeiou';
    
    for(let i=0; i<vowels.length; i++)
      string = string.replaceAll(vowels[i],'')
    
    return string;
  }