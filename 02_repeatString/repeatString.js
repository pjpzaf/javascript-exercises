const repeatString = function(string,num) {
    
    let newString;

    if (num===0) {
        newstring = "\" \"";
    }
    else if (num>0) {
        newString = string;

        if (num!=1) {
            mainLoop: for (let i=1 ;i<num ;i++) {
                newString = newString + string;
            }
        }
    }
    else {
        newString = "ERROR";
    }
        

return newString;
};

// Do not edit below this line
module.exports = repeatString;
