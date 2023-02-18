const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#without", () => {
  it("returns a matching or not matching array if one item is removed from the array", () => {
    let results1 = without([1, 2, 3], [1]);
    
    const expected = [2,3];
    assert.deepEqual(results1, expected);
  });
 
});

