## What we learned in this class

### 1. Created a React Project using Vite

We started the class by creating a **new React project using Vite**.

Vite helps us:

* Create React projects very fast
* Run the app quickly in the browser
* Keep the project structure clean and simple

After creating the project, we ran the development server and checked the app in the browser.

---

### 2. Connected Bootstrap with React

After setting up the project, we connected **Bootstrap** to our React app for styling.

Bootstrap helps us:

* Write less CSS
* Use ready-made classes for layout and design
* Make UI responsive easily

Basic steps we followed:

* Installed Bootstrap using npm
* Imported Bootstrap CSS in `main.jsx`

Example:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

Then we used Bootstrap classes in our components:

```jsx
<button className="btn btn-primary">Click Me</button>
```

---

### 3. Learned React Icons

We learned how to use **React Icons** in a React project.

React Icons allow us to:

* Use icons as React components
* Easily customize size and color
* Improve UI design

Steps:

* Installed react-icons package
* Imported required icons

Example:

```jsx
import { FaHome } from "react-icons/fa";

<FaHome size={24} color="blue" />
```

---

### 4. Learned Lucide React Icons

We also learned **Lucide React**, which is another modern icon library.

Lucide icons are:

* Clean and modern
* Easy to use
* Fully customizable

Example:

```jsx
import { User, Mail } from "lucide-react";

<User size={24} />
<Mail color="green" />
```

---

## Why Icons are Important in React Apps

* Icons make the UI more attractive
* They improve user experience
* They help users understand buttons and actions easily

---

## What Students Should Remember

* Always create React projects using Vite
* Bootstrap can be used for fast and responsive styling
* Icons are added using npm packages
* React Icons and Lucide React both work as components

---


Happy Coding 😊
