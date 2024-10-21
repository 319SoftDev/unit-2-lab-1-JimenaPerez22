
// Mild Challenges 

/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;



// 1. If divided evenly, how much would each sibling get for the week?
weeklyAllowance = weeklyAllowance / 3;

console.log(weeklyAllowance);
    //Answer:43

// 2. How many games can Jordan buy with their cut?
console.log(Math.floor(weeklyAllowance / 15.99));
    //Answer: 2

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game += 1.00;
shoes = shoes / 2;

console.log(game);    //Answer: 16.99
console.log(shoes);   //Answer: 44.89

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let together = ((weeklyAllowance + weeklyAllowance) * 4) / shoes;

console.log(Math.floor(together));  //7

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own ?
let alone = (weeklyAllowance / game);

let together2 = ((weeklyAllowance *3) / game);

console.log( Math.floor (together2 - alone));  //5



// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."

console.log("The three siblings are " + sibling1 + ", " + sibling2 + ", and " + sibling3 + ".")

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.

console.log("Ricardo".length);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
 
console.log(sibling3.toUpperCase());

// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase());

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.

console.log(sibling3.replaceAll("a" , "n"));
// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log(sibling3.substring(16 , 26 ))

// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum2 = () =>
    function getRandomNum() {
        return Math.floor(Math.random() * 100);
    }


const greeting2 = (name) =>
    function greeting(name) {
        return `Hello ${name}, I'm glad you can make it!`;
    }

console.log("chris")


const perfectRoot2 = (x) =>
    function perfectRoot(x) {
        let root = Math.sqrt(x);
        if (Math.floor(root) === root) {
            return root;
        } else {
            return "No perfect root"
        }
    }

console.log(perfectRoot2(60))
// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
}
// uncomment the line below, to call the function, and add one more function call
// console.log( addNums(4, 6) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if(X) { 
        return "Welcome Queen!";
    } else {
        return `Sorry {name}, you're not Beyonce`;
    }
}
// Test "Beyonce" and other names to ensure it works



/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if(X ){

    } else {
        return x;
    }
}
//Write your own function calls


// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => {

}



// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {

}

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {

}


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
/// The larger side should be the hypotenuse  



// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
