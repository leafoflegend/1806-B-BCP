const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);





let crazyArray = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]];

// const moveThroughCrazyArray = (crayArray) => {
//   for (let i = 0; i < crayArray.length; ++i) {
//     const currentElem = crayArray[i];

//     if (Array.isArray(currentElem)) {
//       for (let i = 0; i < crayArray.length; ++i) {
//         const currentElem = crayArray[i];
    
//         if (Array.isArray(currentElem)) {
//           for (let i = 0; i < crayArray.length; ++i) {
//             const currentElem = crayArray[i];
        
//             if (Array.isArray(currentElem)) {
//               for (let i = 0; i < crayArray.length; ++i) {
//                 const currentElem = crayArray[i];
            
//                 if (Array.isArray(currentElem)) {
//                   for (let i = 0; i < crayArray.length; ++i) {
//                     const currentElem = crayArray[i];
                
//                     if (Array.isArray(currentElem)) {
//                       for (let i = 0; i < crayArray.length; ++i) {
//                         const currentElem = crayArray[i];
                    
//                         if (Array.isArray(currentElem)) {
                          
//                         } else {
                    
//                         }
//                       }
//                     } else {
                
//                     }
//                   }
//                 } else {
            
//                 }
//               }
//             } else {
        
//             }
//           }
//         } else {
    
//         }
//       }
//     } else {

//     }
//   }
// }

// Would we do this? I sure hope not.

// The first time weve seen a value case for recursion.
// How does recursion make my life easier?

const testArray = [1, 2, 3, 4, 5];

const recurseThroughArrays = (deepArray) => {
  for (let i = 0; i < deepArray.length; ++i) {
    const currentElem = deepArray[i];

    if (Array.isArray(currentElem)) {
      recurseThroughArrays(currentElem);
    } else {
      console.log(currentElem);
    }
  }
}

// recurseThroughArrays(crazyArray);

// Deeply Nested Arrays Recursively!

// The template for like, 4 problems tonight
const recurseArray = (anArr) => {
  let resultOfRecursion = null; // initialValue

  for (let i = 0; i < anArr.length; ++i) {
    const currentElem = anArr[i];

    if (Array.isArray(currentElem)) {
      // do recursion - resultOfRecursion += recurseArray(currentElem)
    } else {
      // do actual thing - resultOfRecursion += currentElem;
    }
  }

  return resultOfRecursion;
}

// Object Template for Recursion

const recurseObject = (anObj) => {
  let recursiveValue = null;

  for (let key in anObj) {
    const value = anObj[key];

    if (typeof value === 'object' && !!value) {
      // recursiveValue += recurseObject(value);
      recurseObject(value);
    } else {
      // recursiveValue += value;
      console.log(value);
    }
  }

  return recursiveValue;
}

// Red Herrings: null, and arrays seemingly work and can lead to confusing results.