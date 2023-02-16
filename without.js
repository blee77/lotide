


const without = function(itemsToRemove, source) {
  let result = [];
  
  for (const element of itemsToRemove) {
    const found = source.find((item) => item === element);
    if (!found) {
      result.push(element);

    }

  }
  return result;
  
};

module.exports = without;