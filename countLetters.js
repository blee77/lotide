

let countLetters = function(str) {

  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]] = result[str[i]] + 1;
    } else {
      result[str[i]] = 1;
    }
  }
  console.log(result, "Hello");
  return result;
};


module.exports = countLetters;

