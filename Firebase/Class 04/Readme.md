# 🔥 Firebase Realtime Database – Update & Delete (Todo App)

This repository contains the work done in **Firebase Database Class (Update & Delete)**, where students learned how to **update and delete data** from **Firebase Realtime Database** using a **Todo App**.

This class is a continuation of the previous Todo App where we added and fetched data in real time.

---

## 📌 Topics Covered

* Understanding Firebase Data Keys (IDs)
* Update Data in Firebase Realtime Database
* Delete Data from Firebase Realtime Database
* Real-time UI updates after Update/Delete

---

## 🧠 Concept: Update & Delete in Firebase

In Firebase Realtime Database:

* Every record has a **unique key (ID)**
* This key is used to **update or delete** specific data
* Changes reflect **in real time** without page refresh

---

## 🚀 What We Did in This Class

Using the existing **Todo App**, we added:

* ✏️ Update Todo functionality
* 🗑️ Delete Todo functionality

---

## 📝 Todo App UI Example

```html
<input type="text" id="todoInput" placeholder="Enter Todo" />
<button onclick="addTodo()">Add Todo</button>

<ul id="todoList"></ul>
```

---

## ➕ Add Todo (with Key)

```javascript
function addTodo() {
  const todoText = document.getElementById("todoInput").value;
  const todoRef = firebase.database().ref('todos').push();

  todoRef.set({
    text: todoText
  });

  document.getElementById("todoInput").value = "";
}
```

---

## 📡 Fetch Todos with Keys

```javascript
firebase.database().ref('todos').on('child_added', (snapshot) => {
  const todo = snapshot.val();
  const todoKey = snapshot.key;

  const li = document.createElement('li');
  li.innerHTML = `
    ${todo.text}
    <button onclick="editTodo('${todoKey}', '${todo.text}')">Edit</button>
    <button onclick="deleteTodo('${todoKey}')">Delete</button>
  `;

  document.getElementById('todoList').appendChild(li);
});
```

---

## ✏️ Update Todo

```javascript
function editTodo(key, oldText) {
  const updatedText = prompt("Update Todo", oldText);

  if (updatedText) {
    firebase.database().ref('todos/' + key).update({
      text: updatedText
    });
  }
}
```

---

## 🗑️ Delete Todo

```javascript
function deleteTodo(key) {
  firebase.database().ref('todos/' + key).remove();
}
```

---

## 👀 Where to See Changes

1. Go to **Firebase Console**
2. Open your project
3. Click on **Realtime Database** → **Data** tab
4. Update/Delete actions will reflect instantly

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

After this class, students can:

* Update existing data in Firebase Database
* Delete specific records using keys
* Understand how real-time sync works
* Build a complete CRUD Todo App

---

## 📝 Practice Task

* Add confirmation before delete
* Improve update UI (use input instead of prompt)
* Add timestamp update
* Push updated code to GitHub

---

## 🔜 Next Class

* Complete CRUD Project
* Firebase Firestore CRUD

---

### 👨‍🏫 Instructor

**Adil Ahmed Shekhani**
MERN Stack Trainer

---

⭐ If this helped you understand Update & Delete in Firebase, don’t forget to star the repo!
