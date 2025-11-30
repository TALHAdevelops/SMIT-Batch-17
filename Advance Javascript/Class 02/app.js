// Default Parameters

function abc(a = "Kuch Likhenge") {
    console.log(a);
}

abc();
abc("Adil");

// Rest Parameters

function info(name, ...hobbies) {
    console.log(name);
    console.log(hobbies);
}

info("Ali", "Cricket", "Football", "Coding");

// Spread Operators

// Arrays

let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log(merged);

// Objects

let student = { name: "Ali", age: 20 };
let copyStudent = { ...student };

console.log(copyStudent);

