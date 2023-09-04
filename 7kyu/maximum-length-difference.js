// 9/4/2023

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return -1;
    }
  
    let minLen1 = a1[0].length;
    let maxLen1 = a1[0].length;
    let minLen2 = a2[0].length;
    let maxLen2 = a2[0].length;
  
    for (let i = 1; i < a1.length; i++) {
      const len = a1[i].length;
      minLen1 = Math.min(minLen1, len);
      maxLen1 = Math.max(maxLen1, len);
    }
  
    for (let i = 1; i < a2.length; i++) {
      const len = a2[i].length;
      minLen2 = Math.min(minLen2, len);
      maxLen2 = Math.max(maxLen2, len);
    }
  
    const diff1 = Math.abs(maxLen1 - minLen2);
    const diff2 = Math.abs(maxLen2 - minLen1);
  
    return Math.max(diff1, diff2);
  }
  