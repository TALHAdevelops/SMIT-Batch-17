# React Router DOM 

## Introduction

How to use **React Router DOM** to create **multiple pages in a React application**.

Today we learned:

* What is React Router DOM
* BrowserRouter
* Routes and Route
* Dynamic Routes
* URL Params

---

## What is React Router DOM?

React Router DOM is a **library** that helps us create **multiple pages (routes)** in a React app.

In simple words:

> **React Router DOM allows us to move from one page to another without reloading the browser.**

Example pages:

* Home
* About
* Contact
* Profile
* Product Details

---

## Why do we use React Router?

We use React Router to:

* Create **multi-page applications**
* Navigate between pages easily
* Pass data through URLs
* Build real-world projects like dashboards, e-commerce, blogs, etc.

---

## Step 1: Install React Router DOM

```bash
npm install react-router-dom
```

---

## Step 2: Wrap App with BrowserRouter

BrowserRouter helps React understand **routing system**.

In `main.jsx`:

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## Step 3: Create Routes and Pages

In `App.jsx`:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

Now:

* `/` → Home Page
* `/about` → About Page

---

## What are Dynamic Routes?

Dynamic routes are used when **URL changes based on data**.

Example:

* `/product/1`
* `/product/2`
* `/user/5`

Here, **1, 2, 5** are dynamic values.

---

## Creating Dynamic Routes

```jsx
<Route path="/product/:id" element={<Product />} />
```

Here:

* `:id` is a **dynamic parameter**

---

## What are Params?

Params are **dynamic values in URL**.

Example:
`/product/10`

Here:

* `10` is a **param value**

---

## Using useParams Hook

```jsx
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return <h2>Product ID: {id}</h2>;
}
```

Now:

* `/product/5` → Product ID: 5
* `/product/10` → Product ID: 10

---

## Simple Navigation using Link

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/product/1">Product 1</Link>
```

---

## Complete Flow Example

### Routes Setup

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/product/:id" element={<Product />} />
</Routes>
```

### Product Component

```jsx
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return <h2>Showing product number: {id}</h2>;
}
```

---

## What Should Remember

* React Router helps create multiple pages
* BrowserRouter wraps the whole app
* Routes & Route define pages
* Dynamic routes use `:id`
* Params help get dynamic values from URL

---

## Practice Task 📝

1. Create pages: Home, About, Contact
2. Add routing using React Router DOM
3. Create dynamic route `/student/:id`
4. Display student ID using `useParams`

---

Happy Coding 😊
