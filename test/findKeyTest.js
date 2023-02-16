const findKey = require("../findKey");
const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns a pass if the found key matches expected", () => {
    
    const results1 =
    assertEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),"noma");

    const expected = "noma";

    assert.deepEqual(findKey(results1, expected));
  });
 
});

