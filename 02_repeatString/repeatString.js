const repeatString = function(stringToRepeat, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return "ERROR";
    }
    
    let totalString = "";
    for (let i=0; i<numberOfRepeats; i++) {
        totalString += stringToRepeat;
    }
    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
