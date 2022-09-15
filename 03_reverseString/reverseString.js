const reverseString = function(inputString) {
    let arrayString = [];
    let stringReversed;

    //checks if input is an empty string. skips the two for loops that follow if truthy
    if (inputString === ""){
        stringReversed = "";
    }

    //extracts characters from input string in reverse order and saves it in an array
    for (let i = 0; i<inputString.length; i++){
            arrayString[i] = inputString.charAt((inputString.length - 1) - i);
    };

    //assembling the original text but in reverse order
    for (let i=0;i<arrayString.length;i++){
        if (i===0){
            stringReversed = arrayString[i];
        }
        else {
            stringReversed = stringReversed + arrayString[i];
        }
    }

    return stringReversed;

};

// Do not edit below this line
module.exports = reverseString;
