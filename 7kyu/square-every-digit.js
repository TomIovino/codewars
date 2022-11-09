// 11/8/2022
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P taking in a number, will always be a number
//R number concatenated with the square of each single digit

function squareDigits(num){
  
    let arr = num.toString()
                 .split('')
                 .map(e => e*e)
                 .join('');
    
    return Number(arr);
}

//E 7552   4925254