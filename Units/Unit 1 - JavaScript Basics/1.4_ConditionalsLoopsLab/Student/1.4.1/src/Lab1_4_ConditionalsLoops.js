/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts

let age = 15;
if (age <= 16) {
    console.log("Teen discount")
} else if (age >= 65) {
    console.log("Senior Discount")
} else {
    console.log("No discount")
}

let vPoints = 1200;
let cart = 245
let total;

if (vPoints >= 5000) {
    total = cart * .8
    discount = 20
} else if (vPoints >= 2000) {
    total = cart * .9
    discount = 10
} else if (vPoints >= 1000) {
    total = cart * .95
    discount = 5
} else {
    total = cart
}

console.log(`Your total is $${total} with a discount of ${discount}%`)

// TODO 2: Nested if with two numbers

let number1 = 10;
let number2 = 20;

if (typeof number1 == 'number' && typeof number2 == 'number') {
    if (number1 == number2) {
        console.log("Numbers are equal")
    } else if (number1 > number2) {
        console.log("Number1 is bigger")
    } else {
        console.log("Numer1 is smaller")
    }
} else {
    console.log("Number1 and Number2 are not of numebr data types")
}

// TODO 3: Switch statement for language greeting

let language = "French"

switch(language) {
    case "Spanish":
    console.log("Hola, mundo!")
    break;
    case "French":
        console.log("Bonjour tout le monde")
        break;
    default:
        console.log("Hello, world!")
}

let model = prompt("Enter model of car")

switch(model) {
    //Ford

    case "Ford Focus":
    case "F150":
    case "Mustang":
        console.log(`Your ${model} is a Ford`)
        break;

    //Tesla
    case "Model 5":
    case "Model 3":
    case "Model X":
    case "Model Y":
        console.log(`Your ${model} is a Tesla`)
        break;

        // Porshe
    case "911":
    case "Carrera":
    case "Tycan":
    case "918":
         console.log(`Your ${model} is a Porshe`)
         break;
       // Audi
    case "A4":
    case "R8":
    case "S4 cuatro":
    case "S5":
         console.log(`Your ${model} is an Audi`)
         break;
//     default:
         console.log("That is not a valid response");


}

// TODO 4: While loop (1 to 10)

let count = 1;
while(count <= 10) {
    console.log("Value: ", count)
    count++; 

}

let cont2 = 10;
while(count2 >= 1) {
    console.log("Value: ", count2)
    count2 --;
}

// TODO 5: Do..while loop (1 to 5)

let i = 1;
do {
    console.log("VALUE: ", i);
    i++
} while (i <= 5)


// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)

for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        console.log("TEN")
    } else if (i == 20) {
        console.log("TWENTY")
    } else {
        console.log(i)
    }
}

// TODO 7: Even/Odd loop (1 to 20)

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " EVEN")
    } else {
        console.log(i + " ODD")
    }
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
