const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || num1 <= 0 || !Number.isInteger(num2) || num2 <= 0) {
        return "ERROR";
    }

    const increment = (num1 < num2) ? 1 : -1;
    let sum = num2;
    for (let i = num1; i !== num2; i += increment) sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
