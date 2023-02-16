const flatten = require("../flatten");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns nested array into a normal array", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(result, expected);
  });
 
});









