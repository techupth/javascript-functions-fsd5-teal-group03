// Nam hh-functions-ex4
let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

let addResult = calculator.add;
console.log(addResult(10, 20));

let divideResult = calculator.divide;
console.log(divideResult(3000, 10));
