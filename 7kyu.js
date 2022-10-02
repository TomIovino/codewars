// 10/1/2022
// 7 kyu
// Count the divisors of a number
// 37312591% of 3,72414,458 of 42,293tiriana
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    let result = 0;
    
    for(let i = n; i > 0; i--){
      if(n%i == 0)
        result++
    }
    return result;
  }

// 10/2/2022
// 7 kyu
// Beginner Series #3 Sum of Numbers
// 169631988% of 13,69748,663 of 141,378Vortus1 Issue Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b,tot=0 ){
    for(let i=Math.min(a,b); i<=Math.max(a,b); i++)
      tot += i;
    
    return tot;
  }