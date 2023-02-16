const eqObjects = require("./eqObjects");


const assertObjectsEqual = function(actual, expected) {


  let areObjectsEqual = eqObjects(actual, expected);
 

  const inspect = require('util').inspect; 
  if (areObjectsEqual) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed : ${inspect(actual)} ===  ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;
