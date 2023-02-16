const findKeyByValue = require("../findKeyByValue");
const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it("returns true if found key and value match", () => {

    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const result1 = assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    const expected = "drama";

    assert.deepEqual(findKeyByValue(result1, expected));
  });
 
});




// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const bestCars = {
//   Japan: "Honda",
//   America: "Ford",
//   France:  "Fiat"
// };

// assertEqual(findKeyByValue(bestCars, "Honda"), "Japan");
// assertEqual(findKeyByValue(bestCars, "Ford"), "America");
