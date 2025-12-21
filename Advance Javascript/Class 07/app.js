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


