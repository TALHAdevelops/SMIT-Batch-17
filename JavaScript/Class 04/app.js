alert("Hello");

// Prompts

var fullName = prompt();

// Place Holder

var spec = prompt("Your species?", "human");

// Place Holder Using Variables
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

// Response in String
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console.log(tooManyCats)

