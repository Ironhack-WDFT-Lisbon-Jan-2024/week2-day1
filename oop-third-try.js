/* JAVASCRIPT OBJECT-ORIENTED PROGRAMMING */

/* Final Try - with Classes */

// Class: a class is a template for creating objects. 

// Info about Squares - how much money you gain or lose by getting to each square. 
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -50, -10, 0, 0, -50, -10];

// Variable for the dice 
let dice; 

class Player {
    constructor(name, color){
        this.name = name; 
        this.color = color;
        this.position = 0; 
        this.cash = 1000;
    }

    move(){
        dice = Math.floor(Math.random() * 6 + 1);
        this.position = (this.position + dice) % squares.length; 
        this.cash += squares[this.position]; 
        if(this.cash <= 0){
            console.log("Mi casa, not su casa, Shakira, Shakira, Shakira");
        }
    }

    displayInfo(){
        return console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
    }
}

let player1 = new Player('John Cena', 'green');
let player2 = new Player("The Rock", "orange");
let player3 = new Player("Mr.Bean", "blue");

/* 1st Round */
player1.move();
player2.move();
player3.move();

/* Display Info */
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();


class BigBoss extends Player {
    constructor(name, color, amountOfCoolness){
        super(name, color);
        this.amountOfCoolness = amountOfCoolness;
    }
    scream(){
        return console.log(`I AM ${this.amountOfCoolness} COOL!`);
    }
}

let bigBoss1 = new BigBoss("Naruto", "yellow", "Over nine thousand");
bigBoss1.scream();
bigBoss1.displayInfo();
