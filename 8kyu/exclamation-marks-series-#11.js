// 12/31/2022

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
  let vowels = 'aeiouAEIOU';
  
  for(let i=0; i<vowels.length; i++)
    s=s.replaceAll(vowels[i],'!');

  return s;
}