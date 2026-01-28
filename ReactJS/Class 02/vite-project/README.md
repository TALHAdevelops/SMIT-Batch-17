
## What we did today in React

### 1. Created a React App using Vite

We started by creating a new React application using **Vite**, which is a fast and modern tool for building React apps.

Basic steps we followed:

* Created a React project using Vite
* Installed dependencies
* Ran the development server
* Opened the app in the browser

This helped us understand how a React project is structured.

---

### 2. Created Variables and Used Them in Components

We learned how to create **variables in JavaScript** and use them inside React components.

Example:

```jsx
const name = "Student";

<h1>Hello {name}</h1>
```

We used `{}` to display JavaScript variables inside JSX.

---

### 3. Created Functions and Used Them in Components

We created simple **JavaScript functions** and called them inside components.

Example:

```jsx
function greet() {
  return "Welcome to React";
}

<p>{greet()}</p>
```

This helped us understand how logic works inside React components.

---

### 4. Styling Components Using Props

We learned how to pass styling values using **props**.

Example:

```jsx
function Title(props) {
  return <h1 style={{ color: props.color }}>{props.text}</h1>
}

<Title text="React Class" color="blue" />
```

This showed us how data and styles can be passed from one component to another.

---

### 5. Styling Using External CSS

We also used **external CSS files** for styling.

Steps:

* Created a CSS file
* Added class names
* Applied those class names in JSX

Example:

```css
.heading {
  color: green;
  font-size: 24px;
}
```

```jsx
<h1 className="heading">Hello React</h1>
```

---

### 6. Adding Images Using Import Method

We learned how to add images in React using the **import method**.

Example:

```jsx
import logo from "./assets/logo.png";

<img src={logo} alt="Logo" />
```

This is the recommended way to use images in React.

---

### 7. Created Header and Footer Components

We created separate components for **Header** and **Footer**.

Example:

```jsx
function Header() {
  return <h2>This is Header</h2>
}

function Footer() {
  return <h2>This is Footer</h2>
}
```

Then we used these components inside **App.jsx**:

```jsx
<Header />
<Footer />
```

This helped us understand **component reusability**.

---

## What Students Should Remember

* React apps are made using components
* JSX allows us to use JavaScript inside HTML-like code
* Variables and functions can be used inside components
* Styling can be done using props and CSS
* Components can be reused (Header, Footer)

---

### Next Class Preview 🚀

In the next class, we will learn:

* More practice with components
* Props in detail
* Event handling
* Small React exercises

Happy Learning 😊
