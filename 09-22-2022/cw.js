// 8 kyu
// Twice as old
// 4077190% of 4,19415,191 of 39,970petrosernivka
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return sonYearsOld*2 > dadYearsOld 
         ? sonYearsOld*2 - dadYearsOld 
         : dadYearsOld   - sonYearsOld*2; 
  }