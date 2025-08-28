console.log("Hello");

// Convert String to Numbers
// Example 1
var integerString = "24";
var num = Number(integerString);

// Example 2
var floatingNumString = "24.9876";
var num = Number(floatingNumString);

// Convert Numbers to String
var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();

// Controlling the length of decimals

// Example 1

var price = 9.95;
var taxRate = 6.5;

var total = price + price * taxRate;

var prettyTotal = total.toFixed(2);

var currencyTotal = "$" + prettyTotal;

var prettyTotal = total.toFixed();

// Example 2
// 1. Converts the number to a string and assigns it to the variable str.
//  2. Checks to see if the last character is "5".
//  3. If so, slices off the "5" and appends "6".
//  4. --
//  5. Converts it back to a number.
//  6. Rounds it to 2 places.

var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
  str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2);
