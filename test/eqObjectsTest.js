const eqObjects = require("../eqObjects");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true if objects are equal", () => {
    const multiColorShirtObject = { colors:["red", "blue"] , size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium" , colors:["red", "blue"] };
    const expected = true;
    assert.strictEqual(eqObjects(multiColorShirtObject,anotherMultiColorShirtObject), expected);
  });
 
  it("returns true if objects are equal", () => {
    const multiColorShirtObject = { colors:["red", "blue"] , size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium" , colors:["red", "blue"], sleeveLength: "long" };
    const expected = false;
    assert.strictEqual(eqObjects(multiColorShirtObject,longSleeveMultiColorShirtObject), expected);
  });
 
});
