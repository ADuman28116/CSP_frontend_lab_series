/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
console.log("Value: " + price + " TypeOf: " + typeof price);

let price = 12.99;
console.log("Value: " + price + " TypeOf: " + typeof price);


// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let result = "Sandra" / 2;
console.log("Result: " / 2 " TypeOf: " / typeof result);

// TODO 2: Print basic math ops: + - * /
console.log("6 + 7", 6 + 7)
console.log("6 - 7", 6  7)
console.log("6 * 7", 6 * 7)
console.log("6 / 7", 6 / 7)


// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log("6 ** 7", 6 ** 7)
console.log("7 % 6", 7 % 6)

// TODO 3: Assignment operators with score variable
let score = 10
console.log(score)


// TODO 4: Expressions with operator precedence
let operator = ((7 + 5) / 3) - 8; 
console.log(operator);

((7 + 5) / 3) - 8
12/3 - 8
4 - 8
-4

// TODO 5: Strings (single, double, backticks)
console.log("Matthew");
console.log('Matthew');
console.log(`Matthew`);

// TODO 6: String properties and methods
// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples



let greeting = "Hello World!";
console.log(greeting.length); // Output: 12
console.log(greeting.charAt(0)); // Output: H
console.log(greeting.charAt(5)); // Output: ' ' (space)
console.log(greeting[3]); // Output: l

let text = "This is a sad story.";
console.log(text.indexOf("sad")); // Output: 10

let word = "ha";
console.log(word.repeat(3)); // Output: hahaha

let sentence = "JavaScript is fun!";
console.log(sentence.substring(0, 10)); // Output: JavaScript
console.log(sentence.substring(11)); // Output: is fun!
console.log(sentence.substring(5, 0)); // Output: JavaS (arguments are swapped)

sentence = "JavaScript is fun!";
console.log(sentence.substr(0, 10)); // Output: JavaScript
console.log(sentence.substr(11, 2)); // Output: is

sentence = "JavaScript is fun!";
console.log(sentence.slice(0, 10)); // Output: JavaScript
console.log(sentence.slice(-4)); // Output: fun!
console.log(sentence.slice(0, -5)); // Output: JavaScript is

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example
