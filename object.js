const player1 = {
    name: "Degea",
    team: "Manchester",
    tag: 1,
    role: "goal keeper",
    colors: ["red", "black"]
}
const player2 = {
    name: "Pate",
    team: "Arsenal",
    tag: 7,
    role: "midfielder",
    colors: ["red", "white"]
}

function Player(name,team,tag,role,colors){
    this.name = name
    this.team = team
    this.tag = tag
    this.role = role
    this.colors = colors
    this.play= ()=>{
        console.log("Kicking a ballll!!!");
    }
    this.nameLength = ()=>{
        console.log(this.name.length);
    }
}

const player3 = new Player("Ericksen", "Manchesster", 5,"forward",["red","black"])
const player4 = new Player("Kane", "Totenham", 13,"striker",["white","black"])
player4.age = 28

console.log(player1.name);
console.log(player3.nameLength());
console.log(player4);

// array constructor
let numbers = new Array()
numbers[0]= 89
numbers[1]= 739
console.log(numbers);

console.log(numbers.push(200));
console.log(numbers.unshift(10));
console.log(numbers.toString());
console.log(numbers);

let result = player3.name.replace("Erick", "John")

console.log(result);
// reversing a string
console.log(result.split("").reverse().join(""));


 console.log(Math.PI.toFixed(3))
