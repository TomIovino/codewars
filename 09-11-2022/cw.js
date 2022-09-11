// 6 kyu

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function

// set new variable to = string

// use .toUpperCase() on new string

// compare new variable with string to find the 
// uppercased letters

// put uppercased letters in an array as their 
// corresponding index in the original string

// slice words off original string using the indexes
// in the array, adding a space in between

function solution(string) {
    let newStr = string.toUpperCase();
    let finalStr = '';
    let indexArr = [];
    
    for(let i=0; i< string.length; i++){
      if(string[i] === newStr[i]){
        indexArr.push(i);    
      }
    }
    console.log(indexArr)
    if(indexArr.length){
      finalStr += string.slice(0,indexArr[0]) + ' ';
      
      for(let i=0; i<indexArr.length; i++){
        if(!indexArr[i+1]){
          finalStr += string.slice(indexArr[i]); 
        }
        else{
          finalStr += string.slice(indexArr[i],indexArr[i+1]) + ' ';
        }
      }
      
      return finalStr;
    }
    else
      return string;
  }