const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// What is an Object?

// Objects are unordered collections of key-value pairs.

// const anObject = {
//   'key': 'value',
// };

// console.log(anObject['key']);

// Keys are always strings, we dont need to put them in quotes because javascript will automatically COERCE any key into a string.

// const anArray = [0, 1, 2, 3, 4, 5];

// Oh you just wrote 0 as a number!
// console.log(anArray[0]);

// If we use a string it is still fine
// console.log(anArray['0']);

// Thats because bracket notation coerces our values into a string.

const anArray = {
  '0': 0,
  '1': 1,
  '2': 2,
};

const anObject = {
  key: 'value',
};

// console.log(anArray[1]);
// console.log(anObject.key);

// console.log(anArray.1);

// The reason we use bracket notation with arrays all the time in specific is because numbers are illegal characters to use for a variables name.

// var 1andsomething = 9;

// Bracket and Dot notation are generally interchangeable. They are just a way to access keys in an object. With arrays we use brackets always because we always refer to numbers as keys - but with dot notation we cannot do that. But, think about anArray.length - we use dot notation there.

// Dot or Bracket notation are the two ways to access the value at a key.

// Performance

// Lets say for example we have a name we need to find out if it exists in an object.

// Alan

const alanArray = [1, 2, 3, 4, 'a', 'b', 'Alan'];

const alanObj = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  a: 'a',
  b: 'b',
  Alan: 'Alan',
}

// for (let i = 0; i < alanArray.length; ++i) {
//   const currentElem = alanArray[i];

//   if (currentElem === 'Alan') {
//     console.log('Found Alan!');
//   } else {
//     console.log('Did not find Alan here!');
//   }
// }

// if (alanObj.Alan) {
//   console.log('Found Alan');
// } else {
//   console.log('Did not find Alan!');
// }

// Read times.
// Dictionary. If you know the name of the word you are looking for - you can always get a dictionary and find out exactly what it means.
// If I gave you a randomly sorted list of definitions as a long scroll of paper, how long would it take you to find the definition?

// Big O
// Big O refers to the amount of units of time that it will take to perform an operation. O represents time.
// O(n) -> For every unit of time (O) -> it will take that times N. Where n is the length of the array. We judge this based on WORST CASE SCENARIOS. So assuming the thing were looking for is at the last index.
// For an object (or specifically a dictionary) we call what I just did O(1) -> it will always take 1 unit of time. It either fails or succeeds immediately.

// Array.isArray -> it told us if the thing we were looking at is an array.

// console.log(typeof []);
// console.log(typeof null);

// Plain ol javascript object
// const isAPOJO = (maybePOJO) => {
//   return !!maybePOJO && typeof maybePOJO === 'object' && typeof maybePOJO.length !== 'number';
// }

// console.log(isAPOJO({}))

// Object Literals: Write out the key: value pairs of an object at defintion time.
// const aObject = {
//   halim: 'chu',
//   alan: 'thompson',
//   sabrina: 'goldgarb',
// };

// console.log(aObject);

// Object Assignment: We define an object - then later assign the key value pairs.
const aObj = {};

aObj.halim = 'chu';
aObj.lee = 'anonymous';
aObj.quinn = 'roberts';

// console.log(aObj);

const keyToGrab = 'halim';

// console.log(aObj[keyToGrab]);

const someArray = [1, 2, 3, 4, 5];

for (let i = 0; i < someArray.length; ++i) {
  // this is using dynamic javascript to access a key by a variables value.
  const currentElem = someArray[i];
}

const someObj = {
  a: 1,
  ourKey: 'hi',
}

// const ourKey = 'a';

// console.log(someObj[ourKey]);

someObj.a += 10;
someObj.a = 'not a number now';

// delete someObj.a;



// console.log(someObj);


// const aArray = [1, 2, 3, 4, 5];

// delete aArray.length;

// console.log(aArray.length);

// const inObject = { matt: 'clark' };

// console.log('matt' in inObject);
// console.log(inObject.hasOwnProperty('sabrina'));

// Is because in has special abilities when paired with the word for...

// For In Loop

const classObject = {
  sabrina: 'goldfarb',
  halim: 'chu',
  lee: 'anon',
  alan: 'thomson',
  quinn: 'roberts',
  matt: 'clark',
}

// If I dont know all the keys in an object - or I need to perform an operation on every thing in an object how do I go about it?

// Key does not have to be the name - it is just best practice.
// Kind of strange syntax to say let something in aThing
// for (let studentName in classObject) {
//   const studentLastName = classObject[studentName];

//   console.log(`Hi ${studentName} ${studentLastName}!`);
// }

// Object Methods

// Object.keys : Object.keys takes an object as an argument and returns an array of the objects keys.

const classNames = Object.keys(classObject);

// console.log(classNames);

// for (let i = 0; i < classNames.length; ++i) {
//   const currentName = classNames[i];

//   const currentLastName = classObject[currentName];

//   console.log(`${currentName} ${currentLastName}`);
// }

// Object.keys is preferrable for students who have gotten very good at thinking the array way, and using for loops.
// For in can accomplish all the same things - but can be strange syntax to some.

// Object.values -> takes an object and returns an array of the objects values, not its keys.

const classLastNames = Object.values(classObject);

// console.log(classLastNames);

// If you needed the keys - youve discarded them - you cant backtrack the values to figure out which key they came from. Its not that weve deleted or modifed the keys - its that we cant say classObject[classLastName] -> that wont get you anything.
// Object.values is very good at dealing with problems where the keys dont matter.

// Object.entries -> Object.entries returns an array of tuples (specifically ordered arrays) - in this case an array with the key at index 0 and the value at index 1. So I am talking about an array of arrays.

const classEntries = Object.entries(classObject);

// console.log(classEntries);

// Entries is awesome! If youre great at arrays. It can be a lot to handle for people who dont like deeply nested things.

const deeplyNestedThing = {
  a: [{ b: ['b', 1] }],
};

// console.log(deeplyNestedThing.a[0].b[0]);

// Dont name things 'thing' -> the best way to stay sane in a deep object is naming things well.
// Secondly, try to decompartamentalize some of this. If you can write a function you can reuse to do the same thing over and over - please do! Things are going to get deep.

// You want to avoid overlapping names as you dig deeper so that you dont accidentally cause some sort of scope conflict.
for (let key in deeplyNestedThing) {
  const value = deeplyNestedThing[key];

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; ++i) {
      let innerThing = value[i];

      for (let innerKey in innerThing) {
        const innerValue = innerThing[innerKey];

        if (Array.isArray(innerValue)) {
          for (let j = 0; j < innerValue.length; ++j) {
            const superInnerValue = innerValue[j];

            console.log(superInnerValue);
          }
        }
      }
    }
  }
}

