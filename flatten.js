const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual , expected)) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected} ,This is true!`);
  } else  {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected} ,This is false!`);
  }
};


const flatten = function(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!item.length) {
      result.push(item);
    } else {
      result.push(...item);
    }
  }
  return result;
};
const result = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);