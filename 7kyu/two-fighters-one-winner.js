// 10/20/2022
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

//PREP
//P:fighter function, winner function, create fighters, winner(f1, f2, initiator), number always > 0
//R: return name of winner
//E:

function Fighter(name, health, dpa) {
    this.name = name;
    this.health = health;
    this.dpa = dpa;
    this.toString = function() { return this.name; }
}

function declareWinner(f1,f2,initiator){
    let parseAttack = '';

    if(f1.name === initiator){
        f2.health -= f1.dpa;
        
        if(f2.health <= 0){
            parseAttack = `${f1.name} attacks ${f2.name}; ${f2.name} now has ${f2.health} health and is dead. ${f1.name} wins.`;
            console.log(parseAttack);
            return f1.name;
        }

        parseAttack = `${f1.name} attacks ${f2.name}; ${f2.name} now has ${f2.health} health.`;

        console.log(parseAttack);
        return declareWinner(f1,f2,f2.name);

    }else{
        f1.health -= f2.dpa;

        if(f1.health <= 0){
            parseAttack = `${f2.name} attacks ${f1.name}; ${f1.name} now has ${f1.health} health and is dead. ${f2.name} wins.`;
            console.log(parseAttack);
            return f2.name;
        }
        
        parseAttack = `${f2.name} attacks ${f1.name}; ${f1.name} now has ${f1.health} health.`;
        
        console.log(parseAttack);
        return declareWinner(f1,f2,f1.name);

    }
}

declareWinner(new Fighter("Harry",50,10),new Fighter("Robin",100,10),"Harry") // Robin wins
declareWinner(new Fighter("Fyrtunge",1000,90),new Fighter("Sepfyn",800,150),"Sepfyn") // Sepfyn wins