const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected} ,This is true!`);
  } else  {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected} ,This is false!`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  
};
const map = function(array, callback) {
  const results = [];
  

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[1]);
assertArraysEqual(eqArrays(results1, [ 'r', 'o', 'o', 'a', 'o' ]), true); // => should PASS
