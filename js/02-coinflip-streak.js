//Date:03-Mar-2026
//Author: Jana Schroth
//Application: The “Coin Flip Streak” Game
//Use: 

/*
In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:

Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
Create a do while loop.
Within the do while loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
*/

//VARIABLE DECLARATION
let coinFlip
let result

//LOOP

do {
    //COIN FLIP
    coinFlip = Math.round(Math.random())
    //console.log(coinFlip)

    //CONDITIONAL
    if (coinFlip === 0){
        result = "Heads"
    }else{
        result = "Tails"
    }
    console.log("The coin flip was:" + result)
} while (result === "Heads")
console.log ("Applicaton ended")











