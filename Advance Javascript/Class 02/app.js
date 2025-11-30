// Template Literals

let name = "Adil";
console.log(`Hello, my name is ${name}`);


let msg = `
This is line 1
This is line 2
This is line 3
`;

console.log(msg);

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

// Shallow Copy

let obj1 = {
  name: "Hamza",
  address: { city: "Karachi" }
};

let obj2 = { ...obj1 }; 

obj2.address.city = "Lahore";

console.log(obj1.address.city);

// Deep Copy 

let obj1 = {
  name: "Hamza",
  address: { city: "Karachi" }
};

let obj2 = JSON.parse(JSON.stringify(obj1)); 

obj2.address.city = "Lahore";

console.log(obj1.address.city); 