const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Coercion
// When we have to bring things of different types together - what happens?
// Its kind of ludicrous to make a ruleset that we could all understand about this.
var theAnswer = 1 + '1' - '1';

// Coercion is not so easy to reason with.

// console.log(theAnswer); -> 10

if (/* how do i always get true or false out of this if expression? */ true) {
  // We coerce all values to a boolean - e.g. true or false
}

// In Javascript there are:

// PRIMITIVES
// strings
// numbers
// boolean

// undefined
// null
// Symbol -> Outside the scope of this course

// COMPLEX
// objects -> arrays, functions, objects | theyre all the same thing
// console.log(typeof {});

// --------------

// Strings
// Strings are the only primitive type that is actually a collection. A string is a collection of characters. Characters are never exactly what you think they are - they are actually just a sequence of numbers.

// charCodeAt

let someString = 'Halim';

// console.log(someString.charCodeAt(0));

// Strings are actually just sequences of numbers strung together - thus, string.
// Strings come with a lot of built in functionality, but two things are most important to state:

// They have bracket notation access, so we can access individual characters by referring to their index.

// console.log(someString[0]);
// Strings have a lot of handy dandy methods. These are built in functions that help us do things.

// indexOf
// console.log(someString.indexOf('0'));

// Numbers
// A number is a number.
// JavaScript is not good at large mathematical operations.
// Any time JavaScript can choose between convenience or performance, JavaScript picks convenience.

// In other languages:
// We actually have to explain in advance what KIND of number we want to store.

// double myNum = 10927309123.182739817293;
// int myInt = 5.123123; // -> would break and throw an error
// int myInt = 5; // all good!

// The reason for this is that all the things we type on a computer need to go in memory somewhere. So really quick lesson on binary
// 0 - 0
// 1 - 1
// 2 - 00
// 3 - 01
// 4 - 10
// 5 - 11
// 6 - 000

// Each 0 and 1 is an actual place in the actual universe that we live in. E.g. its taking up SPACE. 
// The larger a number, the more space it takes up (no not all numbers are created equal)
// let someCrazyNum = 1902739017239816236981239123.09172309710238019283

// So... when JavaScript was faced with the choice early in its making to enable us to have really big numbers but actually have to know in advance what kind of number we wanted they said: 'nah lets not do that'.

// Javascript has a max number, and its actually not that high.

// console.log(Number.MAX_SAFE_INTEGER);

// This gives us some benefits though: We can write all numbers under that (and above its negative counterpart) however we want, including decimal places.

// Boolean
// True or False
// Those are the only options.

// Undefined
undefined

// Undefined is meant to mean that you declared a space on your computer to be used, you named that space, but then never put anything in that space.
// Its like buying a house and never moving in.

let aThing;

// console.log(aThing);

// Undefined is the default value for all variables in JavaScript.

// Null
// NULL IS NOT UNDEFINED

// null is an intentional value that we can use to represent a defined place that we are saving for later.

let choice = null;

if (true) {
  choice = 'cool';
} else {
  choice = 'not cool';
}

// Undefined vs Null
// You should never purposefully assign undefined to anything - we want to reserve undefined for when we are debugging code. If we get an undefined we know that we didnt define something. If we get a null we know that we never assigned the later value to it. null is a conscious purposeful act in which we make sure that we create variables only when they are meant to have value (otherwise, why did you create that variable?). Undefined is something we should only see if we made a mistake.

// Symbols
// Symbols are special types we created to ensure uniqueness.

let nameOne = Symbol('name');

let someObject = {
  [nameOne]: 'im an object',
};

let nameTwo = Symbol('name');

// console.log(nameOne === nameTwo);

someObject[nameTwo] = 'not an object';

// console.log(someObject);

// Objects
// Everything I havent spoken about yet, is an object. Everything.
// Objects are the thing we are going to be spending the next two weeks talking about.

// We asked for implicit coercion - we said "Hey JavaScript, do your worst." And it did.
// Instead we should be doing our best to be explicit about coercion.
// Casting -> Casting a type
let numResult = 1 + parseInt('1') - parseInt('1');
let stringResult = (1).toString() + '1';
// console.log(stringResult);

// We always want to explictly coerce our values. If we dont know what kind of value we are going to get we can make use of typeof and conditionals to respond to different kinds of values.

function concatAString (valA, valB) {
  let refinedValA = null;
  let refinedValB = null;

  if (typeof valA === 'number') refinedValA = valA.toString();
  else refinedValA = valA;

  if (typeof valB === 'number') refinedValB = valB.toString();
  else refinedValB = valB;

  return refinedValA + refinedValB;
}

// console.log(concatAString(1, 3));

// The ultimate goal of any program is to consistently perform the operation.
// As long as there is uncertainity due to types not working together the same way all the time, we havent written a perfect program.
// We want to type check and coerce values into the types we need them to be.

// Always use triple equality

// Triple Equality not only compares values, but also types. Things arent equal unless they are the same type.
// console.log(1 === '1');

// console.log(Boolean(0))

// While there are quadrillions of true values in Javascript, there are only 6 falsy values in all of javascript. Falsy, means something that is coerced to false when I cast it as a boolean.

// The 6 falsy values in JS:
// Biggest Rule so Far: Learn these 6 values as falsy ones, simply by knowing these, we know every truthy value.
// null
// undefined
// 0
// ''
// false
// NaN

// if (null) {
//   console.log('Truthy value');
// } else {
//   console.log('Falsy value');
// }

// ! - The Bang Operator
// It inverts the truthiness of a value.
// Old Trick: We can use two Bangs in a row to uncover the secret boolean value of any value.

// console.log(!!{});

