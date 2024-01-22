/* JAVASCRIPT OBJECT-ORIENTED PROGRAMMING */

/* MONOPOLY Game Example */

// 2nd Try = Objects with Functions 

// Info about Squares - how much money you gain or lose by getting to each square. 
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -50, -10, 0, 0, -50, -10];

// Variable for the dice 
let dice; 

/* PLAYERS */
let player1 = {
    name: 'John Cena', 
    color: 'green',
    position: 0,
    cash: 1000,
    move(){
        dice = Math.floor(Math.random() * 6 + 1);
        this.position = (this.position + dice) % squares.length; 
        this.cash += squares[this.position]; 
        if(this.cash <= 0){
            console.log("Mi casa, not su casa, Shakira, Shakira, Shakira");
        }
    }, 
    displayInfo(){
        return console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
    }
}

let player2 = {
  name: "The Rock",
  color: "orange",
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6 + 1);
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log("Mi casa, not su casa, Shakira, Shakira, Shakira");
    }
  },
  displayInfo() {
    return console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}`
    );
  },
};

let player3 = {
  name: "Mr.Bean",
  color: "blue",
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6 + 1);
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log("Mi casa, not su casa, Shakira, Shakira, Shakira");
    }
  },
  displayInfo() {
    return console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}`
    );
  },
};

/* 1st Round */
player1.move();
player2.move();
player3.move();

/* Display Info */
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();