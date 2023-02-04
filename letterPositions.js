
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


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// This challenge is similar to the countLetters activity and
//  allows us to spend some more time solving problems with objects.

// We'll implement a new function letterPositions
//  which will return all the indices (zero-based positions) 
//  in the string where each character is found.

// For each letter, instead of returning just one number 
// to represent its number of occurrences,

//multiple numbers may be 
// needed to represent all the places in the string that it shows up.



const letterPositions = function(sentence) {

  const result = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {

    const objectKey = sentence[i];  //h
    if (result[objectKey]) {
      result[objectKey].push(i);
      // console.log(result);
    } else  {
      result[objectKey] = [i];
    }
  }
  return result;
};

// const result = {
//   'l': [1,2,3,4,5]
// }



console.log(letterPositions("lighthouse in the house"));

// Test
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("hello"));