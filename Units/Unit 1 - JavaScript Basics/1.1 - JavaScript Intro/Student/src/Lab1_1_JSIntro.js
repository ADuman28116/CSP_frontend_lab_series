/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Alec");


// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak"; 
 favoriteFood = "Pizza"; 

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Anna";
console.log("Value: " + mystery + " TypeOf: " + typeof mystery);

mystery = 1;
console.log("Value: " + mystery + " TypeOf: " + typeof mystery);

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School"
console.log("I attend: " + schoolName); 



// TODO 5: Create three valid camelCase variables and print them
let sixSeven;
let skyColor;
let accountBalance;



// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
let age = 21;
console.log("I am " + age + "years old"); // Concatenation
console.log('I am  $(age) years old');  
/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   

   In this lab, I learned the concept of console.log and the concept of "let".


   3. What challenges did you encounter, and how did you solve them?


   One challenge I encountered was getting my conditionals to work correctly, sometimes the logic didn’t produce the expected results. To solve this, I used print statements to trace the flow of the program and check the values of variables at different points.


   4. Where else could this programming concept be useful?


   This programming concept can be useful in other situations where a program needs to make decisions or react to different inputs. For example, conditionals can be used in games to determine what happens when a player wins or loses.


   =========================================================== */
