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
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject)); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject)); // => false


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);



const multiColorShirtObject = { colors:["red", "blue"] , size: "medium" };
const anotherMultiColorShirtObject = { size: "medium" , colors:["red", "blue"] };

eqArrays(assertEqual(eqObjects(multiColorShirtObject,anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject = { size: "medium" , colors:["red", "blue"], sleeveLength: "long" };

eqArrays(assertEqual(eqObjects(multiColorShirtObject,longSleeveMultiColorShirtObject),false)); // => false
