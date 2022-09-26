// 9/26/2022
// 5 kyu
// Rot13
// 160836889% of 5,69920,049 of 62,635Rubikan3 Issues Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let finalStr = '';
    let target = '';
    message = message.split('');
    
    for(let i=0; i<message.length; i++){
      target = message[i].toLowerCase();
  
      if(!alphabet.includes(target))
        finalStr += message[i];
      else if(alphabet.indexOf(target)+13 > 25){
        if(alphabet[alphabet.indexOf(target)] !== message[i])
          finalStr += alphabet[12 - (25 - alphabet.indexOf(target))].toUpperCase();
        else
          finalStr += alphabet[12 - (25 - alphabet.indexOf(message[i]))];
      }
      else{
        if(alphabet[alphabet.indexOf(target)] !== message[i])
          finalStr += alphabet[alphabet.indexOf(target)+13].toUpperCase();
        else
          finalStr += alphabet[alphabet.indexOf(message[i])+13];
      }
    }
    
    return finalStr;
  }