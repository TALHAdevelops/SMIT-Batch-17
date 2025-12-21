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