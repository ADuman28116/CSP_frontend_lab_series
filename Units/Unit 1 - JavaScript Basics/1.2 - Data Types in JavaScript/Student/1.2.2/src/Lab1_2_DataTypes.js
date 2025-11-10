/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, literals, typeof, and basic conversions.
   =========================================================== */

// TODO 1: Declare one variable for each primitive type discussed in the PDF.
// string, number, boolean, null, undefined
let s; // = "Hello";      // string 
let n; // = 42;           // number
let b; // = true;         // boolean
let z; // = null;         // null
let u; // (leave undefined)


// TODO 2: Use typeof to log each variable's type.
// console.log(typeof s);
console.log(typeof s); // "string"
console.log(typeof n); // "number"
console.log(typeof b); // "boolean"
console.log(typeof z); // "object"  <-- this is a JavaScript quirk
console.log(typeof u); // "undefined"


// TODO 3: Show string concatenation vs numeric addition using "5" and 5.
let str = "5";
let num = 5;

// String concatenation
let concatResult = str + num;
console.log(concatResult); // "55"  → string

// Numeric addition
let addResult = Number(str) + num;
console.log(addResult);    // 10    → number


// TODO 4: Explicit conversions using Number(), String(), Boolean()
// Original values
let string = "123";
let number = 0;
let boolean = true;

// Convert to Number
let toNumber1 = Number(str);    // 123
let toNumber2 = Number(bool);   // 1
let toNumber3 = Number(null);  // NaN (not a valid number)

// Convert to String
let toString1 = String(num);    // "0"
let toString2 = String(bool);   // "true"
let toString3 = String(null);   // "null"

// Convert to Boolean
let toBoolean1 = Boolean(num);   // false (0 is falsy)
let toBoolean2 = Boolean(str);   // true (non-empty string is truthy)
let toBoolean3 = Boolean(null);  // false


// TODO 5: NaN and isNaN: demonstrate a case where conversion fails.
let invalidNumber = "hello";  // a string that can't be converted to a number

// Attempt conversion
let result = Number(invalidNumber);
console.log(result);          // NaN

// Check if the result is NaN
console.log(isNaN(result));   // true

// Another example: directly check a non-numeric value
console.log(isNaN("world"));  // true


// TODO 6: Template literals: print a line that mixes text + a variable value.
let name = "Alec";
let age = 20;

// Using template literals with backticks
console.log(`Hello, my name is $(name) and I am $(age) years old.`);


/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?

Today I used strings, numbers, booleans, null, and undefined to store different kinds of information.

   2. Where did you encounter type conversion (implicit or explicit)?

I saw type conversion when JavaScript changed a number to a string. This happened when I used Number() or Boolean() to change types on purpose.

   3. One misconception I corrected or a tip I learned:

I learned that typeof null shows "object". A tip I learned is to always use Number() or Boolean() when I need strict type conversion to avoid unexpected results.

   4. What would you try next time to debug faster?
   
Next time, I will use console.log() to check the type of my variables and see what is happening step by step.

   =========================================================== */
