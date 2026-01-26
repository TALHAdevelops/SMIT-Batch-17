# React App with Vite

## Introduction

This README is written for beginners. Its purpose is to help students understand **what React is**, **what Vite is**, and **how to create a React application using Vite** step by step, in very simple and human English.

---

## What is React?

React is a **JavaScript library** used to build **user interfaces**, especially for web applications. Instead of writing one big file, React allows us to break the UI into **small reusable parts called components**.

### Basic concepts of React:

* **Component**: A small part of the UI (written as a function)
* **JSX**: A syntax that looks like HTML but works inside JavaScript
* **Props**: Used to pass data from one component to another
* **State**: Data inside a component that can change
* **Re-render**: When state or props change, React updates the UI automatically

---

## What is Vite?

Vite is a **modern development tool** used to create and run React applications.

Why we use Vite:

* Very **fast** project setup
* Fast development server
* Simple and clean project structure
* Better than Create React App for new projects

---

## How to create a React app using Vite

### Step 1: Check Node.js

Before starting, make sure **Node.js** is installed on your system.

```bash
node -v
npm -v
```

If versions appear, Node.js is installed correctly.

---

### Step 2: Create a React app with Vite

Open your terminal and run:

```bash
npm create vite@latest
```

Select the following options:

* Project name: any name you like
* Framework: **React**
* Variant: **JavaScript** (or TypeScript if required)

---

### Step 3: Go into project folder

```bash
cd project-name
```

---

### Step 4: Install dependencies

```bash
npm install
```

---

### Step 5: Run the development server

```bash
npm run dev
```

Open the shown URL in your browser (usually `http://localhost:5173`).

Your React app is now running successfully 🎉

---

## Understanding the project structure

```text
project-name
│── src
│   │── main.jsx
│   │── App.jsx
│   │── index.css
│── public
│── package.json
│── vite.config.js
```

### Important files:

* **main.jsx** → Connects React with the browser
* **App.jsx** → Main React component
* **index.css** → Global CSS file

---

## Basic React Component Example

```jsx
function App() {
  return (
    <div>
      <h1>Hello React with Vite</h1>
      <p>This is my first React app</p>
    </div>
  )
}

export default App
```

A component is just a JavaScript function that returns JSX.

---

## What is JSX?

JSX allows us to write HTML-like code inside JavaScript.

```jsx
const name = "Student";

<h1>Hello {name}</h1>
```

Anything inside `{}` is JavaScript.

---



## Summary

* React is used to build UI
* Vite is a fast tool to create React apps
* Components, JSX, Props, and State are core React concepts
* Vite makes React development easy and fast

Happy Coding 🙂
