# React useEffect & Toggle Form (React Bootstrap)

## Introduction

In this class, we learned:

* What is `useEffect`
* Why we use `useEffect`
* How `useEffect` works in simple words
* How to create a **form using React Bootstrap**
* How to **toggle between Login and Registration forms using state**

---

## What is useEffect? (In very simple words)

`useEffect` is a **React Hook** that helps us run some code **automatically** when:

* The component loads (page opens)
* State changes
* Props change

In simple words:

> **useEffect runs code when something changes.**

---

## Why do we use useEffect?

We use `useEffect` when we want to:

* Fetch data from API
* Show alert on page load
* Update title
* Run code when state changes

---

## Simple Example of useEffect

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Loaded");
}, []);
```

This code runs **only once** when the page loads.

---

## useEffect with State Example

```jsx
import { useState, useEffect } from "react";

const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count Changed:", count);
}, [count]);
```

This runs **every time count changes**.

---

## Creating Form using React Bootstrap

### Step 1: Install React Bootstrap

```bash
npm install react-bootstrap bootstrap
```

---

### Step 2: Import Bootstrap CSS in main.jsx

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## Login & Registration Toggle Form

In this class, we built a **form that changes using a button click**.

### Logic:

* If user has an account → show **Login Form**
* If user does not have an account → show **Registration Form**

We used **useState** to change the form.

---

## Toggle Form Example Code

```jsx
import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    console.log("Form changed");
  }, [isLogin]);

  return (
    <Container className="mt-5">
      <h3 className="text-center">
        {isLogin ? "Login Form" : "Registration Form"}
      </h3>

      <Form>
        {!isLogin && (
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="w-100" variant="primary">
          {isLogin ? "Login" : "Register"}
        </Button>
      </Form>

      <div className="text-center mt-3">
        <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don’t have an account? Register" : "Already have an account? Login"}
        </Button>
      </div>
    </Container>
  );
}

export default App;
```

---

## How This Works (Easy Explanation)

* `isLogin` is a state
* If `isLogin` is **true** → Login form shows
* If `isLogin` is **false** → Registration form shows
* Button click changes the state
* When state changes → UI automatically updates

---

## What Students Should Remember

* `useEffect` runs code automatically
* `useState` stores data
* Button click can change state
* UI updates automatically when state changes
* React Bootstrap makes forms easy and beautiful

---

## Practice Task 📝

1. Create this login & registration form
2. Add confirm password field in registration form
3. Show alert when form changes

---
Happy Coding 😊
