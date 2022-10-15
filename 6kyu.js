// 10/7/2022
// 6 kyu
// Array.diff
// 274347988% of 20,80172,714 of 186,037marcinbunsch2 Issues Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}

//10/15/2022
// 6 kyu
// Give me a Diamond
// 141926287% of 3,3938,146 of 27,250jayeshcp3 Issues Reported
//  JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"
// STRINGSASCII ARTFUNDAMENTALS

function diamond(n){
    if(n % 2 === 0 || n < 0)
      return null;
  
    let spaceCounter;
    let diamond = '';
    
    spaceCounter = (n-1) / 2;
    
    function addspaces(x){
      let str = '';
      
      for(let i=0; i<spaceCounter; i++)
        str += ' ';
      
      return str;
    }
    
    function addstars(x){
      let str = '';
      
      for(let i=0; i<x; i++)
        str += '*';
      
      return str;
    }
    
    for(let i=1; i<=n; i+=2){
      diamond += addspaces(i);
      diamond += addstars(i);
      diamond += '\n';
      spaceCounter -= 1;
    }
    
    spaceCounter = 1;
    
    for(let i=n-2; i>=1; i-=2){
      diamond += addspaces(i);
      diamond += addstars(i);
      diamond += '\n';
      spaceCounter += 1;  
    }
    
    return diamond;
  }