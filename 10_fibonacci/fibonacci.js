const fibonacci = function(inputNumber) {
    let output; 
    let processArray = [];
    if (inputNumber>0 && (typeof (+inputNumber))==='number') {
        for(let i=0;i<(+inputNumber);i++) {
            if (i===0 || i===1) {
                processArray[i] = 1;
                if ((+inputNumber)===1 || (+inputNumber)===2){
                    return output = processArray[i];
                }
            }
            else if (i!==0 && i!==1) {
                processArray[i] = processArray[i-1] + processArray[i-2];
                if (i===(+inputNumber-1)){
                    return output = processArray[i];
                }
            }
        }
    }
    else {
        return output="OOPS";
    }
        
};

// Do not edit below this line
module.exports = fibonacci;
