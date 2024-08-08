const findTheOldest = function(people) {
    return people
        .reduce((oldest, person) => (getAge(person) > getAge(oldest) ? person : oldest) , {});
};

function getAge(person) {
    if (!("yearOfBirth" in person)) return -Infinity;
    if ("yearOfDeath" in person) return person.yearOfDeath - person.yearOfBirth;
    return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
