# React Hooks & useState 

## Introduction


Today we learned:

* What are React Hooks
* What is `useState`
* How to use `useState`
* How to build a **basic Todo App** using `useState`

---

## What are React Hooks?

React Hooks are **special functions** that allow us to use React features inside functional components.

Before hooks, we needed class components for state and logic. Now, with hooks, we can do everything using **simple functions**.

Some common hooks are:

* `useState`
* `useEffect`
* `useContext`

In today’s class, we focused on **useState**.

---

## What is useState?

`useState` is a React Hook that helps us **store and update data inside a component**.

We use `useState` when:

* Data can change
* UI needs to update when data changes

Example:

```jsx
import { useState } from "react";

const [count, setCount] = useState(0);
```

Here:

* `count` is the current value
* `setCount` is the function used to update the value
* `0` is the initial value

---

## Simple Counter Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

When the button is clicked, the value changes and the UI updates automatically.

---

## What is a Todo App?

A Todo App is a simple application where users can:

* Add tasks
* View tasks
* Delete tasks

We built a **basic Todo App** using `useState` to understand how state works in real projects.

---

## How We Built the Todo App (Concept)

### Step 1: Create state for input

We created a state to store the input value.

```jsx
const [task, setTask] = useState("");
```

---

### Step 2: Create state for todo list

We created another state to store all tasks.

```jsx
const [todos, setTodos] = useState([]);
```

---

### Step 3: Add new task

We created a function to add tasks into the list.

```jsx
const addTask = () => {
  setTodos([...todos, task]);
  setTask("");
};
```

---

### Step 4: Display todo list

We displayed all tasks using `map()`.

```jsx
{todos.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

---

## What Should Remember

* Hooks make React development easy
* `useState` is used to store and update data
* When state changes, UI updates automatically
* Todo app helps us understand real-time state handling

---

## Practice Task 📝

1. Create a React app using Vite
2. Build a simple Todo App
3. Add these features:

   * Add task
   * Delete task
   * Clear all tasks

---


Happy Coding 😊
