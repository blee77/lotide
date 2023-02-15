
const tail = require("../tail");
const assertEqual = require("../assertEqual");




let words = ["Yo Yo", "Lighthouse", "Labs"];
words = tail(words);
assertEqual(words.length, 3);

let numbers = [1,2,3,4,5];
numbers = tail(numbers);
assertEqual(numbers.length, 4);