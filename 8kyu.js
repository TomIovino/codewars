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

// 10/04/2022
// 8 kyu
// Grasshopper - Personalized Message
// 2375889% of 5,19924,884 of 54,147danleavitt01 Issue Reported
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// FUNDAMENTALS

function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// 10/05/2022
// 8 kyu
// Find Maximum and Minimum Values of a List
// 44514187% of 6,36524,835 of 68,441Goncalerta2 Issues Reported
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.
// FUNDAMENTALS

var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}

// 10/6/2022
// 8 kyu
// Remove exclamation marks
// 2749490% of 4,80318,458 of 48,246wichu
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// 10/11/2022
// 8 kyu
// Grasshopper - Messi goals function
// 1484479% of 4,70016,071 of 45,252danleavitt01 Issue Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals; 
}

// 10/13/2022
// 8 kyu
// Volume of a Cuboid
// 1784378% of 5,38018,226 of 54,403user51964771 Issue Reported
//  JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// GEOMETRYFUNDAMENTALS

class Kata {
  static getVolumeOfCuboid(l,w,h) {
    return l*w*h;
  }
} // why is static in an 8kyu, trying to confuse new programmers?

// 10/14/2022
// 8 kyu
// Third Angle of a Triangle
// 1136485% of 4,71220,557 of 48,272user5651159
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// FUNDAMENTALS

function otherAngle(a, b) {
  return 180-(a+b);
}

// 10/16/2022
// 8 kyu
// Grasshopper - Terminal game move function
// 1125285% of 3,75010,079 of 33,864danleavitt0
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15
// FUNDAMENTALS

function move (position, roll) {
  return position += roll*2;
}

// 10/17/2022
// 8 kyu
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// 47514790% of 3,96910,280 of 34,384donaldsebleung3 Issues Reported
//  JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// FUNDAMENTALS

String.prototype.toAlternatingCase = function () {
  return String(this).split('').map(x=> x.toLowerCase() === x ? x.toUpperCase() : x.toLowerCase()).join('');
  
}