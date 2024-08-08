const ALPHANUMERICAL = 'abcdefghijklmnopqrstuvwxyz0123456789';

const palindromes = function (string) {
    const filtered = string
        .toLowerCase()
        .split("")
        .filter((char) => ALPHANUMERICAL.includes(char));
    const forward = filtered.join("");
    const backward = filtered.reverse().join("");
    return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
