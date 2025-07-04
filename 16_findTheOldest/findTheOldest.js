const getAge = function(birth, death){
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfBirth);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentAge : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
