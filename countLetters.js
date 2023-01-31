const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
  }
};

// The function should take in a sentence (as a string) and then return a 
// count of each of the letters in that sentence.

// For example, countLetters('LHL') should return results indicating 
// that L appears twice, and H once.

// Before implementing this function, we need to think about how 
// it will report back these counts. It's not that we want to know how many H's 
// are in 
// this sentence?, because that would just be a number. We need it 
// report back multiple numbers.

// Perhaps this function could return an object where each unique character 
// encountered in the string is a property of the object and the value 
// for that property/key should be the number of occurrences for that character.

// Therefore countLetters("lighthouse in the house") would return:

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
// Remember that we can skip and not count spaces, as seen here.


// const iterable = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);

// const letters = new Map([
//   ["L", 1],
//   ["H", 2],
//   ["L", 3],
// ]);

let countLetters = function(str) {

  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]] = result[str[i]] + 1;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
};


console.log(countLetters("lighthouse in the house"));


// ['a', 1]
// ['b', 2]
// ['c', 3]

// for (const [key, value] of iterable) {
//   console.log(value);
// }
// 1
// 2
// 3