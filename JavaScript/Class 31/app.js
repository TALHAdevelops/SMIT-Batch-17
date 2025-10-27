var plan1Name = "Basic";
var plan1Price = 3.99;
var plan1Space = 100;
var plan1Data = 1000;
var plan1Pages = 10;
var plan2Name = "Professional";
var plan2Price = 5.99;
var plan2Space = 500;
var plan2Data = 5000;
var plan2Pages = 50;
var plan3Name = "Ultimate";
var plan3Price = 9.99;
var plan3Space = 2000;
var plan3Data = 20000;
var plan3Pages = 500;

alert(
  "The cost of the " + plan2Name + "package is $" + plan2Price + " per month."
);

// Understanding Objects
// Property    value
// name:      "Abc"

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
};

// Adding Property in Object

plan1.discountMonths = [6, 7, 11];

