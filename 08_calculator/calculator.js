const add = function() {
	let inputArray = Array.from(arguments);
  let isSum = inputArray[0] + inputArray[1];
  return isSum
};

const subtract = function() {
  let inputArray = Array.from(arguments);
  let isDiff = inputArray[0] - inputArray[1];
  return isDiff	
};

const sum = function(inputArray) {
  let initialVal = 0;
  let theSum = inputArray.reduce(
    (prevVal, currentVal) => prevVal + currentVal, initialVal
  )
  return theSum
};

const multiply = function(inputArray) {
  let initialVal = 1;
  let theProduct = inputArray.reduce(
    (prevVal, currentVal) => prevVal * currentVal, initialVal
  )
  return theProduct
};

const power = function() {
	let inputArray = Array.from(arguments);
  let isResult = inputArray[0]**inputArray[1];
  return isResult	
};

const factorial = function(inputNum) {
	let factorialArray = []; let j=0;
  if (inputNum===0) {
    let outputNum = 1;
    return outputNum;
  }
  else if (inputNum != 0) {
  for(let i=inputNum;i>0;i--){
    factorialArray[j] = i;
    j = j + 1;
  }
  let isProduct = factorialArray.reduce(
    (prevVal, currentVal) => prevVal * currentVal, 1
  )
    return isProduct
  }
  

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
