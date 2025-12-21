// set () duplicate value not shown
let mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(10);


// Check Value 

console.log(mySet.has(10));
console.log(mySet.has(30));

// Delete Value

mySet.delete(20);

// Checking Size

console.log(mySet.size);

// Clear 

console.log(mySet.size);

// Remove Duplicate Value

let numbers = [1, 2, 2, 3, 4, 4];
let uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);

// Map( ) Key - Value  Store 

let myMap = new Map();

// Set Value 

myMap.set("name", "Adil");
myMap.set("age", 25);

// Check Value

console.log(myMap.has("age"));

// Delete Value

myMap.delete("age");

// Size of Value

console.log(myMap.size);

// Clear

myMap.clear();

// Loop in Map

let student = new Map();
student.set("name", "Ali");
student.set("course", "JavaScript");

for (let [key, value] of student) {
    console.log(key, value);
}

// Example Set and Map

let students = new Set(["Ali", "Ahmed", "Ali"]);
console.log(students);

let studentInfo = new Map();
studentInfo.set("id", 101);
studentInfo.set("name", "Ali");
studentInfo.set("feePaid", true);
