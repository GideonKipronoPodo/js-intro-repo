// Discus different naming conventions in web programming (css classes and javascript variables)
// Discus the variable naming rules in javascript


// write a function that logs the square of a number passed as a argument, using an if statement, check if the argument is a number and log the correct messsage is so.
// isNaN() -- boolean
function sqNumber(n){
    if(isNaN(n)){
        console.log("Passed value is not a number");
    }else{
        console.log("Square of "+ n +" is  "+ n*n);
    }
}
sqNumber(7)
sqNumber("kjfdjf")
sqNumber("89") // type coercion

// console.log(isNaN(7)); // false
// console.log(isNaN("seven")); // true

// create an object called logger that has a method called log that takes in a string then uses console.log() to print out the string

// Write a function called reverseString that takes a string as a parameter and returns the reversed version of that string.

// split() string method -- to make the string an array
// reverse() -- array method -- resverse
// join() arraymethod -- convert array back to string
