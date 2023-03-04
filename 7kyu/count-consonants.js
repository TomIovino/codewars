// 3/3/2023

// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    const consonants = 'bcdfghzjklmnpqrstvwxyz';
    let tot = 0;
    
    str = str.toLowerCase();
    
    for(let i=0; i<str.length; i++){
      if(consonants.includes(str[i])){
        tot++
      }
    }
  
    return tot;
  }
  