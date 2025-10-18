// Getting Output DOM
console.log(document);

// Child Nodes
document.childNodes[0];
document.childNodes[0].childNodes[1];
document.childNodes[0].childNodes[1].childNodes[1];
document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];

// Example selecting elements in the DOM
var elementById = document.getElementById("my-element");
var elementsByClass = document.getElementsByClassName("my-class");
var elementByQuery = document.querySelector(".my-selector");

// Example modifying element styles and content
var element = document.getElementById("my-element");
element.style.backgroundColor = "red";
element.innerHTML = "Hello, world!";

// Example handling events in the DOM
var element = document.getElementById("my-element");
element.addEventListener("click", function () {
  console.log("Element clicked!");
});
element.addEventListener("mouseover", function () {
  console.log("Mouse over element!");
});
element.addEventListener("keydown", function (event) {
  console.log("Key pressed: " + event.key);
});
