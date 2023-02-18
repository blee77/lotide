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

  it("returns true if found key and value match", () => {

    const bestCars = {
      Japan: "Honda",
      America: "Ford",
      France:  "Fiat"
    };

    const result1 = assertEqual(findKeyByValue(bestCars, "Honda"));
    const expected = "Japan";

    assert.deepEqual(findKeyByValue(result1, expected));

  });

  it("returns true if found key and value match", () => {

    const bestCars = {
      Japan: "Honda",
      America: "Ford",
      France:  "Fiat"
    };

    const result1 = assertEqual(findKeyByValue(bestCars, "Ford"));
    const expected = "America";

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




