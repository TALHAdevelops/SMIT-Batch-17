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