const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected} ,This is true!`);
  } else  {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected} ,This is false!`);
  }
};




const takeUntil = function(array, callback) {
  // ...
  const results = [];
  

  for (let item of array) {
    // if (!callback(item)) {

    //   results.push(item);
    // } else {
    //   return results;
    // }
      
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
    // return a "slice of the array with elements taken from t
    // the beginning." It should keep going until the callback/predicate 
    // returns a truthy value.

    // To keep things simple, the callback should 
    // only be provided one value: The item in the array.
    
    
    return results;
  
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => should PASS
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood']); // => should PASS
