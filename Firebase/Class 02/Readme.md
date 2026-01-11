# 🔥 Firebase Authentication – Class 2

This repository contains the work done in **Firebase Class 2**, where we implemented **Login**, **Logout**, and **Phone Number Authentication** using **Firebase Authentication**.

---

## 📌 Topics Covered

* Login with Email & Password
* Logout Functionality
* Authentication State Handling
* Phone Number Authentication (OTP)

---

## 🚀 What We Did in This Class

### 1️⃣ Login Functionality (Email & Password)

Users can log in using the same email and password they used during signup.

#### 🔹 HTML Example

```html
<input type="email" id="loginEmail" placeholder="Enter Email" />
<input type="password" id="loginPassword" placeholder="Enter Password" />
<button onclick="login()">Login</button>
```

#### 🔹 JavaScript Login Function

```javascript
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login Successful");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
}
```

---

### 2️⃣ Logout Functionality

Logout allows the currently logged-in user to end their session.

#### 🔹 HTML Example

```html
<button onclick="logout()">Logout</button>
```

#### 🔹 JavaScript Logout Function

```javascript
function logout() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logout Successful");
    })
    .catch((error) => {
      alert(error.message);
    });
}
```

---

### 3️⃣ Authentication State Handling

Firebase provides a method to check whether a user is logged in or not.

```javascript
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User Logged In:", user.email);
  } else {
    console.log("User Logged Out");
  }
});
```

---

## 📱 Phone Number Authentication

Phone authentication allows users to sign in using their **mobile number and OTP**.

### 🔹 Steps Covered in Class:

1. Enabled **Phone Authentication** from Firebase Console
2. Used **reCAPTCHA verifier**
3. Sent OTP to the user's phone number
4. Verified OTP to log in the user

### 🔹 JavaScript Example (Basic)

```javascript
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

function sendOTP() {
  const phoneNumber = document.getElementById("phone").value;

  firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent");
    })
    .catch((error) => {
      alert(error.message);
    });
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;

  confirmationResult.confirm(otp)
    .then((result) => {
      alert("Phone Authentication Successful");
      console.log(result.user);
    })
    .catch((error) => {
      alert(error.message);
    });
}
```

```html
<div id="recaptcha-container"></div>
```

---

## 👀 Where to Check Logged-in Users

* Go to **Firebase Console**
* Open your project
* Navigate to **Authentication → Users**
* You can see users logged in via:

  * Email/Password
  * Phone Number

---

## 📁 Recommended File Structure

```
/project-folder
│── index.html
│── login.html
│── app.js
│── README.md
```

---

## ✅ Learning Outcomes

After this class, students are able to:

* Login users using Firebase Authentication
* Logout users securely
* Track authentication state
* Implement Phone Number Authentication with OTP

---

## 📝 Practice Task

* Create a complete auth flow (Signup → Login → Logout)
* Add Phone Authentication
* Improve UI and error messages
* Push your updated code to GitHub

---

## 🔜 Next Class

* Firestore Database Introduction

---

### 👨‍🏫 Instructor

**Adil Ahmed Shekhani**
MERN Stack Trainer

---

⭐ Don’t forget to star the repository if this helped you!
