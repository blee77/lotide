
const eqObjects = function(object1, object2) {

  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);

  for (let i of array1) {
    if (array1.length === array2.length) {
      return true;
    } else {
      return false;
    }

  }
};

module.exports = eqObjects;
