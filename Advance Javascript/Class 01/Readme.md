# Variables, Closures & Destructuring

This repository covers core JavaScript concepts in a simple way for
beginners and students:\
- `var`, `let`, `const`\
- **Closures**\
- **Array & Object Destructuring**

------------------------------------------------------------------------

# 🔹 1. Variables in JavaScript

JavaScript has three ways to declare variables.

## 1️⃣ `var`

Old way of declaring variables.

### ✔ Features

-   Function scoped\
-   Can be **re-declared**\
-   Can be **updated**

### Example

``` js
var name = "Adil";
var name = "Ahmed"; // Allowed
console.log(name);
```

------------------------------------------------------------------------

## 2️⃣ `let`

Modern and recommended for most cases.

### ✔ Features

-   Block scoped\
-   Cannot be **re-declared** in same scope\
-   Can be updated

### Example

``` js
let age = 20;
age = 21;
console.log(age);
```

------------------------------------------------------------------------

## 3️⃣ `const`

Used for values that should **not change**.

### ✔ Features

-   Block scoped\
-   Cannot be **updated**\
-   Cannot be **re-declared**

### Example

``` js
const country = "Pakistan";
console.log(country);
```

------------------------------------------------------------------------

# 🔹 Summary Table

  Keyword   Scope      Re-declare   Update   Use Case
  --------- ---------- ------------ -------- ----------------
  var       Function   ✔ Yes        ✔ Yes    Old code
  let       Block      ❌ No        ✔ Yes    Most variables
  const     Block      ❌ No        ❌ No    Fixed values

------------------------------------------------------------------------

# 🔹 2. Closures in JavaScript

A **closure** means:

> *A function remembers the variables from its outer function even after
> the outer function has finished executing.*

### 🔸 Example

``` js
function outerFunction() {
  let counter = 0;

  function innerFunction() {
    counter++;
    console.log(counter);
  }

  return innerFunction;
}

const myCounter = outerFunction();

myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
```

------------------------------------------------------------------------

# 🔹 3. Destructuring

## 3.1️⃣ Array Destructuring

``` js
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third);
```

------------------------------------------------------------------------

## 3.2️⃣ Object Destructuring

``` js
const student = {
  name: "Adil",
  age: 30,
  city: "Karachi"
};

const { name, age, city } = student;
console.log(name, age, city);
```

------------------------------------------------------------------------

# 🎯 Conclusion

This repository helps students learn:

-   Difference between `var`, `let`, `const`
-   How **closures** work\
-   How to use **object and array destructuring**
