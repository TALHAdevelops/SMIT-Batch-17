// set () duplicate value not shown
let mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(10);


// Check Value 

console.log(mySet.has(10)); 
console.log(mySet.has(30)); 
