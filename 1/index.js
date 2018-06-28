const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);







// Im going to write some really awful code and were going to talk about it

// logAnArray -> Given an array log every element

// This function works (that should alarm you)
// Class Thoughts:
// doesnt look organized - I agree
// redundencies - could have done more with less - I agree
// all on one line - Definitely Agree

// function  logAnArray  (a) {var log=console.log; for(var i= 0; i <a.length; i += 1) { log(a[i]) }}

// Eliots Thoughts
// Uneven spacing. Why is logAnArray multiple spaces from the function word?
// Multiple spaces after logAnArray? What is going on
// No new line after a { - thats a no no
// = symbols (and all operands) should have spaces before and after them
// After any semicolon or expression - new line so after console.log
// BUT! We dont need to reassign console.log to log - thats just clutter.
// For has an extra space before it.
// var i is missing a space after =
// i <a.length is missing a space after <
// I too dont like += in my for loops I like the pre-increment unary operator
// We need a new line after the fors curly brace: {
// Now an extra space before log (which should now be console.log)
// Then, we cant pick and choose whether we use semi-colons: I dont care if you dont use them, or if you choose to use them - but you BETTER BE CONSISTENT ABOUT YOUR CHOICE. I previously used one, so Ill stick with it.
// End of an expression, new line.
// Extra space
// New line
function logAnArray (a) {
  for(var i = 0; i < a.length; ++i) {
    console.log(a[i]);
  }
}

// logAnArray([1, 2, 3, 4, 5]);

// Indentation
// How we indent lines, and when we make a new line.
// Whenever we open a { (in other languages it might be another symbol) - we start a new line, and we indent that line one unit of indentation.
// Whenever we close a } - we start a new line and we remove a unit of indentation.
// I am being very weird and vague and saying 'one unit of indentation'
// Spaces vs Tabs - This is one of the oldest and most passionate fights in programming history dating back 60 years.

// People have never agreed what we should use to space our indentations. But to understand the problem, we must dig deeper to find the truth.

// TABS
// Most people think that tabs are just a bunch of spaces.
// Tabs are environment specific. If youre in Microsoft Word a Tab might look like 5 spaces. If youre in Visual Studio Code (like I am right now) - it might look like 2 spaces (thats what it looks like), and if youre in a terminal (the thing below this) it might look like 8 spaces (wtf?).
// Tabs, are configurable. Tabs can look however you want them to look in your software. You can set it to 2 spaces, or 8 spaces. Or if youre crazy and want to die, 3 spaces.
// Pro: If I write my code in tabs, and send me code to someone else, It might look like 2 spaces on my computer, and 8 on his because hes like 8 spaces.
// Con: I cant have my code look exactly the same on another computer.

// SPACES
// Spaces dont have a whole backstory. A space taks up the maximum width of the current font. Thats it.
// A space is always a space.
// Pro: Your code looks the same everywhere.
// Con: Somebody else doesnt like the way your code looks.

// Am I crazy? Whats the big deal here? We all are bored and overpaid and stare at code too long. You just have to pick one and stick with it. There are three cardinal sins with spaces and tabs:
// 1. Mixing them. Dont do that. Please.
// 2. Odd numbered indents. Dont do that either.
// 3. Using different sized indents at different places.

// if (true) {
//   console.log('\tIts true');
//   if (true) {
//     console.log('hi there')
//   }
// }

// What do you use?
// Spaces make all the money.

// Variable Naming
// We did appropriately name the function, but there is something in this function we did not name well.
// a - What the heck is a?
// Anytime we create some new type of data - we should probably store it and name it.
// Lets compare two things real quick:
// While structure and formatting help us read it,
// Variable Naming helps us understand it.
// function logAnotherArray (anArray) {
//   for(var i = 0; i < anArray.length; ++i) {
//     var currentElement = anArray[i];

//     console.log(currentElement);
//   }
// }

// function  logAnArray  (a) {var log=console.log; for(var i= 0; i <a.length; i += 1) { log(a[i]) }}

// Lets Extremize that

// A perfectly linted function isnt worth a whole lot unless you name everything sensibly.
// function s (a, q, p) {
//   var y = new Date(a);

//   console.log(`${q}'s birthday is ${y} and shes my ${p}`);
// }

// s('07-25-2018', 'Brita', 'Stager');

// function saySomeonesBirthday (dateAsString, name, title) {
//   var dateObject = new Date(dateAsString);

//   console.log(`${name}'s birthday is ${dateObject} and shes my ${title}`);
// }

// saySomeonesBirthday('07-25-2018', 'Brita', 'Stager');


