# 🔥 Firebase Authentication – Class 1

This repository contains the work done in **Firebase Class 1**, where basic Firebase setup and **Signup (Register) functionality** was implemented using **Firebase Authentication**.

---

## 📌 Topics Covered

* Firebase Introduction
* Firebase Project Creation
* Web App Registration
* Firebase CDN Integration
* Firebase Authentication (Email & Password)
* User Signup Functionality

---

## 🚀 What We Did in This Class

### 1️⃣ Firebase Project Setup

* Created a new project from **Firebase Console**
* Registered a **Web App** inside the project

### 2️⃣ Firebase Integration using CDN

* Integrated Firebase into the project using **Firebase CDN**
* Configured Firebase using the provided configuration object

```html
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js"></script>
```

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

---

## 🔐 Firebase Authentication Setup

* Enabled **Email/Password Authentication** from Firebase Console
* Used Firebase Auth methods to register users

---

## 📝 Signup Functionality

Users can create an account using **Email & Password**.

### 🔹 HTML Form Example

```html
<input type="email" id="email" placeholder="Enter Email" />
<input type="password" id="password" placeholder="Enter Password" />
<button onclick="signup()">Sign Up</button>
```

### 🔹 JavaScript Signup Function

```javascript
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Signup Successful");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
}
```

---

## 👀 Where to Check if User is Successfully Signed Up

After successful signup, the user can be verified from **Firebase Console**.

### 🔎 Steps to Check Registered Users:

1. Go to **Firebase Console**
2. Open your **Firebase Project**
3. Click on **Authentication** from the left sidebar
4. Go to the **Users** tab
5. You will see the list of all signed-up users with:

   * Email
   * User ID (UID)
   * Account creation date

If the user email appears in this list, it means **signup was successful** ✅

---

## 📁 File Structure

```
/project-folder
│── index.html
│── app.js
│── README.md
```

---

## ✅ Learning Outcomes

By the end of this class, students learned:

* How to create and configure a Firebase project
* How to integrate Firebase using CDN
* How Firebase Authentication works
* How to register users using Email & Password

---

## 📚 Practice Task

* Rebuild the signup functionality on your own
* Improve UI and error handling
* Push your code to GitHub

---

## 🔜 Next Class

* Login Functionality
* Logout
* Authentication State Handling

---

### 👨‍🏫 Instructor

**Adil Ahmed Shekhani**
MERN Stack Trainer

---

⭐ If you find this project helpful, don't forget to star the repository!
