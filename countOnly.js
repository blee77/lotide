

const countOnly = (firstNames, checkObj) => {
  let result = {};
  for (let i = 0; i < firstNames.length; i++) {
    let name = firstNames[i];
    if (checkObj[name]) {
      if (name in result) {
        result[name] += 1;
      } else {
        result[name] = 1;
      }
    }
  }
  
  return result;
};


module.exports = countOnly;