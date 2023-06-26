// sequence, condtional statements, loops/iterations

// if else if else

// 1 option
if(30>40){
    console.log("math is mathing");
}

// 2 option
let age = 90
if(age>18){
    console.log("allowed to drink wine");
}else{
    console.log("not allowed to drink wine");
}

// than two
let marks = 55
let grade = null
if(marks >= 80){
    grade = "A"
}else if(marks>=60){
    grade = "B"
}else if(marks>=50){
    grade = "C"
}else if(marks>=40){
    grade = "D"
}else{
    grade = "E"
}
console.log(grade);

// alternative is a switch
let dayNumber = new Date().getDay() // number
console.log(dayNumber);
switch (dayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);

  // while loop

  let max = 89

let count = 0

while(count<max){
    console.log(count);
    ++count
}
// 88
// for loop
for(count; count<167; count=count+5){
    console.log(count);
}
//166