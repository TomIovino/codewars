// 12/26/2022

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
    let str = "";
    
    switch(true){
        case old<=13:
          str = "toddy";
          break;
        case old<=17:
          str = "coke";
          break;
        case old<=18:
          str = "beer";
          break;
        case old<=20:
          str = "beer";
          break;
        case old<=30:
          str = "whisky";
          break;
    }
    
    return `drink ${str}`; 
  }