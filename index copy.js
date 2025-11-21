let firstNumber = process.argv[2];
let secondNumber = process.argv[3];
let way = process.argv[4];

const plus = require("./plus");
const minus = require("./minus");
const multiply = require("./multiply");
const divide = require("./divide");

switch (way) {
  case "plus":
    plus(+firstNumber, +secondNumber);
    break;
  case "minus":
    minus(firstNumber, secondNumber);
    break;
  case "multiply":
    multiply(firstNumber, secondNumber);
    break;
  case "divide":
    divide(firstNumber, secondNumber);
    break;
}