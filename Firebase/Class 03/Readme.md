# 🔥 Firebase Database Introduction – Todo App (Realtime)

This repository contains the work done in **Firebase Database Class**, where students were introduced to **Firebase Realtime Database** using a simple **Todo App**.

In this class, we learned how data can be **added, stored, and displayed in real time** using Firebase Database.

---

## 📌 Topics Covered

* Firebase Database Introduction
* Realtime Database vs Normal Database (Concept)
* Firebase Realtime Database Setup
* Adding Data to Firebase Database
* Fetching Data from Firebase Database
* Realtime Data Sync using a Todo App

---

## 🧠 What is Firebase Realtime Database?

Firebase Realtime Database is a **cloud-based NoSQL database** that stores data in **JSON format**.

The main feature of this database is:

* Data updates **in real time**
* Changes appear instantly without refreshing the page

---

## 🚀 What We Did in This Class

### 1️⃣ Firebase Realtime Database Setup

* Opened **Firebase Console**
* Created a **Realtime Database**
* Selected test mode for learning purpose

---

### 2️⃣ Todo App Introduction

We created a simple **Todo App** to understand how Firebase Database works.

In this app:

* User can add a todo
* Todo is saved in Firebase Database
* Todo list updates in real time on the screen

---

## 📝 Add Todo (Save Data to Database)

### 🔹 HTML Example

```html
<input type="text" id="todoInput" placeholder="Enter Todo" />
<button onclick="addTodo()">Add Todo</button>
<ul id="todoList"></ul>
```

---

### 🔹 JavaScript: Add Data to Firebase Database

```javascript
const database = firebase.database();

function addTodo() {
  const todoText = document.getElementById("todoInput").value;

  const todoRef = database.ref('todos');
  const newTodo = todoRef.push();

  newTodo.set({
    text: todoText
  });

  document.getElementById("todoInput").value = "";
}
```

---

## 📡 Fetch & Show Data in Real Time

Firebase automatically updates data when something changes in the database.

```javascript
database.ref('todos').on('child_added', (snapshot) => {
  const todo = snapshot.val();

  const li = document.createElement('li');
  li.innerText = todo.text;

  document.getElementById('todoList').appendChild(li);
});
```

---

## 👀 Where to See Data in Firebase

1. Go to **Firebase Console**
2. Open your project
3. Click on **Realtime Database**
4. Go to **Data** tab
5. You will see todos stored in JSON format

If data appears here, it means it is **successfully saved** ✅

---

## 📁 Recommended File Structure

```
/project-folder
│── index.html
│── app.js
│── README.md
```

---

## ✅ Learning Outcomes

After this class, students are able to:

* Understand Firebase Realtime Database
* Store data in Firebase Database
* Fetch data in real time
* Build a basic Todo App using Firebase

---

## 📝 Practice Task

* Improve Todo App UI
* Add delete todo functionality
* Add timestamp to each todo
* Push updated code to GitHub

---

## 🔜 Next Class

* Update & Delete Data

---

### 👨‍🏫 Instructor

**Adil Ahmed Shekhani**
MERN Stack Trainer

---

⭐ If this project helped you understand Firebase Database, don’t forget to star the repository!
