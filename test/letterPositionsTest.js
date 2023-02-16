const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns the positions of the letters in the array", () => {
    const results1 = letterPositions("hello").e;
    const expected = [1];
    assert.deepEqual(results1, expected);
  });

  it("returns the positions of the letters in the array", () => {
    const results1 = letterPositions("lighthouse in the house");
    const expected = {l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      ' ': [ 10, 13, 17 ],
      n: [ 12 ]};
    assert.deepEqual(results1, expected);
  });
 
});


