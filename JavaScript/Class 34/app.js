// Objects in LOOPS

var student = { fname: "Farzand", lname: "Ali", age: 25 };

var text = "";
for (x in student) {
    text += student[x];
}

console.log(text)

// Local Storage
function signup() {
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    if (name && email && password) {
        var user = {
            name: name,
            email: email,
            password: password,
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Signup successful!");
    } else {
        alert("Please fill all fields!");
    }
}

function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var storedUser = JSON.parse(localStorage.getItem("user"));

    if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
    ) {
        alert("Login successful! Welcome, " + storedUser.name);
    } else {
        alert("Incorrect email or password!");
    }
}

function logout() {
    localStorage.removeItem("user");
    alert("User data removed (Logout successful).");
}

function clearAll() {
    localStorage.clear();
    alert("All data cleared from localStorage.");
}

