const eventEmitter = require("events");
const plus = require("./plus");
const minus = require("./minus");
const multiply = require("./multiply");
const divide = require("./divide");

let firstNumber = process.argv[2];
let secondNumber = process.argv[3];
let way = process.argv[4];

const myEmitter = new eventEmitter();

myEmitter.on("plus", (a, b) => {
  myEmitter.emit("result", plus(+a, +b));
});

myEmitter.on("divide", (a, b) => {
  myEmitter.emit("result", divide(+a, +b));
});

myEmitter.on("minus", (a, b) => {
  myEmitter.emit("result", minus(+a, +b));
});

myEmitter.on("multiply", (a, b) => {
  myEmitter.emit("result", multiply(+a, +b));
});

myEmitter.on("result", (data) => {
  console.log(data);
});

myEmitter.emit(way, +firstNumber, +secondNumber);
