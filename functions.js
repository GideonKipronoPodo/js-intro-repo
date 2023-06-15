// functions are resuable blocks of code
// functional programming paradigm || object oriented programing paradigm

//defining a function
function skipWord() {
  let sentence = "Hello I am albert kip";
  console.log("hello am kip");
}

const age = 90;
const squareNumber = function (param) {
  console.log(param + " square is " + param * param); // string concatenation(type coercion)
  return param ** 2;
};

function calc(operation, num1, num2) {
  console.log("operation: " + operation);
  console.log("first value: " + num1);
  console.log("second value: " + num2);
  console.log("result in exec: " + eval(num1 + operation + num2)); // 34*4
  return "result in return val: " + eval(num1 + operation + num2);
}

// list global predifined functions in javascript and their use cases e.g. eval(),alert() ......

// to execute the block of code, we have to call/invoke  the function

// squareNumber(2); // 2 square is 4
// squareNumber(20); // 20 squre is 400
squareNumber(7);
console.log(squareNumber(9)); //undefined -- 49
// console.log(calc);
// console.log(skipWord);
// calc("*", 4, 4);
// calc("+", 34, 4);
console.log(calc("-", 34, 4));
// calc("/", 34, 4);
// skipWord();
// skipWord();
// skipWord();
// skipWord();
