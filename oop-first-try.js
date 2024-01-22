/* JAVASCRIPT OBJECT-ORIENTED PROGRAMMING (OOP) */

/* Monopoly Game Example */

// Info about Squares - how much money you gain or lose by getting to each square. 
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -50, -10, 0, 0, -50, -10];

// Variable for the dice 
let dice; 

/* PLAYERS */
let player1 = {
    name: 'John Cena', 
    color: 'green',
    position: 0,
    cash: 1000
}

let player2 = {
    name: 'The Rock', 
    color: 'orange', 
    position: 0, 
    cash: 1000
}

let player3 = {
    name: 'Mr.Bean', 
    color: 'blue',
    position: 0, 
    cash: 1000
}

/* Turn of Player 1 */

// Roll a six-sided dice and we're going to store the random value in the dice variable.
dice = Math.floor(Math.random() * 6 + 1);
// console.log(dice); Output : a number from 1 to 6

// Move the player to a new position.
player1.position = (player1.position + dice) % squares.length; 

// Update the player's cash based on its new position.
player1.cash += squares[player1.position];

// Game Over
if(player1.cash <= 0){
    console.log("Bye, Bye. See you at Ironbeers");
}

/* Turn of Player 2 */

// Roll a six-sided dice and we're going to store the random value in the dice variable.
dice = Math.floor(Math.random() * 6 + 1);
// console.log(dice); Output : a number from 1 to 6

// Move the player to a new position.
player2.position = (player2.position + dice) % squares.length; 

// Update the player's cash based on its new position.
player2.cash += squares[player2.position];

// Game Over
if(player2.cash <= 0){
    console.log("Bye, Bye. See you at Ironbeers");
}

/* Turn of Player 3 */

// Roll a six-sided dice and we're going to store the random value in the dice variable.
dice = Math.floor(Math.random() * 6 + 1);
// console.log(dice); Output : a number from 1 to 6

// Move the player to a new position.
player3.position = (player3.position + dice) % squares.length; 

// Update the player's cash based on its new position.
player3.cash += squares[player3.position];

// Game Over
if(player3.cash <= 0){
    console.log("Bye, Bye. See you at Ironbeers");
}

// After 1st Round - Display Info
console.log(player1);
console.log(player2);
console.log(player3);



