const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



/*
- what's an array? 
- typeof [] 
- Array.isArray 
- bracket access, bracket assignment

- .length property 
- basic methods
*/

// Whats an array?

// An ordered collection of values.
// Values are anything that a language can reference. so objects, numbers, strings, symbols, dates, doesnt matter. Anything the language can refer to.
// 'Diverse' - they are diverse. They can have any type within them, and mixtures of those types.

// Ok, so we know WHAT an array is... but why do we need it?

// Lets pretend our task is to write a program that tracks who is coming to a party.

let partyGuests = '';

function partyTracker (name, coming) {
  if (partyGuests.indexOf(name) !== -1) {
    let newRegexp = new RegExp('/' + name + '=(true|false)+/g');

    let newPartyGuests = partyGuests.replace(newRegexp, `${name}=${coming}`);

    partyGuests = newPartyGuests;
  } else {
    partyGuests = partyGuests.concat(`${name}=${coming},`);
  }
}

partyTracker('sabrina', 'true');
partyTracker('lee', 'true');
partyTracker('alan', 'false');
partyTracker('sabrina', 'false');

// console.log(partyGuests);

// I just tried to do things you already know:
// I tried to push
// I tried to replace (in arrays we say splice)

// Its a really common problem to need to make lists, and deal with them in a sane way.

// Arrays: They are meant to solve a common problem - how do I deal with collections in a sane and reasonable way. The key things here are that nowhere have I mentioned performance - performance is something we get to with POJOs (Plain Ol Javascript Object). Are convenience.

// What exactly are arrays?

// Arrays are zero indexed collections of values that PROMISE us a certain contract. They PROMISE that given additional information, that information will be placed AFTER all present information. Using certain methods, we can alter that promise to being BEFORE, or even, in the MIDDLE. All of this is only possible because of a simple truth: arrays are ordered.

// What does an array look like "under the hood"?

let ourArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  push: () => { console.log('thanks for pushing!') },
}

// The only reason for loops work is because we are promised that length is the size of the collection, and that each key in an array starts at 0 and ends before the length. We can simulate that even using a primitive object.
// for (let i = 0; i < ourArray.length; ++i) {
//   let currentElement = ourArray[i];

//   console.log(currentElement);
// }

// bracket access, bracket assignment

// Have you ever pondered on bracket access?
// let currentElement = anArray[i];

// This isnt special to arrays, and strings. Bracket access is special to objects. Some things inherit this ability. Bracket access can be simply summed up as:

// 'If you know the string that is on the left side, i will give you the right side.'

// If we have that key - so in arrays - the index - we can do whatever we want.

let anotherArray = [1, 2, 3];

// anotherArray['bob the cowboy'] = 'hi there space cowboy';

// console.log(anotherArray);

// Arrays expect your best behavior. There are standards and practices to arrays. They are not going to prevent you from misusing them, but they seem to suggest the best ways to use them intuitively.

// anotherArray[100] = true;

// console.log(anotherArray);

// We can see that the array is trying to outthink us... It is filling in empty slots with stuff so that the array doesnt break.

// console.log(anotherArray.length);

// Is it is saying - if I am in fact 100 indexes - because the programmer as god and they told me so, then i cant question it and my length must be 101.

// - typeof [] 
// - Array.isArray 

// Arrays are a lie.
// A very complicated object. But... they are just an object as my custom array from earlier showed us.

// console.log(typeof []);

// You need to figure out whether youre looking at an array or not an array.

// const isArray = (maybeArray) => {
//   return typeof maybeArray === 'object' && typeof maybeArray.length === 'number';
// }

// console.log(isArray({}));
// console.log(isArray([]));

// c(Array.isArray({}));

// - basic methods

// Push
// .push adds an element to the end of an array and updates the length

let pushArray = [1, 2];

pushArray.push(3);

// c(pushArray);

// Push will just add an element.
// It is modifying the original array, not returning a new one.

// Pop
// It removes the last element from an array and returns it.

let poppedElement = pushArray.pop();

// c(poppedElement);
// c(pushArray);
// c(pushArray.length);

// We removed the last element, and we modified the original array. Its length is also updated.

// Shift
// Shift removes the first element in the array.

let shiftedElement = pushArray.shift();

// c(shiftedElement);
// c(pushArray);
// c(pushArray.length);

// Shifts inverse is Unshift

// Unshift
// .unshift adds an element to the beginning of an array.

pushArray.unshift(10);

// c(pushArray);
// c(pushArray.length);

// Unshift added to the beginning and updated the length.

// indexOf
// .indexOf is a method that takes a searchTerm as an argument. If that searchTerm is found it returns the index at which the first element found with it is found. If not, it returns -1.
// for those wondering about the -1 -> in code it is common practice to expect one TYPE of return value. Since we cant use 0, as it is an actual index of the array, the most practical number to use (since we want to return a number) is -1, which cant possibly exist.

let indexOfArray = [1, 'hi', false, true, 'hi'];

// c(indexOfArray.indexOf('hi'));

// indexOf is an extrodinarily powerful tool early in a programming career - it does a lot of searches heavy lifting for you.

// Slice
// .slice is a very important method that makes what we call 'a shallow copy' of an array. 'Shallowness' will be something we discuss on Monday.

let slicedArray = [1, 2, 3];
// let copyOfSlicedArray = slicedArray.slice();

// console.log(slicedArray);
// console.log(copyOfSlicedArray);

// console.log(slicedArray === copyOfSlicedArray);

// Outside of its abilities to create new references (wink wink future stuff)

// It is very useful for another task, which is the ability to take portions of an array.

// let partialArray = slicedArray.slice(0, -1);

// console.log(partialArray);

// Includes
// includes is essentially indexOf, but it returns true or false

let includesArray = [1, 2, 3];

c(includesArray.includes(4));

// Reverse
// reverse does... a reversal of the array.
// It does mutate the array, e.g. does not make a new array, but changes the one you call it on.

includesArray.reverse();
c(includesArray);