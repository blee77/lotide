
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


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


const letterPositions = function(sentence) {

  const result = {};
 

  for (let i = 0; i < sentence.length; i++) {

    const objectKey = sentence[i];
    if (result[objectKey]) {
      result[objectKey].push(i);
    } else  {
      result[objectKey] = [i];
    }
  }
  return result;
};




console.log(letterPositions("lighthouse in the house"));


assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("hello"));