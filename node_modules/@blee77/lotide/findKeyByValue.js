

let findKeyByValue = function(objectCheck, value) {

  for (const key in objectCheck) {
    const objectValue = objectCheck[key];
    if (objectValue === value) {
      return key;
    }
    
  }
  
};

module.exports = findKeyByValue;