// 10/27/2022
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//P takes in value, could be anything
//R value * 50 + 6, if value is string -> 'error'

const mathEquation = (value) => typeof value !== 'number' ? 'Error' : value*50+6; 


// mathEquation('3') 'error'
// mathEquation(10) 56