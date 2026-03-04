//Date:04-Mar-2026
//Author: Jana Schroth
//Application: Odd or Even?

/*
Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
*/

//LOOP
for (let i = 0; i <= 15; i++ ) {
    if ( i % 2 !== 0) {
        console.log ( i + " is odd")
    } else {
        console.log ( i + " is even")
    }
}