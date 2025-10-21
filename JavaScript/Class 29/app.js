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
