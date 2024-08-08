const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num < 3) return 1;
    let prevTwoNumbers = [1, 1];
    for (let i = 2; i < num; i++) {
        prevTwoNumbers = [prevTwoNumbers[1], prevTwoNumbers[0] + prevTwoNumbers[1]];
    }
    return prevTwoNumbers[1];
};

// Do not edit below this line
module.exports = fibonacci;
