// 7/11/2023

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if (count < 0) {
        return count + '<0';
      } else if (count === 0) {
        return '0=0';
      } else {
        var sequence = '0';
        var sum = 0;
  
        for (var i = 1; i <= count; i++) {
          sequence += '+' + i;
          sum += i;
        }
  
        return sequence + ' = ' + sum;
      }
    };
  
    return SequenceSum;
  })();