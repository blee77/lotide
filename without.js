const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual , expected)) {
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


const without = function(itemsToRemove, source) {
  let result = [];
  
  for (const element of itemsToRemove) {
    const found = source.find((item) => item === element);
    if (!found) {
      result.push(element);

    }

  }
  return result;
  
};

let test1 = without([1, 2, 3], [1]) // => [2, 3]
let test2 = without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(test1, [2,4]);