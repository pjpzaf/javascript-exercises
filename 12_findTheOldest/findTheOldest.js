const findTheOldest = function(people) {
const today = new Date();
for (person of people) {
    if (person.yearOfDeath===undefined) {
        person.age = today.getFullYear()-person.yearOfBirth;
    }
    else {
        person.age = person.yearOfDeath-person.yearOfBirth;
    }
}

const sortedPeople = people.sort((a, b) => (a.age) > (b.age) ? -1:1)
    return sortedPeople[0];
}

// Do not edit below this line
module.exports = findTheOldest;
