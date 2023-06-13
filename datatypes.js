// primitive and non-primitive data types

// primitive -- string, number, boolean(true, false), null, undefined
// non-primitives -- object, array, function
let name = "albert";
let height = 90;
let age;
console.log(age); // undefined

let qnty = null;
console.log(qnty);

// checking types --- typeof
console.log(typeof qnty);

// non - primitives // composite datatype

// array
const arrNums = [1, 2, 4, 5, 6, [23, 23, 21]];
// array are zero-index -- access vakues using their index
console.log(arrNums[0]); //1
console.log(arrNums[1]); //2
console.log(arrNums[3]); //5
console.log(arrNums[5][2]); // 21

//object -- made up of key-value pairs
const numbers = {
  one: 1,
  two: 2,
  three: 3,
  end: "last number",
};
// accessing values in an object using dot notation

console.log(numbers.two); // 2
console.log(numbers.end); // last number

// function is a datatype/first-class citizen

// why are functions called first-class citizens in javascript

function squareNumber(num) {
  console.log(num * num);
}
console.log(typeof squareNumber);
// call/invoke the function
squareNumber(9);
squareNumber(90);
squareNumber(12);

const data = {
  employees: [
    {
      id: 1,
      name: "John Doe",
      position: "Manager",
      salary: 5000,
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Developer",
      salary: 4000,
      skills: ["Leadership", "Problem solving", "Project management"],
    },
  ],

  companyName: "Eldohub",
};

//   tasks
//1. log the word Manager from this dataset
//2.  log the salary of the second employee
//3.  print the last skill for the employee Joh Doe(node js)
