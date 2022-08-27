// 6 Kyu

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    let duplicates = {};
    let tempStr = "";
    let tot = 0;
    text = text.toLowerCase();
  
    for(let i = 0; i<text.length; i++){
      tempStr = text[i];
      if(tempStr in duplicates){
        duplicates[tempStr] += 1;
      }
      else{
        duplicates[tempStr] = 1;
      }
    }
    
    for(key in duplicates){
      if(duplicates[key] > 1)
        tot += 1;
    }
    
    return tot;
  }