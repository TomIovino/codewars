12/25/2022

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let newStr = "";
    let acc = 1;
    s = s.toLowerCase();
    
    for(let i=0; i<s.length; i++){
      for(let j=0; j<acc; j++){
        newStr += s[i];
      }
      acc++
      newStr += "-";
    }
    
    return newStr.slice(0,-1)
          .split('-')
          .map(x=>x[0].toUpperCase()+x.slice(1))
          .join('-');
  
  }