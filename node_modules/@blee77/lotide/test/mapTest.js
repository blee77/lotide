const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#map", () => {
  it("returns the second letter of every word in the array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[1]);
    const expected = [ 'r', 'o', 'o', 'a', 'o' ];
    assert.deepEqual(results1, expected);
  });
 
});


