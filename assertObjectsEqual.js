
const eqObjects = function(object1, object2) {
  console.log(object1);
  console.log(object2);

  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);

  for (let i of array1) {
    if (array1.length === array2.length) {
      return true;
    } else {
      return false;
    }

  }
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!

  let areObjectsEqual = eqObjects(actual, expected);
  //Implement eqObjects

  const inspect = require('util').inspect; // <= add this line
  if (areObjectsEqual) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed : ${inspect(actual)} ===  ${inspect(expected)}`);
  }
};



assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // => should PASS