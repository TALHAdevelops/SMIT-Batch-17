## 📌 What is TypeScript?

TypeScript is an **extended version of JavaScript**. It adds something very important called **types**.

In simple words:

> **TypeScript helps you catch mistakes while writing code, not after running it.**

TypeScript code is finally converted into JavaScript, because browsers and Node.js understand only JavaScript.

---

## 🤔 Why Do We Use TypeScript?

* It helps find errors early
* Makes code more readable and understandable
* Very useful for large applications
* Commonly used with React and Next.js

---

## 🧱 Creating Variables in TypeScript

In TypeScript, we define **what type of data** a variable will store.

### ✅ String Type

Used to store text values.

```ts
let studentName: string = "Ali";
```

---

### ✅ Number Type

Used to store numbers.

```ts
let age: number = 20;
```

---

### ✅ Boolean Type

Used to store true or false values.

```ts
let isPassed: boolean = true;
```

---

### ❌ Wrong Example (Type Error)

```ts
let age: number = "twenty";
```

TypeScript will show an error because a **string** value is being assigned to a **number** type variable.

This is one of the biggest advantages of TypeScript.

---

## ▶️ How to Run TypeScript Code

TypeScript cannot run directly in the browser or Node.js.
First, we convert it into JavaScript.

---

## 🔹 Step 1: Create a TypeScript File

Create a file named `index.ts`

```ts
let message: string = "Hello TypeScript";
console.log(message);
```

---

## 🔹 Step 2: Compile TypeScript to JavaScript

Run this command in the terminal:

```bash
npx tsc index.ts
```

This command will generate a new file:

```
index.js
```

---

## 🔹 Step 3: Run the JavaScript File

Now run the JavaScript file using Node.js:

```bash
node index.js
```

### Output:

```bash
Hello TypeScript
```

---

## 🔁 Simple Flow to Remember

```
TypeScript (.ts)
      ↓ compile
JavaScript (.js)
      ↓
Run with Node or Browser
```

---

## 📝 Summary

* TypeScript is JavaScript with types
* We define variable types like string, number, and boolean
* TypeScript code must be compiled into JavaScript
* Use `npx tsc file.ts` to compile
* Use `node file.js` to run the code

---

✅ This guide covers only the **basic concepts** of TypeScript.
More topics like **functions, arrays, objects, and interfaces** will be covered in upcoming lessons.

Happy Coding 🚀
