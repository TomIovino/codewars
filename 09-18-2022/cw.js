// 6 kyu 

// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
    let arr1 = str.split('');
    let arr2 = [];
    let str2 = '';
  
    for(let i=0;i<str.length;i++){
      if(str[i] !== ' '){
        arr1 = str.split('');
        arr1[i] = str[i].toUpperCase();
        str2 = arr1.join('');
        arr2.push(str2);
        arr1 = [];
      }
    }
    
    return arr2;
  }