function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b/a;
}

function modulo(a, b) {
  // Work in progress, not done yet!
}

function badFunction() {
  // this is a bug that broke production!
  return null;
}

module.exports = { add, subtract, multiply, divide };