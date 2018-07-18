const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);




const sayHello = () => {
  console.log('Hello!');
}

const sayWhatsup = () => {
  console.log('Whats Up?');
}

const reply = () => {
  console.log('Im good.');
}

const goodbye = () => {
  console.log('Goodbye!');
}

// sayHello();
// sayWhatsup();
// reply();
// goodbye();

const greeting = () => {
  sayHello(); // 3
  sayWhatsup(); // 3
}

const replies = () => {
  reply();
}

const goodbyes = () => {
  goodbye();
  goodbye();
}

const orderConversation = () => {
  greeting(); // -> this has to finish
  replies(); // -> before this, and this has to finish
  goodbyes(); // before this
}

// orderConversation();
// orderConversation();
// orderConversation();

// When we call functions - we expect everything to wait until the current function is done running, before continuing.

// In JavaSript we have whats called a single thread. You know how when you buy a computer it says like '4 core' or '8 core' or whatever cores you have? How many threads are available on your computer. Modern computer systems (e.g. windows/mac) can do some crazy magic to make a single core do more then one thread but lets forgo that knowledge for a second.

// Is that a single thread is only capable of doing ONE THING AT A TIME.
// When we ask javascript to run a function, that has functions inside of it, how does it know to go back to the original function?

// const orderConversation = () => {
//   greeting(); // -> this has to finish
//   // Go into greeting do a bunch of stuff, including call other functions, but then, it has to come back here.
//   // It then needs to call replies.
//   replies(); // -> before this, and this has to finish
//   // It does a bunch of stuff inside of reply, and then comes back here to goodbye.
//   goodbyes(); // before this
// }

// Call Stack
// Stacks/Queues
// Queues are what we call a FIFO structure. First in First out. If you are the first in line for tickets at a show, you are the first to purchase a ticket.
// Stacks are what we call a FILO structure. That means first in, last out.
// Pancake Stack
/*
  Cook a pancake on a skillet.
  When its done, we transfer it to a plate.
  Then we cook another pancake.
  Then, WE TRANSFER THAT PANCAKE ONTO THE SAME PLATE ONTOP OF THE LAST PANCAKE.
  rinse and repeat.
  We eventually have 5 pancakes on a plate. Which is the first pancake eaten?
  The last cooked pancake, is the first one eaten.
*/

// Call Stack
// Call - Invoke
// Invoke is when we put () next to a function - it is us asking the computer to run that function.
// Stack - FILO Structure
// When the first thing in a line, is that last thing out of it.

// The first function we run, is the last function to complete.

const hello = () => {
  console.log('hello');
  // is the first function to finish.
}

const sayGreeting = () => {
  hello(); // 3
  // Were waiting on say hello to finish here
  console.log('nice seeing you!');
}

const sayItAll = () => {
  sayGreeting(); // 2
  // were waiting on sayGreeting to finish here
  console.log('Goodbye!');
}

// sayItAll(); // 1
// this happens after everything has finished.

// Our First Recursive Function
// Starting at that num, log until 0.

// const recursiveCountdown = (startingNum) => {
//   console.log(startingNum);
//   recursiveCountdown(startingNum - 1);
// }

// This didnt work because it went on forever.

// For Loops are made up of 3 specific things:
// Initialization
// Condition
// Update

    // init     ; cond ; update
// for (let i = num; i > 0; --i) {
//   console.log(i);
// }

// Recursion
// Initialization - Recursive Case
// Condition - Base Case
// Update - Calling a Function

// Initialization is always the most obvious
// Condition tend to be one of two things: a limit as a number, or the length/size of a collection
// Updates need to get us closer to the condition each time they occur

//                          init
const recursiveCountdown = (startingNum) => {
  // Our condition is a set number
  if (startingNum < 0) return;
  console.log(startingNum);
  // We always move one down numerically - we have to hit 0 at some point.
  recursiveCountdown(startingNum - 1);
}

// init = 5
// recursiveCountdown(5);


// Factorial

const factorial = (aNum) => {
  if (aNum === 1) return 1; 

  return aNum * factorial(aNum - 1);
}

// console.log(factorial(5));

// 5 * 4 * 3 * 2 * 1 === 120

// sumArray

const testArray = [1, 2, 3, 4, 5];

const recursiveSumArray = (anArr) => {
  if (anArr.length === 1) return anArr[0];

  const everyElementExceptTheFirst = anArr.slice(1);

  return anArr[0] + recursiveSumArray(everyElementExceptTheFirst);
}

console.log(recursiveSumArray(testArray));
