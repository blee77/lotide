const takeUntil = require("../takeUntil");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#takeUntil", () => {

  it("returns a truthy value after collecting items from a provided array until the callback is provided", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(results1,expected);
  });


  it("returns a truthy value after collecting items from a provided array until the callback is provided", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    const expected = [ 'I\'ve', 'been', 'to', 'Hollywood'];
    assert.deepEqual(results2, expected);
  });

  
});


