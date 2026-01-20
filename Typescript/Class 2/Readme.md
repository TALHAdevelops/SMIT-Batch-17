# 📘 TypeScript

This **README.md** is written for students to clearly understand the **basic concepts of TypeScript** in simple, human‑friendly English. In this class, we covered the following topics:

---

## 🔹 Functions in TypeScript

In TypeScript, we define the **type of parameters** and the **return type** of a function.

### Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10);
```

---

## 🔹 Void Type

When a function **does not return any value**, we use the `void` type.

```ts
function greet(name: string): void {
  console.log("Hello " + name);
}

greet("Adil");
```

---

## 🔹 Objects in TypeScript

In TypeScript, object properties are defined with their **specific types**.

```ts
const student: { name: string; age: number; isActive: boolean } = {
  name: "Ali",
  age: 20,
  isActive: true
};
```

This ensures that the object always follows the same structure.

---

## 🔹 Creating Custom Types using `type`

The `type` keyword is used to create **custom data types**.

```ts
type StudentType = {
  name: string;
  age: number;
  course: string;
};

const student1: StudentType = {
  name: "Ahmed",
  age: 22,
  course: "MERN Stack"
};
```

---

## 🔹 Creating Interfaces

An `interface` is mainly used to define the **structure of an object**.

```ts
interface Teacher {
  name: string;
  experience: number;
}

const teacher1: Teacher = {
  name: "Sir Adil",
  experience: 3
};
```

📌 **Important Note:**

* `type` is more flexible
* `interface` is easier to extend and commonly used for objects

---

## 🔹 Arrays in TypeScript

While creating arrays, we define the **type of values** stored inside them.

### Number Array

```ts
let numbers: number[] = [1, 2, 3, 4];
```

### String Array

```ts
let names: string[] = ["Ali", "Ahmed", "Sara"];
```

### Array of Objects

```ts
interface User {
  id: number;
  email: string;
}

let users: User[] = [
  { id: 1, email: "test1@gmail.com" },
  { id: 2, email: "test2@gmail.com" }
];
```

---

## ✅ Summary

In this class, students learned:

* Functions with typed parameters and return values
* Using the `void` type
* Creating objects with types
* Creating `type` and `interface`
* Creating arrays with defined types

These concepts are **very important** for modern frontend development 🚀

---

### ✨ Happy Coding!

Practice these examples and feel free to ask questions if anything is unclear.
