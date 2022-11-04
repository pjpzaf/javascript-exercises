const getTheTitles = function(books) {
    const listOfTitles = books.map(books => books["title"]);
    return listOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
