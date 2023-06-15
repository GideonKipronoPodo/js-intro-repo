// arithmetic operators - + * / % ++ --
// Comparison operators  == === != > < >= <=
// logical operators &&(AND) , ||(OR), !(NOT)

let num = 3000;
console.log(++num); //pre - increment;
console.log(num++); //post - increment;
console.log(num);
console.log(100 == "100"); // loose comparison(does no check data type) -- true
console.log(100 === "100"); //strict comparison operator --false

// console.log(6 < 7 && 9 < 99);
console.log(6 > 7 || 9 > 99);

// Ternary operator

num < 79
  ? console.log("number is less than seventy")
  : console.log("oop!!!! bad math");
