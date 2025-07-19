console.log("Hello Students");

// Prompts

var spec = prompt("Your species?", "human");

//  Received Input From User

// Place Holder and Default Value

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

// Increment using Prompts

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;

// If Statements (True or False)

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
  alert("Correct!");
}

// Variable using If Statements

var correctAnswer = "Vatican";
if (x === correctAnswer) {
  alert("Correct!");
}

// If Statement using incrememnt

var correctAnswer = "Vatican";
if (x === correctAnswer) {
  score++;
  userIQ = "genius";
  alert("Correct!");
}

// Comparison Operators

// == => Only Check Value
// === => Check Value and Type also
// !== => Not Equal
// > is greater than
// > is Less than
// >= is greater than or equal to
// <= is less than or equal to

// Examples Disscuss in Class

// var age = 21;

// if (age <= 20) {
//   console.log("Eligible");
// }
