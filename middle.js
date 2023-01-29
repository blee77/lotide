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

const middle = function(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1 || arr.length === 2) {
      return [];
    } else if (arr.length % 2 === 0) {

      return [arr[((arr.length) / 2) - 1],arr[((arr.length) / 2) ]];

    } else {
      return [arr[Math.floor(arr.length / 2)]];
    }
    
  }
  
};


// For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

