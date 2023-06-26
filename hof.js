// take other func as arguments and may also return a function

function funcOne() {
  console.log("Function one here");
  return function functionTwo() {
    console.log("i am the returned fnction");
    return null;
  };
}
let result = funcOne();
console.log(result());
