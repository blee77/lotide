const assertEqual = function(actual, expected) {
  console.log("actual", actual);
  console.log("expected", expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
  } else  {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
  }
};
const tail = function(array) {
  // if (array.length < 1) {
  //   return [];
  // }
  // console.log(array.slice(1));
  return array.slice(1);
};
let words = ["Yo Yo", "Lighthouse", "Labs"];
words = tail(words);
assertEqual(words.length, 3);

let numbers = [1,2,3,4,5];
numbers = tail(numbers);
assertEqual(numbers.length, 4);
