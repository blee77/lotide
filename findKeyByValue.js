const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
  }
};




let findKeyByValue = function(objectCheck, value) {

  for (const key in objectCheck) {
    const objectValue = objectCheck[key];
    if (objectValue === value) {
      return key;
    }
    
  }
  
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestCars = {
  Japan: "Honda",
  America: "Ford",
  France:  "Fiat"
};

assertEqual(findKeyByValue(bestCars, "Honda"), "Japan");
assertEqual(findKeyByValue(bestCars, "Ford"), "America");
