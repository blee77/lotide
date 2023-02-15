const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected} ,This is true!`);
  } else  {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected} ,This is false!`);
  }
};

module.exports = assertArraysEqual;
