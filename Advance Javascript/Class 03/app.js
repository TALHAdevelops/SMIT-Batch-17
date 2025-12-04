// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));

// CallBacks

function processData(data, callback) {
    console.log("Processing: " + data);
    callback();
}

function done() {
    console.log("Task Completed!");
}

processData("User Data", done);