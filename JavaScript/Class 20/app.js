console.log("Hello");

// Basic Structure of Function

function functionName(parameter1, parameter2) {
  // function ke andar ka code (body)
}

// Function Call

functionName(Argument1, Arguments2);

// Example

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Call Function

greet("Ali"); // Output: Hello, Ali!

// Passing Data through Variable

function greetUser(greeting) {
  alert(greeting);
}

var whatever = "Hello, there.";
greetUser(whatever);

// Passing Data (String,Number)

function showMessage(m, string, num) {
  alert(m + string + num);
}

var month = "March";
showMessage(month, "'s winner number is ", 23);
