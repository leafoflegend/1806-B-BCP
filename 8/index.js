const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



// Primitives

// string
// boolean
// null
// undefined
// number
// Symbol

// Immutability
// Primitives are what we call immutable. Immutable means that we cannot modify their value.

// 2 = 5;

// let num = 5;

// num = 3;

// console.log(num);

// Complex Types
// Objects
// Arrays, functions, and objects

// let someObj = {};

// someObj.thing = 'another thing';

// console.log(someObj);

// Ive modified the actual value of the right side of the assignment.

// Assignment
// Ive never spoken to you about what that equals symbol does...

// let aVar = 'a value';

// Your computers harddrive (or RAM).

// What exactly is a variable?
// Every time we make a variable is equivelent to us asking our computer: "hey do you have space for some stuff?"
// Our computer makes that space, and gives it a name (in this case aVar) so we can think about it like an address.
// I find the best analogy for this is exactly that - addresses.

// What is an address?
// A location where you live
// Its a reference to the location where you live
// nobody has to live somewhere for it to be address

// Locations - and what it is that location does (or is there for) are two very seperate concepts.

// 200 wellington street
// Places - And the things they actually represent are two different concepts
// One is a location
// One is a purpose

// aVar as the location
// 'a value' as the purpose

// Left hand vs right hand assignment
// The left hand side of an assignment is seen as an ask for the computer to create a location
// The right hand side of an assignment is us assigning purpose to that location

// let aVar = 'a value';

// The reason this is important has to do with this concept of immutability

// What is 1?
// If I say 1, and you say 1, are they two different 1s?
// 1 is an absolute truth

// All primitives are absolute truth

// 2 = 2
// 'a' = 'a'

// Those are irrefutable

// Are those irrefutable truths?

// console.log({} === {});

// No.
// Because theyre mutable

// What do we think objects do for us?
// They store values - key: value pairs

// Left sides of things are just locations
// Objects just store things
// Can we, even within an address - address things within itself?

// The cupboard in the kitchen at 200 wellington

// We belive, we can define places, that store things (key: value pairs), that are places of their own

// Primitive vs Complex
// Primitives are irrefutable truths and what that means is that they can be represented the same exact way no matter where we write them.
// Complex variables, can refer to many different things, in many different places, based on where they are placed.

// this
// Whats it?
// Which cupboard, where?
// Its in the cupboard

// References
// References are the way a computer keeps track of that problem.
// how does a computer know what cupboard we are talking about? How does it know what is at any complex variables keys, when we reference a variable with another variable.


let aPrimitive = 5;
let aComplexObject = {
  key: 10,
};

// let ourFirstReference = aPrimitive;

// ourFirstReference = 10;

// console.log('ref: ', ourFirstReference);
// console.log('primitive: ', aPrimitive);

// When we do this with a primitive, the primitive does not change its value.

// let ourFirstReference = aComplexObject;
// ourFirstReference.key = null;

// console.log('ref: ', ourFirstReference);
// console.log('complex: ', aComplexObject);

// When we do this with an object, it does change its value.

// Pointers
// A concept from other programming languages of a value that represents a physical address on your computer.

// let aPointer = 0x123i1623;

// Primitives and Pointers

// let aVar = 'a value';

// aVar = 0x1235895;
// 0x1235895 = 'a value';

// aVar = 'new value';
// 0x1235895 = 'new value';

// 'a value' = 'new value';

// Complex Objects and Pointers

// let objPointer = {};

// // objPointer is the house
// objPointer = 0x1235895;
// // and the object is the cupboard
// 0x1235895 = 0x1235896 === {};

// objPointer.key = 'value';

// 0x1235895 => 0x1235896 => 0x1235897 => 'value'

// We are creating directions to data.
// Objects are just a way for us to store locations within locations.

// Is that all things in programming languages eventually break down to irrefutable truths. Objects have to lead to values that are irrefutable otherwise, an object is worthless.
// No matter how deep we make a reference chain, it must eventually yield a primitive or we have accomplished nothing.

let aPrim = 5;
// 0x1 = 5

let firstReference = aPrim;
// 0x2 = 5

firstReference = 10;
// 0x2 = 10

let someObject = {};
// someObject = 0x1
// 0x1 = {}
// 0x1 = 0x2

let secondReference = someObject;
// secondReference = 0x3
// 0x3 = 0x1
// 0x3 = 0x1 => 0x2
// 0x3 = 0x2

// secondReference.key = 'value';
// 0x3.key = 'value'
// 0x3 => 0x2.key = 'value'

someObject.key = 'value';



// console.log('objRef: ', secondReference);
// console.log('obj: ', someObject);

// console.log('primRef: ', firstReference);
// console.log('prim: ', aPrim);

// Pass by VALUE vs Pass by Reference

// Made a Grid

const makeAGrid = (width, height) => {
  let aRow = [];
  let aGrid = [];

  for (let i = 0; i < width; ++i) {
    aRow.push(i);
  }

  for (let i = 0; i < height; ++i) {
    aGrid.push(aRow);
  }

  return aGrid;
}

const myGrid = makeAGrid(5, 5);

// const myGrid
// 0x1
// 0x1 => aGrid
// 0x1 => 0x2
// 0x1 => 0x2[2]
// 0x1 => 0x2[the third row]
// 0x1 => 0x2 => row
// 0x1 => 0x2 => 0x3

// ...
// 0x1 => 0x2[1]
// 0x1 => 0x2[the second row]
// 0x1 => 0x2 => row
// 0x1 => 0x2 => 0x3

myGrid[2][2] = 'Treasure!';

// console.log(myGrid);

// What is slice doing?

const slice = (anArr) => {
  // I made a new reference named sliceArray -> I assigned it to an entirely new array, not a previous reference.
  const sliceArray = [];

  for (let i = 0; i < anArr.length; ++i) {
    // I went through the array we are trying to copy, and took ONLY PRIMITIVES OUT OF IT, AND PUT THEM IN THE NEW ARRAY I AM MAKING. Primitives do not have references.

    // If currentElem is not a primitive, we accidentally copied a reference.
    // Slice does not truly create a DEEP COPY. It creates what we call a SHALLOW COPY.
    // That means that it will only create a truly reference free array if we use it on an array with only primitives within it.
    const currentElem = anArr[i];

    sliceArray.push(currentElem);
  }

  // I have built an entirely new array, with a new reference, out of the primitives that were in the reference i was trying to copy. So I was able to copy the values within, without copying the reference itself.
  return sliceArray;
}

const someArray = [1, 2, [2], 4, 5];

const anotherArray = slice(someArray);

anotherArray[2][0] = 'Trouble!';

// console.log(someArray);
// console.log(anotherArray);

// If you need a truly 'deep' copy of a complex object -> JavaScript has no built in way to do it.
// Any time you need a deep copy, you will need to write that function yourself, or use a much smarter persons already pre-written version of it.

// With normal objects - we could have just used something like Object.keys. The important part is that we make sure that we are only taking primitives.

let origObject = {
  a: 1,
  b: 2,
}

const objSlice = (anObj) => {
  const sliceObj = {};

  for (let key in anObj) {
    const value = anObj[key];

    sliceObj[key] = value;
  }

  return sliceObj;
}

// Destructuring.
// Remove the curly braces around origObj, and place those keys and values into the container I ...'ed in.
// let notherObject = {
//   ...origObject,
// };

// notherObject.c = 5;

// console.log('orig: ', origObject);
// console.log('nother: ', notherObject);

// You can shallow copy objects in JS.

// There are two ways - one is ES5, one is like ES8.

// const copyObj = Object.assign({}, origObject);

// Deep copying isnt easy.