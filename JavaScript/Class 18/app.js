console.log("Hello Students")

var rightNow = new Date();

console.log(rightNow)

// Change in String
var dateString = rightNow.toString();

console.log(dateString)

// Day Method

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var rightNow = new Date();
var theDay = rightNow.getDay();
var nameOfToday = dayNames[theDay];


console.log(nameOfToday)