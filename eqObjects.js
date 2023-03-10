const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length === obj2Keys.length) {
    for (let key of obj1Keys) {
      console.log("checking isArray");
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        console.log("isArray");
        if (!eqArrays(object1[key], object2[key])) {
          console.log("Arrays not equal");
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        console.log("object values not equal");
        return false;
      }
    }
    console.log("objects are equal");
    return true;
  }
  return false;
};

module.exports = eqObjects;

