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

10/10/2022
5 kyu
Extract the domain name from a URL
177639482% of 4,62122,861 of 50,308xianpants10 Issues Reported
 JavaScript
Node v14.x
VIM
EMACS
Instructions
Output
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  let newUrl = '';
  
  if(url.slice(0,7) === "http://"){
    newUrl = url.slice(7);

    if(newUrl.slice(0,3) === "www")
      newUrl = newUrl.slice(4);
  }
  else if(url.slice(0,8) === "https://"){
    newUrl = url.slice(8);

    if(newUrl.slice(0,3) === "www")
      newUrl = newUrl.slice(4);    
  }
  else if(url.slice(0,3) === "www"){
    newUrl = url.slice(4);
  }
  else
    newUrl = url;
  
  return newUrl.split('.')[0];
}  //learned about replace() after this