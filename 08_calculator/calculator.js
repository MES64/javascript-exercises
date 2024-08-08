const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((result, num) => result * num, 1);
};

const power = function(a, b) {
  let result = 1;
	for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let result = 1;
	for (let num = 1; num <= a; num++) {
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
