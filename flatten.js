const flatten = function(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!item.length) {
      result.push(item);
    } else {
      result.push(...item);
    }
  }
  return result;
};

module.exports = flatten;