

const letterPositions = function(sentence) {

  const result = {};
 

  for (let i = 0; i < sentence.length; i++) {

    const objectKey = sentence[i];
    if (result[objectKey]) {
      result[objectKey].push(i);
    } else  {
      result[objectKey] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;

