const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [] for an array with 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for an array with 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("returns a singular middle element for an array of odd elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns a singular middle element for an array of odd elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns two middle elements for an array of even elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns two middle elements for an array of even elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

