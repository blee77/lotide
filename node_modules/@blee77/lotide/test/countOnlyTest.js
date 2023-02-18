const countOnly = require("../countOnly");
const assert = require('chai').assert;

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("returns true if name is in the object", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const results1 = result["Jason"];
    const expected =  1;
    assert.strictEqual(results1, expected);
  });
 
  it("returns true if name is in the object", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const results1 = result["Karima"];
    const expected = undefined;
    assert.strictEqual(results1, expected);
  });
  it("returns true if name is in the object", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const results1 = result["Fang"];
    const expected =  2;
    assert.strictEqual(results1, expected);
  });
  it("returns true if name is in the object", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const results1 = result["Agouhanna"];
    const expected =   undefined;
    assert.strictEqual(results1, expected);
  });
});

