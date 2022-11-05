// 11/4/2022

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//P array that could be numbers or nothing (null/nill)
//R sorted array of numbers

function solution(nums){
// sort()
// check for null

    return nums ? nums.sort((a,b)=>a-b) : [];
}

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []