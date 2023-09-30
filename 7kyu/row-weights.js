// 9/29/2023

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)

function rowWeights(array) {
    let team1Total = 0;
    let team2Total = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        // Even-indexed weights go to team 1
        team1Total += array[i];
      } else {
        // Odd-indexed weights go to team 2
        team2Total += array[i];
      }
    }
  
    return [team1Total, team2Total];
  }