// Without Asyn / Await

fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

// Using Asyn / Await 

async function getData() {
    try {
        let response = await fetch("https://api.escuelajs.co/api/v1/products");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Example Using Promise

function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data mil gaya");
        }, 2000);
    });
}

// Then

async function showData() {
    let result = await delay();
    console.log(result);
}

showData();

// Result Check Example

function getResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Student Passed ✅");
        }, 3000);
    });
}

async function checkResult() {
    console.log("Checking result...");
    let result = await getResult();
    console.log(result);
}

checkResult();

// Error Handling

async function loadData() {
    try {
        let response = await fetch("wrong-url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error occurred:", error);
    }
}