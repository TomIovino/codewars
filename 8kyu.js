// 9/27/2022
// 8 kyu
// Transportation on vacation
// 2576192% of 4,76728,505 of 57,423Milford2 Issues Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    return d >= 3 ? d >= 7 ? d*40-50 : d*40-20 : d*40;
  }

//   9/28/2022
//   8 kyu
//   Double Char
//   37714493% of 4,31522,039 of 43,920Alpri Else
//    JavaScript
//   Node v10.x
//   VIM
//   EMACS
//   Instructions
//   Output
//   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
  
//   Examples (Input -> Output):
//   * "String"      -> "SSttrriinngg"
//   * "Hello World" -> "HHeelllloo  WWoorrlldd"
//   * "1234!_ "     -> "11223344!!__  "
//   Good Luck!

function doubleChar(str) {
    let newStr = '';
    
    for(let i=0; i<str.length; i++)
      newStr += str[i]+str[i];
  
    return newStr;
  }
  
  // 9/29/2022
  // 8 kyu
  // Century From Year
  // 100327991% of 9,20248,865 of 111,219MrZizoScream
  //  JavaScript
  // Node v10.x
  // VIM
  // EMACS
  // Instructions
  // Output
  // Introduction
  // The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
  
  // Task
  // Given a year, return the century it is in.
  
  // Examples
  // 1705 --> 18
  // 1900 --> 19
  // 1601 --> 17
  // 2000 --> 20
  
  function century(year) {
    return Math.ceil(year/100);
  }

// 9/30/2022
// 8 kyu
// Quarter of the year
// 2885692% of 4,12220,874 of 50,269Orses
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if(month >= 10) return 4;
  else if(month >= 7) return 3;
  else if(month >= 4) return 2;
  else return 1;
}