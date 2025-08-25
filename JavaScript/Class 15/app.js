alert("Hello")

// Math Random Method
var randomNumber = Math.random();

console.log(randomNumber)

// Math Random and Math Floor Methods
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);

console.log(numberOfStars)

// Convert String to integers & Decimal

var currentAge = prompt("Enter your age.");
var yearsEligibleToVote = currentAge - 18;

console.log(yearsEligibleToVote)

var currentAge = prompt("Enter your age.");
var qualifyingAge = parseInt(currentAge) + 1;

console.log(qualifyingAge)

// Parse Float

var myFractional = parseFloat("1.9999");

console.log(myFractional)