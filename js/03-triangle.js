//Date:04-Mar-2026
//Author: Jana Schroth
//Application: Looping a Triangle

/*
Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/

let display = "#"

for (let i = 1; i <= 7; i++) {
    if (i===1) {
        console.log (display)
    } else {
        display = display + "#"
        console.log (display)
    }
}