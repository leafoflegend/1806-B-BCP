const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);




// const logAThing = (aThing) => console.log(aThing);

// const runAThing = (doAThing, arg) => {
//   doAThing(arg);
// };

// runAThing(logAThing, 5);

// If functions are objects, this is us passing a object into a function.

// We are now returning objects out of functions.

// const returnAThing = () => {
//   return [1, 2, 3];
// }

// console.log(returnAThing());

// Can we return functions from functions? And what are the implications of doing so?

// This is not closure.
// But, the implications of the ability to do what we see below are what enables closure.

// const makeAndReturnAFunction = () => {
//   const functionToReturn = () => {
//     console.log(5);
//   };

//   return functionToReturn;
// }

// const returnedFunction = makeAndReturnAFunction();
// returnedFunction();

// function someFunc () {
//   console.log('hi');
// }

// function returnFunc () {
//   return someFunc;
// }

// var returnedFunction = returnFunc();

// returnedFunction();

// const returnAFunc = () => () => 'value';

// const returnedFunc = returnAFunc();
// console.log(returnedFunc());

// What value have i provided by returning functions?
// None.

// Closure
// First, lets refresh ourselves on scope.

// let outerScopeVar = 'hi';

// const aFunc = () => {
//   console.log(outerScopeVar);
//   let innerScopeVar = 'hello again';

//   const anotherFunc = () => {
//     console.log(innerScopeVar);
//   }

//   anotherFunc();
// }

// aFunc();

// console.log(innerScopeVar);

// One way mirror outwards - we can always look at the scopes outside of our own, but we cant look inwards to deeper scopes. Functions create their own scope.

// Closure is less about returning functions, then it is the rules of scope and garbage collection.

// Make a counter.

// const counter = () => {
//   let count = 0;

//   ++count;
//   console.log('count is now ', count);
// }

const createCounter = () => {
  let count = 0;

  const counter = () => {
    ++count;
    console.log('count is now ', count);
  }

  return counter;
}

const counter = createCounter();

// counter();
// counter();
// counter();

// console.log(createCounter.count);

// Whats happening?
// Scope - we know that the inner function HAD access to count at some point due to scope. We can always look at outer scopes.
// References - 0x123124 - Pointer - count, has an actual address, and that when counter was looking to see what the value at that address was, it had to look at that specific place in memory.
// Garbage Collection - JavaScript will only erase something if there are no more references to it left in the script.
// -> Closures enable JavaScript to not erase data leftover after a function runs.
// Closures trap data and make it available to only one function for the rest of the program.

// What is the value of closure?
// In traditional OOP - theres this concept of 'private'. Private means what it sounds like it means - how do we make a variable private to something, but still allow code to access that data if it is permitted.
// There are no protected or private fields on objects in JS.

// Closure allows us to embed data into objects - AND DEFINE THE BEHAVIORS PEOPLE CAN COMMIT AGAINST THAT DATA.

// User Database
// Signup, login, logout

const generateDatabase = () => {
  const userDatabase = {};

  const signup = (username, password) => {
    if (userDatabase[username]) {
      console.log('Sorry, user already exists.');
    } else {
      userDatabase[username] = { 
        password: password,
        loggedIn: false, 
      };
      console.log(`${username} successfully created!`);
    }
  }

  const login = (username, password) => {
    if (userDatabase[username]) {
      if (userDatabase[username].password === password) {
        userDatabase[username].loggedIn = true;
        console.log('Successfully logged in!');
      } else {
        console.log('Incorrect password.');
      }
    } else {
      console.log(`${username} does not exist in the database.`);
    }
  }

  const logout = (username) => {
    if (userDatabase[username]) {
      userDatabase[username].loggedIn = false;
      console.log('Successfully logged out!');
    } else {
      console.log('User does not exist to logout');
    }
  }

  return {
    signup: signup,
    login: login,
    logout: logout,
  };
}

const ourUserDatabase = generateDatabase();

// ourUserDatabase.signup('alan', 'password');
// ourUserDatabase.signup('halim', 'chu');
// ourUserDatabase.signup('matt', '123');
// ourUserDatabase.signup('quinn', '1');

// ourUserDatabase.login('alan', 'password');

// Can I get the database object as a developer using ourUserDatabase?
// Can I ever see your password?

// Successfully privatized your credentials. Unless you use your username and your password, I cant ever see the database.
// We can only interact with the database in 3 predescribed ways implemented by me: You can signup, you can login, and you can logout. You cant delete users, you cant see other users passwords, nothing. Closure is a way for us to privatize data to where it is most useful, and define the behaviors that should took place against that data.

// Were trying to change it! #database = {};




// Some
// Some is a method on arrays that returns true or false. It returns true if any of the elements in the array pass the given test function.
// (elem, index, array) => boolean

const testArray = [1, 2, 3, 4, 5];

// const result = testArray.some((elem) => {
//   return elem > 5;
// })

// Every
// Every is a method on arrays that returns true or false. It returns true if ALL of the elements in the array pass the given test function.

// const result = testArray.every((elem) => {
//   return elem > 1;
// });

// Reduce

// Sum an Array
// Reduction
// Reduction is whenever we take a collection of values, and we convert it into a different value. Reduction because classically, we reduce multiple values into a single value.
const sumAnArray = (anArray) => {
  let sum = 0;

  for (let i = 0; i < anArray.length; ++i) {
    const currentElem = anArray[i];

    sum += currentElem;
  }

  return sum;
}

// Reduce
// Does reduction for us, it takes a callback function WITH A DIFFERENT SIGNATURE THEN NORMAL.
// callback: (reductionValue, nextValue, index, array) => reductionValue;
// Reduce: (callback, initialReductionValue);

const result = testArray.reduce((reducedValue, nextValue) => {
  return reducedValue + nextValue;
}, 0)

console.log(result);












