const leapYears = function(inputYear) {

    if (inputYear%4!=0) {
        isLeapYear = false;
    }
    else if (inputYear%4===0) {
        if (inputYear%100===0 && inputYear%400!=0) {
            isLeapYear = false;
        }
        else if (inputYear%100===0 && inputYear%400===0) {
            isLeapYear = true;
        }
        else {
            isLeapYear = true;
        }
    }

    return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
