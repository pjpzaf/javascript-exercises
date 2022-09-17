const sumAll = function(inputNumbers) {

    let inputPair = Array.from(arguments);
    let sumOfAll;

    //to ensure that input are positive integers 
    if (inputPair.length > 2) {
        sumOfAll = "ERROR";
    }
    else if (typeof inputPair[0] != 'number' || typeof inputPair[1] != 'number') {
        sumOfAll = "ERROR"
    }
    else if (Math.sign(inputPair[0])===-1 || Math.sign(inputPair[1])===-1) {
        sumOfAll = "ERROR"
    }

    //The part that does the calculation
    else {
        
        //switch integers if the first one is larger
        if (inputPair[0] > inputPair[1]) {
            let temp = inputPair[0];
            inputPair[0] = inputPair[1];
            inputPair[1] = temp;
        }

        // loop to calculate sum of all integers in between two input integers
        if (inputPair[1]-inputPair[0]===1) {
            sumOfAll = inputPair[0] + inputPair[1];
        }
        else {
            let diff = inputPair[1]-inputPair[0];
            sumOfAll = inputPair[0];

            for(i=0;i<diff;i++) {        
                sumOfAll = sumOfAll + inputPair[0];        
                inputPair[0] = inputPair[0] + 1;
            }

            sumOfAll = sumOfAll + inputPair[1] - 1;
        }

    }



    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
