type MyNumber = number;

let a: MyNumber = 123;

// let student = {
//   name: "Adil",
//   age: 20,
//   isPassed: true
// };

// let student: {
//   name: string;
//   age: number;
//   isPassed: boolean;
// } = {
//   name: "Ali",
//   age: 20,
//   isPassed: true
// };

// Object with Optional Property

let student: {
  name: string;
  age: number;
  isPassed?: boolean;
} = {
  name: "Ali",
  age: 20
};


// Create object using Interface

interface Student {
  name: string;
  age: number;
  isPassed?: boolean;
}

let student1: Student = {
  name: "Ali",
  age: 20,

};

// Create Arrays with its Types

let arr: number[] = [123, 123, 123]
let arr1: string[] = ["123", "123", "123"]

// Create Arrays with Another way to assign type

let abc: Array<string> = ["a", "b", "c"]

// Void Type Function

function greet(name: string): void {
console.log("Hello " + name);
}


greet("Adil");
