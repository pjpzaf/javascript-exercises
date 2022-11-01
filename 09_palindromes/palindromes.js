const palindromes = function (inputString) {

    let inputWord = inputString.toLowerCase().replaceAll(",","").replaceAll(".","").replaceAll("!","").replaceAll(" ","").replaceAll("?","");
    let outputBool;

    inputArray = Array.from(inputWord);
    processArray = Array.from(inputWord);
    processArray.reverse();
    
    for (let i=0;i<inputArray.length-1;i++) {
        if (inputArray[i]===processArray[i]) {
            continue;
        }
        else if (inputArray[i]!==processArray[i]) {
            return outputBool = false;
        } 
    }
    return outputBool = true;
}

// Do not edit below this line
module.exports = palindromes;
