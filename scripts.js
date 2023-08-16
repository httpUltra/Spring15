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