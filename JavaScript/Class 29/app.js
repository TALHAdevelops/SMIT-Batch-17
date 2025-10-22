console.log("Hello");

// Counting Elements
var liElements = document.getElementsByTagName("li");
var howManyLi = liElements.length;
console.log(howManyLi);

// Counting Elements (Loop)

for (var i = 0; i < howManyLi; i++) {
  if (liElements[i].innerHTML === "") {
    liElements[i].innerHTML = "coming soon";
  }
}

// Attributes

var target = document.getElementById("p1");
var hasClass = target.hasAttribute("class");
console.log(hasClass)

// Get Attributes and Set Attributes

var target = document.getElementById("div1");
var attVal = target.getAttribute("class");
console.log(attVal)

var target = document.getElementById("div1");
target.setAttribute("class", "special");
console.log(target)

// Attributes Name and Values

var list = document.getElementById("p1").attributes;


var nValue = list[0].nodeValue;
console.log(nValue)

// Adding Nodes (Create Nodes)

var nodeToAdd = document.createElement("p");

console.log(nodeToAdd)

var newTxt = document.createTextNode("Hello!");

console.log(newTxt)

nodeToAdd.appendChild(newTxt);

console.log(nodeToAdd)

// Inserting Nodes

var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);

console.log(parentDiv)
