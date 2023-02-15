const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
  }
};

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

