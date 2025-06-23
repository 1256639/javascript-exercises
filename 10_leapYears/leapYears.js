const leapYears = function(year) {
    const isYearDividableByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDividableByFourHundred = year % 400 === 0;

    if (isYearDividableByFour && !isCentury || isYearDividableByFourHundred){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
