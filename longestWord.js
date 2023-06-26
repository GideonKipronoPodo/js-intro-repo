let sentence = "Longest word in a string: Write a function that takes a string as an argument elephantisis and returns the longest word in the string. You can use string methods such as split(), and length to accomplish this task."
let sentence2 = "Palindrome checker: Write a function that takes a string as an argument and returns a boolean indicating whether the string is a palindrome (a word or phrase that reads the same forwards and backwards. You can use string methods such as split(), reverse(), and join() to accomplish this task"

function getLongestWord(str) {
    // split the string to create an array with each word as an element
    // loop through each word in the array, get the length of each word
    // put each length in an array of numbers , then get the index of the largest number
    // use the index to find the word
    let arrayofwords = str.split(" ")
    // console.log(arrayofwords);
    let arrayoflengths = []
    arrayofwords.forEach(word=>{
        if(word.endsWith("." || word.endsWith(","))){
            arrayoflengths.push(word.length-1)
        }else{
            arrayoflengths.push(word.length)
        }
    })
    // console.log(arrayoflengths);
    return arrayofwords[arrayoflengths.indexOf(Math.max(...arrayoflengths))]
}

console.log( getLongestWord(sentence2))