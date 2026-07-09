// My First Variable <- COMMENT!
let firstName = "Marvens";
console.log(firstName);

// This is a comment 
// it will appear with a red line underneath
// unless we "comment it out"
let lastName = "Jean";
console.log(lastName);

// Numbers
let favNum = 7;
const age = 23;
console.log(favNum);
console.log(age);

// Strings
// "  " - Double Quotes
// '  ' - Single Quotes
// `  ` - Backticks
let favSeason = "Winter";
let favMovie = 'Pulp Fiction';
let randomHobby = `Tennis`;
console.log(favSeason);
console.log(favMovie);
console.log(randomHobby);
console.log("My random hobby is: ", randomHobby);

// Booleans
let randomQuote = "JS is difficult to learn.";
const iFeel = false;
// console.log(randomQuote, iFeel);

// Console log for the sake of it 
// console.log("Words for no reason");

// Concatenation: Adding strings together
console.log("My favorite thing to do is: " + randomHobby);

// Interpolation: Mixing datatypes
// console.log(`My favorite number is ${favNum}`)

// // Typeof!
// console.log(typeof (favNum));
// console.log(typeof (favSeason));

let bigNum = 1000;
let smallNum = 10;
// console.log("Addition: ", bigNum + smallNum);
// console.log("Subtraction: ", bigNum - smallNum);
// console.log("Multiplication: ", bigNum * smallNum);
// console.log("Division: ", bigNum / smallNum);
// console.log("Modulo: ", bigNum % smallNum);

// Shortcut Syntax
// console.log(bigNum +=1);
// console.log(smallNum -=1);

// More Shortcut Syntax
// console.log(bigNum++);
// console.log(smallNum--);

// COMPARISON OPERATORS "COMPERATORS"
// console.log(bigNum > smallNum)
// Should Return "true"

let num1 = 4;
let num2 = "4";
console.log(num1 == num2)
// Should Return False but is in fact "true"

let numTest = num1 == num2 && num1 == typeof("string");
// Should return False
console.log(numTest)

// || -> Or
let numTestTwo = num1 == 4 || num2 == "blue";
// console.log(numTestTwo)

// String Concatenation
// console.log("Hello, World, " + "my name is marvens!")
// console.log ("Winning Lotto Number is: " + 4 + "If this is not your number sorry")

// String Access!
const famousQuote = "Nothing changes, if nothing changes.";
// console.log(famousQuote[0]);

// String Comparison
const a = "words"
const b = "words"
console.log(a === b)

// Long Literal Strings
const snowball = 
    "I made myself a snowball as perfect as can be, " + 
    "I thought I'd keep it as a pet and it let it sleep with me, " +
    "I made it some pajamas and a pillow for its head, " +
    "Then last night it ran away, but first it wet the bed."
    // console.log(snowball)

//     const frost =
// 	"Nature’s first green is gold, \n\
// Her hardest hue to hold. \n\
// Her early leaf’s a flower; \n\
// But only so an hour. \n\
// Then leaf subsides to leaf. \n\
// So Eden sank to grief, \n\
// So dawn goes down to day. \n\
// Nothing gold can stay.";

// console.log(frost);

// const frost2 =
// 	`Nature’s first green is gold,
// Her hardest hue to hold.
// Her early leaf’s a flower;
// But only so an hour.
// Then leaf subsides to leaf.
// So Eden sank to grief,
// So dawn goes down to day.
// Nothing gold can stay.`;

// console.log(frost2);


// Establish Variables
let youngAge = 9;
let activity = "Computer games";
const challengeSentence = `When I was ${youngAge} years old I enjoyed ${activity}, now that i'm ${youngAge + 20}, I don't do that as much`
console.log(challengeSentence)