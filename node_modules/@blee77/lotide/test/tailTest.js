const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("tail should not modify original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(words.length, 3);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("tail should return everything but the first element", () => {
    const numbers = [1,2,3,4,5];
    const result = tail(numbers);
    assert.deepEqual(result, [2,3,4,5]);
  });
});
