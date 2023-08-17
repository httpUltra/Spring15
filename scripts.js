// // Refactor the above code to use two arrow functions. Turn it into a one-liner.
// const double = (arr) => {return arr.map((val) => {return val * 2})};
// let fakeArr = [1, 2, 3, 4, 5,];

// // Replace ALL functions with arrow functions:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const squareAndFindEvens = (numbers) => {
//     let squares = numbers.map((num) => {
//         return num ** 2;
//     });
//     let evens = squares.filter((square) => {
//         return square % 2 === 0;
//     });
//     return evens;
// }

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to use the rest and spread operator.
// function findMini(num, ...rest){
//     return Math.min(num, ...rest);
// }
// // one line, arrow version:
// const findMinTwo = (num, ...rest) => (Math.min(num, ...rest));

// // Refactored code:
// const filterOutOdds = (...args) => args.filter(a => a % 2 === 0);

// // Write a function called mergeObjections that accepts two objects and returns a new object
// // which contains all the keys and values of the first object and second object
// let fakeObj = [
//     {a:1},
//     {b:2}
// ];
// let fakeObj2 = [
//     {c: 3},
//     {d: 4}
// ];
// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// // doubelAndReturnArgs
// const doubleAndReturn = (array, ...args) => [...array, ...args.map(val => val * 2)];

// const removeRandom = (...items) => {
//     const randomIndex = Math.floor(Math.random() * items.length);
//     items.splice(randomIndex, 1);
//     return items;
//   };

// const testar = [1, 2, 3];
// const testar2 = [4, 5, 6];
// const extend = (array1, array2) => [...array1, ...array2];

// const fakeject = 
//     {age: 15,
//     height: 4,
//     color: 'blue'};
// const addKeyVal = (obj, key, val) => {
//     return {...obj, [key]: val};
// };

// const removekey = (obj, key) => {
//     const newObj = { ...obj };
//     delete newObj[key];
//     return newObj;
// }


// const objA = {
//     age: 1,
//     height: 5,
// };
// const objB = {
//     color: 'blue',
//     hatred: 'yeah'
// };
// const combine = (obj1, obj2) => [{...obj1, ...obj2}];

// const modObj = (obj, key, val) => {
//     let newObj = { ...obj }
//     newObj[key] = val;
//     return newObj;
//  };