// CONDITIONALS:
// My Definition - Choosing a path
// Google's Definition - Conditional statements control the execution flow of your JavaScript code by running different blocks of code depending on whether a specified condition evaluates to true or false.

// Our First Conditional
// Establish Variables

// let age = 16;

// if (age >= 16) {
//     console.log("You're old enough to drive, here are the keys!")
// } else {
//     console.log(`You are not ${age} years old! Here's a bus token.`)
// }

// // Conditional Challenge
// // Create a conditional that checks if a patron is 21 or over, console log a message for either condition.

// // Set Variables
// let adultAge = 20;

// // Conditional
// if (adultAge >= 21) {
//     console.log("Welcome to the club.")
// } else {
//     console.log(`No entrance for you! Must be older than 21 and you are only ${adultAge}!`)
// }

// // Same Solution using Booleans!
// let barPatronAge = 91;
// let allowedIn = barPatronAge >= 21;

// if (allowedIn === true) {
//     console.log("You are old enough to enter come on in!")
// } else {
//     console.log(`No entrance for you! Must be older than 21 and you are only ${barPatronAge}!`)
// }

// // REFERENCE ERROR - What is it?
// // Occurs when you try to access a variable out of scope.

// // Random conditional with no "else"
// let userName = "yazzyFr3sh"

// if (userName == "lordnuttmen") {
//     console.log("It't not too late to change this.")
// } else {
//     console.log(`looks like the username is ${userName}`)
// }

// // TIC TAC TOE PSEUDOCODE: Outline logic before writing code - making it easy for humans and non-progammers.
// // Step One - Establish variables
// // Step Two - Establish first player turn "X"
// // Step Three - Check for empty space and place a piece...
// // Step Four - yadayayaydydydyada
// let playerOne = "X";
// let playerTwo = "O";
// let playerTurn = "something";


// // Datatype Coercion???
// // Changing a value of a datatype from one to another. When types don't match, JS converts them behind the scene so the operation finishes.
// console.log("5" + 2) // Expecting 52
// console.log("5" - 2) // Expecting 48 or error

// // Exercise
// // Open a code editor and create a file that will run some JavaScript code.
// // Inside of the file:

// // Declare a variable called num.
// // Write a conditional statement that checks if the num is positive or negative.

// // Establish Variables
// let num = -2;

// if (num > 0) {
//     console.log(`${num} is Positive`)
// } else {
//     console.log(`${num} is Negative`)
// }

// // If Else Statement for positive num greater than or less than 100
// // Establish Variable!!!
// let num = 21;

// if (num > 0) {
//     if (num > 100) {
//         console.log(`${num} is positive and greater than 100`)
//     } else {
//         console.log(`${num} is positive but less than 100`)
//     }

// } else {
//     console.log(`${num} is negative`)
// }

// // Gradebook Conditional
// // Establish variables!
// let grade = 109

// // Conditionals
// if (grade >= 90) {
//     console.log("A")
// } else if (grade >= 80) {
//     console.log("B")
// } else if (grade >= 70) {
//     console.log("C")
// } else if (grade >= 55) {
//     console.log("D")
// } else {
//     console.log("F")
// }


// SWITCH STATEMENTS!!!
// Establish a variable

// let day = "Sunday"

// switch (day){
//     case "Monday":
//         console.log("Its the beginning of the week, let the coffee flow!")
//         break;

//     case "Friday":
//         console.log("Its the end of the week! Let's have fun!")
//         break;

//     case "Saturday":
//     case "Sunday":
//         console.log("YEAH BABY ITS THE WEEKEND, sleep here I come.")
//         break;

//     default:
//         console.log("It's a regular schmegular day...")
// }

// TERNARY TINGS
// Light Switch Example

let lightSwitchOn = true;
if (lightSwitchOn) {
    console.log("Lights are on!")
} else {
    console.log("It is dark in here!")
}

// Refactor!

let message = lightSwitchOn ? "Lights are all on!" : "Lights are off!"
console.log(message)

// THROWING ERRORRRRRRRRRRRRS!!!
let age = 29;

if (age < 16) {
    throw new Error("YOU ARE NOT OLD ENOUGH TO DRIVE ALONE. You need your permit.")
} else {
    console.log("You are free to hit the road.")
}

// TRY CATCH ERROR THROW!
try {
    if (age < 16) {
        throw new Error("You are not old enough to drive!")
    }
    console.log("You are old enough!")


} catch (error) {
    console.log("Error: ", error.message)
} finally {
    console.log("Your age has been verified!")
}