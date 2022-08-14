// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    let row = 1;
    let tot = 0;
    let cnum = 1;
    let final = 0;
    
    for(let i=1; i<=n; i++){
      for(let j=0; j<row; j++){
        if(i===n){
          final += cnum;
          cnum += 2;
        }
        else{
          tot += cnum;
          cnum += 2;
        }
      } 
      row++;
    }
    return final;
  }
