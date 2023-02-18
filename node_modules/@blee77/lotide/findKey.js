const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
  }
};


const findKey = function(objectCheck, callback) {
  for (const key in objectCheck) {
    const objectValue = objectCheck[key];
    const compareResults = callback(objectValue);
    if (compareResults) {
      return key;
    }
    
  }
};


module.exports = findKey;