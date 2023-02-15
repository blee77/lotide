const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1; i++) {

    if (Array.isArray) {
      return true;
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
  } else  {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
  }
};


const eqObjects = function(object1, object2) {

  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);

  for (let i of array1) {
    if (array1.length === array2.length) {
      return true;
    } else {
      return false;
    }

  }
};

const multiColorShirtObject = { colors:["red", "blue"] , size: "medium" };
const anotherMultiColorShirtObject = { size: "medium" , colors:["red", "blue"] };

eqArrays(assertEqual(eqObjects(multiColorShirtObject,anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject = { size: "medium" , colors:["red", "blue"], sleeveLength: "long" };

eqArrays(assertEqual(eqObjects(multiColorShirtObject,longSleeveMultiColorShirtObject),false)); // => false
