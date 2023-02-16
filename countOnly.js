// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed :  ${actual}   ===  ${expected}`);
//   } else if (actual !== expected) {
//     console.log(` 🛑🛑🛑 Assertion Failed : ${actual}  !==  ${expected}`);
//   }
// };


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


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

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;