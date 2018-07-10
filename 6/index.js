const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);




// let anArray = [1, 2, 3, 4, 5];

// let valueArray = [new Date(), function () {}, [], {}, 1, ''];

// for (let i = 0; i < valueArray.length; ++i) {
//   let currentElem = valueArray[i];

//   console.log(currentElem);
// }

// Arrays dont have restrictions on the kind of values that you can store in them.

// When we put an array inside of an array.

let arrayToSplice = [1, 2, 3, 4, 5];

// Splice
// Splice can do everything that push, pop, shift, and unshift can do all in the same function. Splice returns back whatever it removes.
// Splice is a function that enables us to 'operate' on an array. We can remove things, we can add things, and theres no restrictions to what we can remove, and what we can add. Splice DOES MUTUTE. This means it is affecting the array it is being called on.
// All things we remove with splice we receive back in an array.
// (startIdx, deleteCount, ...insertableElements) => elemsThatWereRemoved

// let arrayToSplice = [1, 2, 3, 4, 5];
let returnedElem = arrayToSplice.splice(-3, 3, 'hi', 'bye', 'how are ya');

console.log(arrayToSplice);

// Shift -> We remove the first element of an array. -> The element removed is returned in an array.
// let returnedElem = arrayToSplice.splice(0, 1);

// Unshift -> We insert at the beginning of the array.
// let returnedElem = arrayToSplice.splice(0, 0, 0);

// Pop -> We remove an element at the end of an array.
// let returnedElem = arrayToSplice.splice(-1, 1);

// Push -> We insert an element at the end of an array.
// let returnedElem = arrayToSplice.splice(arrayToSplice.length, 0, 6);

// Its kind of trivial to reperform actions we already know how to do, but with splice we can mix and match...
// Remove the final three elements from the array, and insert a bunch of stuff...

// Is this function taking infinite arguments?
// Yes. Every argument after the second, is something that will be inserted.

// console.log('Returned Array: ', returnedElem);
// console.log('Original Array: ', arrayToSplice);

// Concat and Rest Operator
// Rest Operator = ... -> it infers that all the REST of the arguments will be placed in an array with the name you give it.
// Concat -> is functional in nature so it returns a new array and DOES NOT MUTATE the original array.

let mergeALotOfArrays = (...arrays) => {
  let concattedArray = [];

  for (let i = 0; i < arrays.length; ++i) {
    let currentArray = arrays[i];

    concattedArray = concattedArray.concat(currentArray);
  }

  return concattedArray;
}

// let mergedArrays = mergeALotOfArrays([1], ['a', 'b'], [{}], ['hi there bob']);

// console.log('mergedArray: ', mergedArrays);

//                     0              1
// let multiArray = [['hey there'], ['goodbye']];

// console.log(multiArray[1][0]);

// X/Y Axis
// Grid
// Grids are of course representational structures of a 2 dimensional object.

// Build a grid that represents a treasure map for a pirate

let buildAGrid = (width, height) => {
  let grid = [];
  let row = [];

  for (let i = 1; i <= width; ++i) {
    row.push(i);
  }

  for (let i = 0; i < height; ++i) {
    let copyOfArray = row.slice();

    grid.push(copyOfArray);
  }

  return grid;
}

let ourGrid = buildAGrid(5, 5);

ourGrid[2][2] = 'Treasure';

// console.log(ourGrid);

// How do we get the treasure?
// We need a way to accept the array as an argument, and respond with its x, y location.

let huntTheTreasure = (aGrid, searchTerm) => {
  for (let y = 0; y < aGrid.length; ++y) {
    let row = aGrid[y];

    for (let x = 0; x < row.length; ++x) {
      let cell = row[x];

      if (cell === searchTerm) {
        return [x, y];
      }
    }
  }

  return null;
}

// c(huntTheTreasure(ourGrid, 'Treasure'));