# Advanced JavaScript

------------------------------------------------------------------------

## 1. Template Literals

Template literals allow you to write strings more easily using backticks
(\`).\
They support variables and multi‑line strings.

### Example -- With Variables

``` js
let name = "Adil";
console.log(`Hello, my name is ${name}`);
```

### Example -- Multi-line String

``` js
let message = `
Line 1
Line 2
Line 3
`;
console.log(message);
```

------------------------------------------------------------------------

## 2. Spread Operator (...)

The spread operator is used to "spread out" elements of arrays or
objects.

### Example -- Copy Array

``` js
let numbers = [1, 2, 3];
let copy = [...numbers];
```

### Example -- Merge Arrays

``` js
let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
```

### Example -- Copy Object

``` js
let person = { name: "Ali", age: 20 };
let newPerson = { ...person };
```

------------------------------------------------------------------------

## 3. Shallow Copy vs Deep Copy

### Shallow Copy

Copies only the first level.\
Nested objects still share the same reference.

``` js
let obj1 = { name: "Hamza", address: { city: "Karachi" } };
let obj2 = { ...obj1 };
obj2.address.city = "Lahore";

console.log(obj1.address.city); // Lahore
```

### Deep Copy

Creates a fully independent copy.

``` js
let obj1 = { name: "Hamza", address: { city: "Karachi" } };
let obj2 = JSON.parse(JSON.stringify(obj1));
```

------------------------------------------------------------------------

## 4. Default Parameters

A function can have default values for parameters.

``` js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet();        // Hello, Guest
greet("Adil");  // Hello, Adil
```

------------------------------------------------------------------------

## 5. Rest Parameters (...)

Rest parameters allow a function to accept multiple values as an array.

``` js
function sum(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  console.log(total);
}

sum(1, 2, 3, 4); // 10
```

------------------------------------------------------------------------

## 6. Enhanced Object Literals

Modern JavaScript allows easier ways to write objects.

### Property Shorthand

``` js
let name = "Ali";
let age = 20;

let student = { name, age };
```

### Method Shorthand

``` js
let user = {
  greet() {
    console.log("Hello!");
  }
};
```

### Dynamic Property Names

``` js
let field = "email";
let user = {
  name: "Adil",
  [field]: "adil@example.com"
};
```

------------------------------------------------------------------------

## 7. Optional Chaining (?.)

Optional chaining allows safe access to nested properties.

``` js
let user = {};
console.log(user.address?.city); // undefined (no error)
```

### With Functions

``` js
obj.greet?.();
obj.sayHi?.();  // no error
```

### With Arrays

``` js
let data = { users: null };
console.log(data.users?.[0]); // undefined
```

------------------------------------------------------------------------
