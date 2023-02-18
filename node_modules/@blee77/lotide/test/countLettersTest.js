const countLetters = require("../countLetters");
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns the count of each letter in the array", () => {
    const result = countLetters("lighthouse in the house");
    console.log(result);
    const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1 };
    assert.deepEqual(result, expected);
  });
 
});


