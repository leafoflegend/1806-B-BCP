const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);








// Problem Statement

// We should not write code that does not solve a problem that is not already solved.
// The best programmers are often the laziest programmers.
// You should not redo work someone else has done.
// If someone has solved something, there is no pride in trying to resolve it. Just 'borrow' their work and build on its shoulders.

// WARNING: Psuedo Code
// This is a primitive for loop
// var num = Math.random() * 50;

// if (num === 3) {
//   doAThing()
// } else {
//   goto(30);
// }

// console.log('done');

// How do I repeat code?

// FizzBuzz
// If the number is divisble by 3 log Fizz, if its divisible by 5 log Buzz if its divisible by both log FizzBuzz otherwise log the number

// var num = 10;

// if (num % 5 === 0 && num % 3 === 0) {
//   console.log('FizzBuzz');
//   num -= 1;
//   goto(47);
// }

// if (num % 5 === 0) {
//   console.log('Buzz');
//   num -= 1;
//   goto(47);
// }

// if (num % 3 === 0) {
//   console.log('Fizz');
//   num -= 1;
//   goto(47);
// }

// console.log(num);
// num -= 1;

// if (num > 0) goto(47);

// When youre writing the software that powers spaceships and that powers calculators, and banking computers - you might have millions of lines of code all having goto's that point to arbitrary lines in the codebase.
// Goto does not scale.

// Problem Statement: How do we organize code that needs to be repeated?

// while loop

// Iterative Structures
// Any construct that can go a certain number of times and then end.
// They are always comprised of the same 3 things:
// Start Point: Initialization
// End Point: Condition
// Way to get from start to end: Update
// Initialization, Condtion, Update
// This structure will always have to follow these same three principles - whether it be a for loop, a while loop, something more exciting, or something more terrifying like recursion.

// Initialized: We made a starting place: num = 0
// Initialized outside of the while loop
// let num = 0;

// // Conditioned: We set an ending place: num < 10
// // Condtion is inside the while loops arguments
// while (num < 10) {
//   console.log(num);
//   // Updated: We increased num by 1: num += 1
//   // Updated in the body
//   num += 1;
// }

// We always need all 3. Any other way we do this, will fail.

// While loops dont actually build the three parts of iteration into them.
// Its really dangerous to trust people to make smart decisions.
// When we dont tell you how to structure your code you are bound to make mistakes.

// The For Loop

// We had to put all three arguments inside the for loop
//   init     ; cond  ; update
// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

let aString = 'hi im eliot';
// Every location in a string is defined by its 'index' - an index is the place from left to right in a string OR an array that something is located. Just to throw you off and mess with your head, THE FIRST PLACE IS 0. We always start array and string indexes at 0.

// for (let i = 0; i < aString.length; ++i) {
//   let character = aString[i];

//   console.log(character);
// }

// The ability to go from the beginning to the end of ANY COLLECTION OF DATA IS GENERALLY THE BIGGEST USE OF A LOOP.

// continue and break

// Continue: a magical word that you can say inside a for loop to FORCE it to move on to the next loop immediately.

// Log every odd number between 0 and 10.

// What is stupid about this?
// What could we have done differently?
// Its enabling us to avoid thinking through this problem.
// Generally the use of continue is a sign that you have faulty logic in your condition or in the need for the for loop in the first place.
// for (let i = 1; i < 10; i += 2) {
//   console.log(i);
// }

// Break
// Break is another magical word that immediately ends a for loop.

// Given the number 10 end the loop at 5.

// Whats stupid about this?
// What would you have done differently?
// Why did we not just change the end condition?
function loopToNumber (aNum) {
  for (let i = 0; i < 6; ++i) {
    console.log(i);

    if (i >= 5) break;
  }
}

// loopToNumber(10);

// Anti-Pattern
// Loops were designed to do something A SET AMOUNT OF TIMES. Every time we use continue or break - WE ARE NOT GOING THAT SET AMOUNT OF TIMES. It is an anti pattern because it destroys the very concepts that make for loops useful.

// Console.log -> every programmers first debugging tool
// You can always use it better!

// for (let i = 0; i < 10; ++i) {
//   console.log('X: ', i);
//   for (let j = 0; j < 10; ++j) {
//     console.log('-: ', j);
//   }
// }
