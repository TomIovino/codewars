// 10/29/2022
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//P taking in a string - will always be a string
//R whether or not entire string is uppercase - true or false

String.prototype.isUpperCase =  function(){
    for(let i=0; i<this.length; i++){
        if(this[i] !== this[i].toUpperCase())
            return false;
    }
    return true;
};

//isUpperCase("ABC") true
//isUpperCase("ASjKASD") false