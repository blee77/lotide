
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
//   } else if (actual !== expected) {
//     console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array[0] === null) {
    return "undefined";
  } else {
    return array[0];
  }
  
};


module.exports = head;