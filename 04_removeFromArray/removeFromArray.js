const removeFromArray = function(inputAllObjects) {

    //merges all inputs in the function to one object and extrance the first element
    let allInputs = Array.from(arguments);
    let inputObjects = allInputs[0];

    //to create objects to be removed in first element
    let elementsToRemove = [];
    let k = 0;
    for (let i=1;i<allInputs.length;i++) {
        elementsToRemove[k] = allInputs[i];
        k++;
    };

    //delete elements from inputObjects that are in elementsToRemove
    for(let element of elementsToRemove) {
        for (let elementInInput of inputObjects) {
            if (element === elementInInput) {
                inputObjects.splice(inputObjects.indexOf(elementInInput),1);
                break;
            }
            else {
                continue;
            }
        };
    };
    return inputObjects;
};

// Do not edit below this line
module.exports = removeFromArray;
