const removeFromArray = function(ourArray, ...itemsToRemove) {
    for (let i = ourArray.length-1; i>=0; i--) {
        if (itemsToRemove.includes(ourArray[i])) {
            ourArray.splice(i, 1);
        }
    }
    return ourArray;
};

// Do not edit below this line
module.exports = removeFromArray;
