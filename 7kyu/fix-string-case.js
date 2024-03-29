// 2/14/2023

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

function solve(s){
    const lowerCaseInstances = findMatches(s,s.toLowerCase());
    const upperCaseInstances = findMatches(s,s.toUpperCase());
    
    if(lowerCaseInstances > upperCaseInstances
    || lowerCaseInstances === upperCaseInstances){
      return s.toLowerCase();
    }
    else if(upperCaseInstances > lowerCaseInstances){
      return s.toUpperCase();
    }
    
  }
  
  function findMatches(str, type){
    let sum = 0;
    
    for(let i=0; i<str.length; i++){
      if(str[i] === type[i]) sum++
    }
    
    return sum;
  }