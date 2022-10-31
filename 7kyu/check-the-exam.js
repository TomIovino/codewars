// 10/31/2022
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

//P - 2 arrays, 1st array is correct answer; 2nd array is student's answers
//R - number, checking student's answers vs test answers +4 for right answer, -1 for wrong answer, 0 for blank
//  - arrays are same length and not empty

function checkExam(answer, student) {

    let tot = 0;

    for(let i = 0; i<answer.length; i++){
        if(answer[i]===student[i])
            tot += 4;
        else if(answer[i]!==student[i] && student[i])
            tot -= 1;
    }
  
  return tot>0 ? tot : 0;
}

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0